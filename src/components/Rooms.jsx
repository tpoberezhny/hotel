import React, { useContext } from "react";

import { RoomContext } from "../context/RoomContext";

import Room from "../components/Room";

import { SpinnerDotted } from "spinners-react";

function Rooms() {
  const { rooms, loading } = useContext(RoomContext);

  return (
    <div className="py-24">
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-cemter">
          <SpinnerDotted thickness={100} color="rgba(163, 125, 50, 1)"/>
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
