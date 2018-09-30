import React from 'react';

import './Spinner.css';

const Spinner = () => (
  <div className="spinner-lds-pacman__wrapper">
    <div className="spinner-lds-pacman">
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Spinner;
