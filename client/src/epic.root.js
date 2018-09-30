import { combineEpics } from 'redux-observable';

import { fetchPhonesEpic } from './ducks/phones.duck';
import { switchTemeEpic } from './ducks/theme.duck';

const rootEpic = combineEpics(fetchPhonesEpic, switchTemeEpic);

export default rootEpic;
