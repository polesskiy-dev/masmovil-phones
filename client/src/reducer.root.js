import { combineReducers } from 'redux';

import phonesReducer from './ducks/phones.duck';
import isFetchingReducer from './ducks/is-fetching-data.duck';

const rootReducer = combineReducers({
  phones: phonesReducer,
  isFetching: isFetchingReducer,
});

export default rootReducer;
