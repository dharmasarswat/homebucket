import React from "react";
import { Card, Row } from "react-bootstrap";
import Item from "./Item";
import CreateItemModal from "./CreateItemModal";

export default function Room(props) {
  const {
  id = "",
  roomName = "",
  items = [],
  quantity = 0,
  price = 0,
} = props.room

// console.log("items", items)

// Calculate total price
  const itemsPrice = 0
  // (items ?? []).map(item => item.price)?.reduce((a, b) => a+b, 0)
  return (
    <Card className="p-2 mb-2 bg-light">
      <Card.Title className="pt-2 mb-2">Room: {roomName}</Card.Title>
      <Row style={{ overflowX: "auto" }} className="d-flex flex-row">
        {/* {items?.map((item) => (
          <Item key={item.id} item={item} />
        ))} */}
        <CreateItemModal roomId={id} />
      </Row>
      <Card.Text>
        <h5 className="d-flex justify-content-around mt-4">
          <span>Items: {items.length}</span>
          <span>Total cost of Items: {itemsPrice}</span>
        </h5>
      </Card.Text>
    </Card>
  );
}
