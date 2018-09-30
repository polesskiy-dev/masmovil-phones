import { combineReducers } from 'redux';

import phonesReducer from './ducks/phones.duck';
import isFetchingReducer from './ducks/is-fetching-data.duck';
import languageReducer from './ducks/language.duck';
import themeReducer from './ducks/theme.duck';

const rootReducer = combineReducers({
  phones: phonesReducer,
  isFetching: isFetchingReducer,
  language: languageReducer,
  theme: themeReducer,
});

export default rootReducer;
