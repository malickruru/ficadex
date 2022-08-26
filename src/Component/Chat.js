import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { flexRowCenter } from "../Style/Flex";
function Chat(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        style={flexRowCenter}
        className="chat click"
        title="Demande de rappel"
        onClick={handleShow}
      >
        <i class="bi bi-chat-fill"></i>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demande de rappel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Choisissez un bureau</option>
                <option value="1">Bureau 1</option>
                <option value="2">Bureau 2</option>
                <option value="3">Bureau 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Votre prénom" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Votre nom" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Société" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Votre email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="tel" placeholder="Votre téléphone" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chat;
