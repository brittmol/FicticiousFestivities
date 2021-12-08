import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateEventForm from './CreateEventForm';

function CreateEventFormModal({user}) {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create New Event</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateEventForm user={user} onClose={onCloseModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateEventFormModal;
