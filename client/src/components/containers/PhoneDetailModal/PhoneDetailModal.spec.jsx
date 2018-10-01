import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash/fp';

import withDefaultIntl from '../../../helpers/with-default-intl';
import PhoneDetailModal from './PhoneDetailModal';

const stubPhone = {
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
};

jest.mock(
  '../ConnectedIntlProvider/ConnectedIntlProvider',
  () => ({ children }) => <div>{children}</div>
);

it('<PhoneDetailModal/ > renders correctly when Modal is closed', () => {
  const tree = renderer
    .create(
      withDefaultIntl(
        <PhoneDetailModal
          selectedPhone={stubPhone}
          modalIsOpen={false}
          selectedDeviceName={stubPhone.DeviceName}
          toggleModal={_.noop}
        />
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
