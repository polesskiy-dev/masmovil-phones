import React from 'react';
import renderer from 'react-test-renderer';

import withDefaultIntl from '../../../helpers/with-default-intl';
import PhoneDetailComponent from './PhoneDetailComponent';

it('<PhoneDetailComponent/ > renders correctly with all required fields', () => {
  const tree = renderer
    .create(
      withDefaultIntl(
        <PhoneDetailComponent
          type=""
          announced=""
          DeviceName=""
          img=""
          size=""
          technology=""
        />
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
