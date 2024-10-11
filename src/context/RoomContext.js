import React, { createContext, useEffect, useState } from "react";
import roomsData from "../data/rooms.json";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [globalRooms, setGlobalRooms] = useState([]);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    //filter rooms based on total (person)
    const newRooms = globalRooms.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setGlobalRooms(roomsData);
    setRooms(roomsData);
  }, []);

  return (
    <RoomContext.Provider
      value={{
        globalRooms,
        setGlobalRooms,
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
        rooms,
        setRooms,
        loading,
        setLoading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
