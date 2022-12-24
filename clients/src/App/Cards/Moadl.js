import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modal1() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div onClick={() => setSmShow(true)} >
      Add to Cart
      </div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           Add Cards
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>successfull add to Cards</Modal.Body>
      </Modal>
   
    </>
  );
}
export default Modal1