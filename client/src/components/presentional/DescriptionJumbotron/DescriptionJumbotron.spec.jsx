import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash/fp';

import withDefaultIntl from '../../../helpers/with-default-intl';
import DescriptionJumbotron from './DescriptionJumbotron';

it('<DescriptionJumbotron/ > renders correctly with all required fields', () => {
  const tree = renderer
    .create(withDefaultIntl(<DescriptionJumbotron onClick={_.noop} />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
