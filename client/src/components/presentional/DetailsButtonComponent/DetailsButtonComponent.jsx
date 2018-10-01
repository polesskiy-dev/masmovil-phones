import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './DetailsButtonComponent.css';

const DetailsButtonComponent = ({ onClick }) => (
  <button className="details-button" onClick={onClick}>
    <FormattedMessage id="Buttons.detailsButtonCaption" />
  </button>
);

DetailsButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DetailsButtonComponent;
