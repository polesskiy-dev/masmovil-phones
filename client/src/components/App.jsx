import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../common-styles/layout/grid.css';
import '../common-styles/abstracts/color.vars.css';
import '../common-styles/abstracts/font.vars.css';
import '../common-styles/base/base.css';
import '../common-styles/base/normalize.css';
import './App.css';

import AppMenuHeader from './containers/AppMenuHeader/AppMenuHeader';
import DescriptionJumbotron from './presentional/DescriptionJumbotron/DescriptionJumbotron';
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
        <div className="main-app">
          <header>
            <AppMenuHeader />
          </header>
          <DescriptionJumbotron />
          <main>
            <PhoneListContainer />
          </main>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
