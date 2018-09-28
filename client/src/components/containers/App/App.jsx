import React, { Component } from 'react';

import '../../../common-styles/layout/grid.css';
import '../../../common-styles/abstracts/color.vars.css';
import '../../../common-styles/abstracts/font.vars.css';
import '../../../common-styles/abstracts/size.vars.css';
import '../../../common-styles/base/base.css';
import '../../../common-styles/base/normalize.css';
import './App.css';

import AppHeader from '../../layout/AppHeader/AppHeader';
import InfoSubHeader from '../../layout/InfoSubHeader/InfoSubHeader';
import PhoneListContainer from '../PhoneListContainer/PhoneListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <InfoSubHeader />
        <PhoneListContainer />
      </div>
    );
  }
}

export default App;
