import React from 'react';
import { FormattedMessage } from 'react-intl';

import './DescriptionJumbotron.css';

const DescriptionJumbotron = () => (
  <section className="app-jumbotron">
    <header>
      <h1 className="jumbotron-heading">
        <FormattedMessage id="DescriptionJumbotron.header" />
      </h1>
    </header>
    <p className="lead text-muted">
      <FormattedMessage id="DescriptionJumbotron.message" />
    </p>
    <a
      href="https://github.com/polesskiy-dev/masmovil-phones"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      <FormattedMessage id="DescriptionJumbotron.repoLinkCaption" />
    </a>
  </section>
);

export default DescriptionJumbotron;
