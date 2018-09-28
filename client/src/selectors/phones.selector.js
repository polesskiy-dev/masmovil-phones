import _ from 'lodash/fp';
import { createSelector } from 'reselect';

const getPhones = _.get('phones');

export default createSelector(getPhones, phones => ({ phones }));
