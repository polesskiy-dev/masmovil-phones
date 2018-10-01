import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash/fp';

import withDefaultIntl from '../../../helpers/with-default-intl';
import MenuButton from './MenuButton';

it('<PhoneDetailComponent/ > renders Theme button correctly with all required fields', () => {
  const tree = renderer
    .create(
      withDefaultIntl(
        <MenuButton
          caption=""
          onClick={_.noop}
          messageId="AppMenuHeader.theme"
        />
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
