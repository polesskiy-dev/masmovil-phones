import _ from 'lodash/fp';
import { createAction } from 'redux-actions';

import CircleIterator from '../helpers/CircleIterator';

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const switchLanguage = createAction(SWITCH_LANGUAGE);
const languages = ['es', 'en'];

const languagesIterator = new CircleIterator(languages);

const languageInitialState = _.head(languages); // of it can be fetched from browser locale

export default function languageReducer(
  language = languageInitialState,
  action
) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return languagesIterator.next();
    default:
      return language;
  }
}
