import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function ModalMovie({ movies, show, handleClose }) {
  console.log(movies);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> {movies.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
