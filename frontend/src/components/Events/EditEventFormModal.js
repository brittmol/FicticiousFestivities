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
      <button onClick={() => setShowModal(true)}>Edit Event</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditEventForm user={user} event={event} onClose={onCloseModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditEventFormModal;
