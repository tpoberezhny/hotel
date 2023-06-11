import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

import { RoomContext } from "../context/RoomContext";

import { FaCheck } from "react-icons/fa";
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

function RoomDetailes() {
  const { globalRooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = globalRooms.find((room) => {
    return room.id === Number(id);
  });

  console.log(room);

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 text-center">{name} Details</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left side*/}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="text-5xl mb-5">{name}</h2>
            <p className="mb-5">{description}</p>
            <img className="rounded-xl mb-5" src={imageLg} />
            <div className="mt-12">
              <h3 className="mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam provident sunt enim neque esse, temporibus tempora
                maiores reprehenderit quibusdam illo.
              </p>
              <div>
                {facilities.map((item, index) => {
                  //destructur items
                  const { name, icon } = item;
                  return (
                    <div key={index}>
                      <div>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right side*/}
          <div className="w-full h-full lg:w-[40%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quisquam est explicabo quas, porro dignissimos.
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomDetailes;
