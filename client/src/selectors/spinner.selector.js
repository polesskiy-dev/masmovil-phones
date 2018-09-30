import _ from 'lodash/fp';
import { createSelector } from 'reselect';

const getFetchingDataStatus = _.get('isFetching');

export default createSelector(getFetchingDataStatus, isFetching => ({
  isFetching,
}));
