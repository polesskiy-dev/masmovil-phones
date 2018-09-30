import _ from 'lodash/fp';
import { createSelector } from 'reselect';

export const getTheme = _.get('theme');

export default createSelector(getTheme, theme => ({ theme }));
