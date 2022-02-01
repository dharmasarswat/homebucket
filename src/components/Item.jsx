import React from "react";
import { Card, Col } from "react-bootstrap";

export default function Item({ image, description = "description" }) {
  return (
    <Col sm={3}>
      <Card>
        <Card.Img
          variant="top"
          src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
          heigth="auto"
        />
        <Card.Subtitle className="mt-3 p-2">{description}</Card.Subtitle>
      </Card>
    </Col>
  );
}
