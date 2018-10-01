import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import './DetailsButtonComponent.css';

const DetailsButtonComponent = ({ onClick }) => (
  <Button color="success" className="details-button" onClick={onClick}>
    <FormattedMessage id="Buttons.detailsButtonCaption" />
  </Button>
);

DetailsButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DetailsButtonComponent;
