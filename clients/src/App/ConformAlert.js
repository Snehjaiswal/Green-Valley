import React from 'react';
import { Modal, Button } from "react-bootstrap";

const Conformalert = (props) => {
  const {
    show,
    handleClose,
    message
  } = props

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          {message}
        </Modal.Body>

        <Button variant="primary" onClick={handleClose}>Understood</Button>
      </Modal>
    </div>
  );
}

export default Conformalert;
