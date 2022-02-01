import React from "react";
import { Card, Row } from "react-bootstrap";
import Item from "./Item";
import CreateItemModal from "./CreateItemModal";

export default function Room({
  id = "",
  name = "Room name",
  items = [{}, {}, {}],
  quantity = 0,
  price = 0,
}) {
  return (
    <Card className="p-2 mb-2 bg-light">
      <Card.Title className="pt-2 mb-2">Room: {name}</Card.Title>
      <Row style={{ overflowX: "auto" }} className="d-flex flex-row">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        <CreateItemModal roomId={id} />
      </Row>
      <Card.Text>
        <h5 className="d-flex justify-content-around mt-4">
          <span>{quantity} Items</span>
          <span>Total cost of Items: {price}</span>
        </h5>
      </Card.Text>
    </Card>
  );
}
