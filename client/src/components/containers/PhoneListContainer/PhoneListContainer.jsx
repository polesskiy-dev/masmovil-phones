import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './PhoneListContainer.css';

import getPhones from '../../../selectors/phones.selector';
import PhoneCardComponent from '../../presentional/PhoneCardComponent/PhoneCardComponent';
import withFetchingSpinner from '../../hocs/withFetchingSpinner';
import withPhonesSubscription from '../../hocs/withPhonesSubscribtion';

class PhoneListContainer extends PureComponent {
  static propTypes = {
    phones: PropTypes.array.isRequired,
  };

  showPhoneDetails = deviceName => {
    console.log(deviceName)
  };

  render() {
    const { phones } = this.props;

    return <section className="phones-list">
      {phones.map(phone => <PhoneCardComponent key={phone.DeviceName} showPhoneDetails={this.showPhoneDetails} {...phone} />)}
    </section>;
  }
}

export default compose(
  withPhonesSubscription,
  withFetchingSpinner,
  connect(getPhones)
)(PhoneListContainer);
