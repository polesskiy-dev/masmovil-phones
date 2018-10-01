import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import './PhoneDetailModal.css';

import ConnectedIntlProvider from '../ConnectedIntlProvider/ConnectedIntlProvider';
import PhoneDetailComponent from '../../presentional/PhoneDetailComponent/PhoneDetailComponent';

const PhoneDetailModal = ({
  modalIsOpen,
  toggleModal,
  selectedDeviceName,
  selectedPhone,
}) => (
  <ConnectedIntlProvider>
    <Modal
      isOpen={modalIsOpen}
      toggle={toggleModal}
      className="phone-detail-modal"
    >
      <ModalHeader toggle={toggleModal}>{selectedDeviceName}</ModalHeader>
      <ModalBody>
        <PhoneDetailComponent {...selectedPhone} />
      </ModalBody>
    </Modal>
  </ConnectedIntlProvider>
);

PhoneDetailModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  selectedDeviceName: PropTypes.string.isRequired,
  selectedPhone: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PhoneDetailModal;
