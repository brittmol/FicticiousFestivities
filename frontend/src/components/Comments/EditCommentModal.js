import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditComment';

function EditCommentFormModal({comment}) {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className="tickets-button" onClick={() => setShowModal(true)}>
        <i className="fas fa-edit" />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm comment={comment} onClose={onCloseModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditCommentFormModal;
