import React from 'react';
import { FormattedMessage } from 'react-intl';

import './DetailsButtonComponent.css';

const DetailsButtonComponent = () => (
  <button className="details-button">
    <FormattedMessage id="Buttons.detailsButtonCaption" />
  </button>
);

export default DetailsButtonComponent;
