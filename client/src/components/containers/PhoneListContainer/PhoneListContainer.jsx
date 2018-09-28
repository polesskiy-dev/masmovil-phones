import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getPhones from '../../../selectors/phones.selector';
import PhoneCardComponent from '../../presentional/PhoneCardComponent/PhoneCardComponent';
import { fetchPhonesRequest } from '../../../ducks/phones.duck';

class PhoneListContainer extends PureComponent {
  static propTypes = {
    fetchPhonesRequest: PropTypes.func.isRequired,
    phones: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.fetchPhonesRequest();
  }

  render() {
    const { phones } = this.props;

    return <section className="phones-list__wrapper">
      {phones.map(phone => <PhoneCardComponent {...phone} key={phone.DeviceName}/>)}
    </section>;
  }
}

export default connect(
  getPhones,
  { fetchPhonesRequest }
)(PhoneListContainer);
