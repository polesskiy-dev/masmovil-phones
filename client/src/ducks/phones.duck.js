import { createAction } from 'redux-actions';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError, delay } from 'rxjs/operators';

import apiUrls from '../constants/api.constants';

export const FETCH_PHONES_REQUEST = 'FETCH_PHONES_REQUEST';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_ERROR = 'FETCH_PHONES_ERROR';

export const fetchPhonesRequest = createAction(FETCH_PHONES_REQUEST);
export const fetchPhonesSuccess = createAction(FETCH_PHONES_SUCCESS);
export const fetchPhonesError = createAction(FETCH_PHONES_ERROR);

export const fetchPhonesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PHONES_REQUEST),
    delay(1500),
    switchMap(() =>
      ajax.getJSON(apiUrls.PHONES_LIST_URL).pipe(
        map(res => fetchPhonesSuccess(res)),
        catchError(error => of(fetchPhonesError(error.message)))
      )
    )
  );

export const phonesInitialState = [];

export default function pulseReducer(phones = phonesInitialState, action) {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return action.payload;
    case FETCH_PHONES_REQUEST:
    case FETCH_PHONES_ERROR:
    default:
      return phones;
  }
}
