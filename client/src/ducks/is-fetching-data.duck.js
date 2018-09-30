import {
  FETCH_PHONES_ERROR,
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS
} from './phones.duck';

const isFetchingInitialState = false;

export default function isFetchingReducer(
  isFetching = isFetchingInitialState,
  action
) {
  switch (action.type) {
    case FETCH_PHONES_REQUEST:
      return true;
    case FETCH_PHONES_SUCCESS:
    case FETCH_PHONES_ERROR:
      return false;
    default:
      return isFetching;
  }
}
