import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import "./PhoneListContainer.css";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
import getPhones from "../../../selectors/phones.selector";
import PhoneCardComponent from "../../presentional/PhoneCardComponent/PhoneCardComponent";
import withFetchingSpinner from "../../hocs/withFetchingSpinner";
import withPhonesSubscription from "../../hocs/withPhonesSubscribtion";

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
      selectedDeviceName: deviceName
    });
  };

  toggleModal = () => this.setState({ modalIsOpen: !this.state.modalIsOpen });

  render() {
    const { phones } = this.props;
    const { modalIsOpen, selectedDeviceName } = this.state;

    return (<Fragment>
      <section className="phones-list">
        {phones.map(phone => <PhoneCardComponent
          key={phone.DeviceName}
          showPhoneDetails={this.showPhoneDetails}
          {...phone}
        />)}
      </section>

      <Modal isOpen={modalIsOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>{selectedDeviceName}</ModalHeader>
        <ModalBody>

        </ModalBody>
      </Modal>
    </Fragment>);
  }
}

export default compose(
  withPhonesSubscription,
  withFetchingSpinner,
  connect(getPhones)
)(PhoneListContainer);
