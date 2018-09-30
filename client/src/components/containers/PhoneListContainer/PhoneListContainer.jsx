import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import getPhones from '../../../selectors/phones.selector';
import PhoneCardComponent from '../../presentional/PhoneCardComponent/PhoneCardComponent';
import withFetchingSpinner from '../../hocs/withFetchingSpinner';
import withPhonesSubscription from '../../hocs/withPhonesSubscribtion';

class PhoneListContainer extends PureComponent {
  static propTypes = {
    phones: PropTypes.array.isRequired,
  };

  render() {
    const { phones } = this.props;

    return <section className="phones-list__wrapper">
      {phones.map(phone => <PhoneCardComponent {...phone} key={phone.DeviceName}/>)}
    </section>;
  }
}

export default compose(
  withPhonesSubscription,
  withFetchingSpinner,
  connect(getPhones)
)(PhoneListContainer);
