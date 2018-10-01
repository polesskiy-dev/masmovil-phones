import _ from 'lodash/fp';
import { createAction } from 'redux-actions';

import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import CircleIterator from '../helpers/CircleIterator';
import { getTheme } from '../selectors/theme.selector';

export const SWITCH_THEME = 'SWITCH_THEME';
export const switchTheme = createAction(SWITCH_THEME);
const themes = ['light', 'dark'];
const themesIterator = new CircleIterator(themes);
const themeInitialState = _.head(themes);

const createThemeName = theme => `${theme}-theme`;
const setThemeClass = theme => {
  const appBody = document.querySelector('body');

  // remove all themes
  themes.forEach(themeItem =>
    appBody.classList.remove(createThemeName(themeItem))
  );
  appBody.classList.add(createThemeName(theme));
};

export const switchTemeEpic = (action$, state$) =>
  action$.pipe(
    ofType(SWITCH_THEME),
    switchMap(() => {
      const theme = getTheme(state$.value);
      setThemeClass(theme);

      return [];
    })
  );

export default function themeReducer(theme = themeInitialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return themesIterator.next();
    default:
      return theme;
  }
}
