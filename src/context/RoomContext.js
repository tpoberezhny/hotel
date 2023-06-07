import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [ rooms, setRooms ] = useState([]);

  useEffect(() => {
    axios
      .get("https://647bbfa9c0bae2880ad03a9e.mockapi.io/rooms")
      .then((res) => {
        setRooms(res.data);
      });
  }, []);
  
  return (
    <RoomContext.Provider value={{rooms, setRooms}}>
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
