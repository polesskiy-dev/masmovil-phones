import React from 'react';
import PropTypes from 'prop-types';

import './PhoneCardComponent.css';

const PhoneCardComponent = ({ DeviceName, img, type, os }) => (
  <article className="phone-card__wrapper">
    <div
      className="phone-card__image"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="phone-card__description">
      <p className="phone-card__name">{DeviceName}</p>
      <ul className="phone-card__details">
        <li>{type}</li>
        <li>{os}</li>
      </ul>
    </div>
  </article>
);

PhoneCardComponent.propTypes = {
  DeviceName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired,
};

export default PhoneCardComponent;
