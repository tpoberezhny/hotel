import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [globalRooms, setGlobalRooms] = useState([]);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

   const handleClick = (e) => {
      e.preventDefault();
      //filter rooms based on total (person)
      const newRooms = globalRooms.filter((room) => {
        return total <= room.maxPerson;
      });
      setRooms(newRooms);
    }

  useEffect(() => {
    axios
      .get("https://647bbfa9c0bae2880ad03a9e.mockapi.io/rooms")
      .then((res) => {
        setGlobalRooms(res.data);
        setRooms(res.data)
      });
  }, []);

  return (
    <RoomContext.Provider
      value={{ globalRooms, setGlobalRooms, adults, setAdults, kids, setKids, handleClick, rooms, setRooms }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
