import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function CreateRoomModal() {
  const [show, setShow] = useState(false);
  const [imagePicked, setImagePicked] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mb-2" variant="outline-dark" onClick={handleShow}>
        Create room
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
              <Col md={12} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    // onChange={handleChange}
                    // value={formState.email}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <textarea rows="4" className="form-control" />
                </Form.Group>
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save room
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
