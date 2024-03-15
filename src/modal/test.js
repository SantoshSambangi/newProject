import React, { useState } from "react";
import Modal from ".";
import styles from "./styles.module.css";

const TestModal = () => {
  const [showModal, setShowModal] = useState({
    modalOne: false,
    modalTwo: false,
  });

  return (
    <div>
      <button onClick={() => setShowModal({ ...showModal, modalOne: true })}>
        openModal
      </button>
      <Modal isOpen={showModal.modalOne}>
        <h1>first modal</h1>
        <button onClick={() => setShowModal({ ...showModal, modalTwo: true })}>
          openSecondModal
        </button>
      </Modal>
      <Modal
        isOpen={showModal.modalTwo}
        customModalContentStyles={styles.secondModalStyles}
        customModalContainerStyles={styles.secondModalContainerStyles}
      >
        second modal
      </Modal>
    </div>
  );
};

export default TestModal;
