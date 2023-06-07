import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();
    //filter rooms based on total (person)
    const newRooms = rooms.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
  };

  useEffect(() => {
    axios
      .get("https://647bbfa9c0bae2880ad03a9e.mockapi.io/rooms")
      .then((res) => {
        setRooms(res.data);
      });
  }, []);

  return (
    <RoomContext.Provider
      value={{ rooms, setRooms, adults, setAdults, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
