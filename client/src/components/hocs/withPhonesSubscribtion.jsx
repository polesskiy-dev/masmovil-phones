import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPhonesRequest } from '../../ducks/phones.duck';

const withPhonesSubscription = Component => {
  class WithPhonesSubscription extends PureComponent {
    static propTypes = {
      fetchPhonesRequest: PropTypes.func.isRequired,
    };

    componentDidMount() {
      this.props.fetchPhonesRequest();
    }

    render() {
      return <Component {...this.props}/>
    }
  }

  WithPhonesSubscription.displayName = `WithPhonesSubscription${Component.displayName ||
  Component.name ||
  'Component'}`;

  return connect(null, { fetchPhonesRequest })(WithPhonesSubscription);
};

export default withPhonesSubscription;
