import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import _ from "lodash/fp";
import { connect } from "react-redux";
import { compose } from "redux";

import "./PhoneListContainer.css";

import getPhones from "../../../selectors/phones.selector";
import PhoneCardComponent from "../../presentional/PhoneCardComponent/PhoneCardComponent";
import PhoneDetailModal from '../PhoneDetailModal/PhoneDetailModal'
import withFetchingSpinner from "../../hocs/withFetchingSpinner";
import withPhonesSubscription from "../../hocs/withPhonesSubscribtion";
import { filterByDeviceName } from "../../../helpers/filter-phones.helpers";

class PhoneListContainer extends PureComponent {
  static propTypes = {
    phones: PropTypes.array.isRequired
  };

  state = {
    modalIsOpen: false
  };

  showPhoneDetails = deviceName => {
    this.setState({
      modalIsOpen: true,
      selectedDeviceName: deviceName,
      selectedPhone: filterByDeviceName(deviceName)(this.props.phones)
    });
  };

  toggleModal = () => this.setState({ modalIsOpen: !this.state.modalIsOpen });

  render() {
    const { phones } = this.props;
    const { modalIsOpen, selectedDeviceName, selectedPhone } = this.state;

    return (<Fragment>
      <section className="phones-list">
        {phones.map(phone => <PhoneCardComponent
          key={phone.DeviceName}
          showPhoneDetails={this.showPhoneDetails}
          {...phone}
        />)}
      </section>

      {
        !_.isEmpty(selectedPhone) && <PhoneDetailModal {...{ modalIsOpen, selectedDeviceName, selectedPhone, toggleModal: this.toggleModal }}/>
      }
    </Fragment>);
  }
}

export default compose(
  withPhonesSubscription,
  withFetchingSpinner,
  connect(getPhones)
)(PhoneListContainer);
