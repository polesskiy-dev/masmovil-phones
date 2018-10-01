import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import './AppMenuHeader.css';

import MenuButton from '../../presentional/MenuButton/MenuButton';
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
        <MenuButton
          messageId="AppMenuHeader.language"
          caption={language.toUpperCase()}
          onClick={switchLanguage}
        />
      </li>
      <li>
        <MenuButton
          messageId="AppMenuHeader.language"
          caption={theme.toUpperCase()}
          onClick={switchTheme}
        />
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
