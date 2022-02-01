import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import ImageDropZone from "react-image-dropzone";

export default function CreateItemModal({ roomId }) {
  const [show, setShow] = useState(false);
  const [imagePicked, setImagePicked] = useState();

  const initialFormState = {
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = ({ target: { name, value } }) =>
    setFormState((state) => ({ ...state, [name]: value }));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleImagePicked = (image) =>
    setImagePicked((state) => [...state, image]);

  return (
    <>
      <Col className="px-4 text-light" sm={3}>
        <div
          className="d-flex justify-content-center align-items-center rounded"
          style={{
            height: "170px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          onClick={handleShow}
        >
          + Add new item
        </div>
      </Col>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
              <Col as="h6">Drag and drop image here...</Col>
              <Col md={12} className="d-flex justify-content-between gap">
                <Col className="me-2">
                  <ImageDropZone
                    height={150}
                    anySize
                    imagePicked={handleImagePicked}
                  />
                </Col>
                <Col className="me-2">
                  <ImageDropZone
                    height={150}
                    anySize
                    imagePicked={handleImagePicked}
                  />
                </Col>
                <Col>
                  <ImageDropZone
                    height={150}
                    anySize
                    imagePicked={handleImagePicked}
                  />
                </Col>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={formState.name}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <textarea rows="1" className="form-control" />
                </Form.Group>
              </Col>
              <Col md={12} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="description">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    onChange={handleChange}
                    value={formState.category}
                  >
                    <option value="">select one categorys</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="name">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter Price"
                    onChange={handleChange}
                    value={formState.price}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mt-4">
                <Form.Group className="mb-3 text-left" controlId="description">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity"
                    onChange={handleChange}
                    value={formState.quantity}
                  />
                </Form.Group>
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
