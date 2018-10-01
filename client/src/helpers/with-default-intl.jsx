import React from 'react';
import { IntlProvider } from 'react-intl';

import messages_en from '../translations/en';

const withDefaultIntl = (children, props) => (
  <IntlProvider {...props} locale="en" messages={messages_en}>
    {children}
  </IntlProvider>
);

export default withDefaultIntl;
