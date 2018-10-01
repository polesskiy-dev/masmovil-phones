import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash/fp';

import withDefaultIntl from '../../../helpers/with-default-intl';
import { AppMenuHeaderRaw } from './AppMenuHeader';

it('<AppMenuHeaderRaw/ > renders correctly with all required fields', () => {
  const tree = renderer
    .create(
      withDefaultIntl(
        <AppMenuHeaderRaw
          language="en"
          switchLanguage={_.noop}
          theme="light"
          switchTheme={_.noop}
        />
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
