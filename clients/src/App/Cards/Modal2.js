import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modal2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div  onClick={handleShow}>
      Add to Cart

      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body> card is selected</Modal.Body>
        <Modal.Footer>
          <div style={{background:"blue",cursor:"pointer"}} onClick={handleClose}>
            Close
          </div>
          <div style={{background:"green",cursor:"pointer"}} onClick={handleClose}>
            Show card details 
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal2