import _ from 'lodash/fp';
import { createAction } from 'redux-actions';

import CircleIterator from '../helpers/CircleIterator';

export const SWITCH_THEME = 'SWITCH_THEME';
export const switchTheme = createAction(SWITCH_THEME);
const themes = ['light', 'dark'];

const themesIterator = new CircleIterator(themes);

const themeInitialState = _.head(themes);

export default function themeReducer(theme = themeInitialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return themesIterator.next();
    default:
      return theme;
  }
}
