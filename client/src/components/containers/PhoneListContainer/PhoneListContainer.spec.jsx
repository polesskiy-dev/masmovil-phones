import React from 'react';
import renderer from 'react-test-renderer';

import withDefaultIntl from '../../../helpers/with-default-intl';
import { PhoneListContainerRaw } from './PhoneListContainer';

jest.mock('../PhoneDetailModal/PhoneDetailModal', () => () => (
  <div>mocked</div>
));

const stubPhones = [
  {
    DeviceName: 'Apple iPhone',
    Brand: 'Apple',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/0/02/IPhone_2G_PSD_Mock.png',
    technology: 'GSM',
    announced: '2007, January. Released 2007, June',
    dimensions: '115 x 61 x 11.6 mm (4.53 x 2.40 x 0.46 in)',
    type: 'TFT capacitive touchscreen, 16M colors',
    size: '3.5 inches (~52.0% screen-to-body ratio)',
    os: '',
  },
];

describe('<PhoneListContainerRaw/ >', () => {
  it('renders correctly with empty phones list', () => {
    const tree = renderer
      .create(withDefaultIntl(<PhoneListContainerRaw phones={[]} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with phones list', () => {
    const tree = renderer
      .create(withDefaultIntl(<PhoneListContainerRaw phones={stubPhones} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
