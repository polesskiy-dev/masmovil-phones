import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getPhones from '../../../selectors/phones.selector';
import { fetchPhonesRequest } from '../../../ducks/phones.duck';

class PhoneListContainer extends PureComponent {
  static propTypes = {
    fetchPhonesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchPhonesRequest();
  }

  render() {
    return <div />;
  }
}

export default connect(
  getPhones,
  { fetchPhonesRequest }
)(PhoneListContainer);
