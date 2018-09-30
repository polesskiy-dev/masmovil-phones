import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import './AppMenuHeader.css';

import { switchLanguage } from '../../../ducks/language.duck';
import { switchTheme } from '../../../ducks/theme.duck';
import { getLanguage } from '../../../selectors/language.selector';
import { getTheme } from '../../../selectors/theme.selector';

const AppMenuHeader = ({ switchLanguage, switchTheme, language, theme }) => (
  <div className="app-menu">
    <header>
      <h1>
        <FormattedMessage id="AppMenuHeader.greeting" />
      </h1>
    </header>
    <ul className="app-menu__menu">
      <li>
        <a href="#" className="app-menu__item" onClick={() => switchLanguage()}>
          <FormattedMessage id="AppMenuHeader.language" /> {language.toUpperCase()}
        </a>
      </li>
      <li>
        <a href="#" className="app-menu__item" onClick={() => switchTheme()}>
          <FormattedMessage id="AppMenuHeader.theme" /> {theme.toUpperCase()}
        </a>
      </li>
    </ul>
  </div>
);

AppMenuHeader.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default connect(
  createSelector(getLanguage, getTheme, (language, theme) => ({
    language,
    theme,
  })),
  { switchLanguage, switchTheme }
)(AppMenuHeader);
