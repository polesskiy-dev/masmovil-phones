import { combineReducers } from 'redux';

import phonesReducer from './ducks/phones.duck';

const rootReducer = combineReducers({ phones: phonesReducer });

export default rootReducer;
