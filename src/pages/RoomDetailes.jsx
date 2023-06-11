import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

import { RoomContext } from "../context/RoomContext";

import * as ReactIcons from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import ScrollToTop from "../components/ScrollToTop";

function RoomDetailes() {
  const { globalRooms } = useContext(RoomContext);
  const { id } = useParams();

  const icons = {
    "<FaWifi />": <ReactIcons.FaWifi />,
    "<FaCoffee />": <ReactIcons.FaCoffee />,
    "<FaBath />": <ReactIcons.FaBath />,
    "<FaParking />": <ReactIcons.FaParking />,
    "<FaHotdog />": <ReactIcons.FaHotdog />,
    "<FaStopwatch />": <ReactIcons.FaStopwatch />,
    "<FaCocktail />": <ReactIcons.FaCocktail />,
  };

  const room = globalRooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 text-center">{name} Details</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left side*/}
          <div className="w-full h-full lg:w-[60%] lg:pr-24">
            <h2 className="text-5xl mb-5">{name}</h2>
            <p className="mb-5 text-base">{description}</p>
            <img className="rounded-xl mb-5" src={imageLg} alt="Room" />
            <div className="mt-12">
              <h3 className="mb-3 text-3xl">Room Facilities</h3>
              <p className="mb-12 text-base">
                Our Room Facilities ensure a seamless and comfortable stay. Stay
                connected with complimentary Wi-Fi in every room. Enjoy the
                convenience of a coffee machine or minibar for refreshments.
                Explore the comprehensive list of additional amenities provided
                in each room below for an exceptional experience during your
                stay.
              </p>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 mb-10">
                {facilities.map((item, index) => {
                  //destructur items
                  const { name } = item;
                  return (
                    <div
                      className="flex items-center lg:gap-x-3 gap-x-1 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">
                        {icons[item.icon]}
                      </div>
                      <div>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right side*/}
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-6 mb-4 items-center">
                <h3>Your reservation</h3>
                <div className="h-[60px] w-full">
                  <CheckIn />
                </div>
                <div className="h-[60px] w-full">
                  <CheckOut />
                </div>
                <div className="h-[60px] w-full">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px] w-full">
                  <KidsDropdown />
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full mt-8">
                Book now for ${price}
              </button>
            </div>
            <div>
              <h3 className="text-3xl mb-6">Hotel Rules</h3>
              <p className="mb-6 text-base">
                Please refer to the list below for all our hotel policies,
                including check-in and check-out times. We kindly ask our guests
                to familiarize themselves with these guidelines to ensure a
                pleasant and smooth stay.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <ReactIcons.FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <GiExitDoor className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <ReactIcons.FaDog className="text-accent" />
                  Pets Friendly
                </li>
                <li className="flex items-center gap-x-4">
                  <ReactIcons.FaSmokingBan className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomDetailes;
