import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash/fp';

import withDefaultIntl from '../../../helpers/with-default-intl';
import PhoneCardComponent from './PhoneCardComponent';

it('<PhoneDetailComponent/ > renders correctly with all required fields', () => {
  const tree = renderer
    .create(
      withDefaultIntl(
        <PhoneCardComponent
          type=""
          DeviceName=""
          img=""
          os=""
          showPhoneDetails={_.noop}
        />
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
