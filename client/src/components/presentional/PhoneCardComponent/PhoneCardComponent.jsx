import React from 'react';
import PropTypes from 'prop-types';

import './PhoneCardComponent.css';

import DetailsButtonComponent from '../DetailsButtonComponent/DetailsButtonComponent';

const PhoneCardComponent = ({ DeviceName, img, type, os }) => (
  <article className="phone-card">
    <img className="phone-card__image" src={img} alt={DeviceName} />
    <div className="phone-card__description">
      <div className="phone-card__text-description">
        <p className="phone-card__name">{DeviceName}</p>
        <ul className="phone-card__details">
          <li>{type}</li>
          <li>{os}</li>
        </ul>
      </div>
      <DetailsButtonComponent />
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
