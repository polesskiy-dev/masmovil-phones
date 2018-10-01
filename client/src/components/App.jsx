import React, { PureComponent } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../common-styles/abstracts/color.vars.css';
import '../common-styles/base/base.css';
import '../common-styles/base/normalize.css';
import './App.css';

import ConnectedIntlProvider from './containers/ConnectedIntlProvider/ConnectedIntlProvider';
import AppMenuHeader from './containers/AppMenuHeader/AppMenuHeader';
import DescriptionJumbotron from './presentional/DescriptionJumbotron/DescriptionJumbotron';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';

class App extends PureComponent {
  render() {
    return (
      <ConnectedIntlProvider>
        <div className="main-app">
          <header>
            <AppMenuHeader />
          </header>
          <DescriptionJumbotron />
          <main>
            <PhoneListContainer />
          </main>
        </div>
      </ConnectedIntlProvider>
    );
  }
}

export default App;
