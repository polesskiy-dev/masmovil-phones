import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './MenuButton.css';

const MenuButton = ({ caption, messageId, onClick }) => (
  <div className="menu-button__wrapper">
    <button type="button" className="menu-button" onClick={() => onClick()}>
      <FormattedMessage id={messageId} /> {caption}
    </button>
  </div>
);

MenuButton.propTypes = {
  caption: PropTypes.string.isRequired,
  messageId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
