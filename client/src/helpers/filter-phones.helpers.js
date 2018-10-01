import _ from 'lodash/fp';

export const filterByDeviceName = DeviceName =>
  _.flow(
    _.filter({ DeviceName }),
    _.head
  );
