import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

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
    async function fetchData() {
      try {
        const roomResponce = await axios.get(
          "https://65fdc1c0b2a18489b3856218.mockapi.io/api/tima/rooms"
        );

        setGlobalRooms(roomResponce.data);
        setRooms(roomResponce.data);
      } catch (error) {
        alert("Data request error ;(");
        console.error(error);
      }
    }

    fetchData();
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
