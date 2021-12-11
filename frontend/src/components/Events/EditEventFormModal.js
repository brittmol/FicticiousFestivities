import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditEventForm from './EditEventForm'

function EditEventFormModal({user, event}) {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className="tickets-button" onClick={() => setShowModal(true)}>
        <i className="fas fa-edit" />
        Edit Event
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditEventForm user={user} event={event} onClose={onCloseModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditEventFormModal;
