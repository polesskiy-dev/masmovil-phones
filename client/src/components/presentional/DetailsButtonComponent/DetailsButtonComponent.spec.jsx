import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash/fp';

import withDefaultIntl from '../../../helpers/with-default-intl';
import DetailsButtonComponent from './DetailsButtonComponent';

it('<PhoneDetailComponent/ > renders correctly with all required fields', () => {
  const tree = renderer
    .create(withDefaultIntl(<DetailsButtonComponent onClick={_.noop} />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
