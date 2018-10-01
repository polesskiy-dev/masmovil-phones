import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './PhoneDetailComponent.css';

const PhoneDetailComponent = ({
  DeviceName,
  img,
  type,
  size,
  technology,
  announced,
}) => (
  <article className="phone-detail">
    <img className="phone-detail__image" src={img} alt={DeviceName} />
    <dl className="phone-detail__description">
      <dt>
        <FormattedMessage id="Phone.Type" />
      </dt>
      <dd>{type}</dd>
      <dt>
        <FormattedMessage id="Phone.Size" />
      </dt>
      <dd>{size}</dd>
      <dt>
        <FormattedMessage id="Phone.Technology" />
      </dt>
      <dd>{technology}</dd>
      <dt>
        <FormattedMessage id="Phone.Announced" />
      </dt>
      <dd>{announced}</dd>
    </dl>
  </article>
);

PhoneDetailComponent.propTypes = {
  DeviceName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  announced: PropTypes.string.isRequired,
};

export default PhoneDetailComponent;
