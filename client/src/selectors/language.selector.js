import _ from 'lodash/fp';
import { createSelector } from 'reselect';

export const getLanguage = _.get('language');

export default createSelector(getLanguage, language => ({ language }));
