import { combineEpics } from 'redux-observable';

import { fetchPhonesEpic } from './ducks/phones.duck';

const rootEpic = combineEpics(fetchPhonesEpic);

export default rootEpic;
