import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';

import '../common-styles/layout/grid.css';
import '../common-styles/abstracts/color.vars.css';
import '../common-styles/abstracts/font.vars.css';
import '../common-styles/abstracts/size.vars.css';
import '../common-styles/base/base.css';
import '../common-styles/base/normalize.css';
import './App.css';

import AppHeader from './layout/AppHeader/AppHeader';
import InfoSubHeader from './layout/InfoSubHeader/InfoSubHeader';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';
import messages_es from '../translations/es.json';
import messages_en from '../translations/en.json';

const messages = {
  es: messages_es,
  en: messages_en,
};

const language = 'es';

class App extends PureComponent {
  render() {
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="App">
          <AppHeader />
          <InfoSubHeader />
          <PhoneListContainer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
