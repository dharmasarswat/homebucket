import React from "react";
import CreateRoomModal from "./CreateRoomModal";
import Room from "./Room";

const rooms = [
  { name: "New Room", description: "This room is newly created " },
  { name: "New Room", description: "This room is newly created " },
  { name: "New Room", description: "This room is newly created " },
];

export default function UserDashboard() {
  return (
    <>
      <CreateRoomModal />
      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </>
  );
}
