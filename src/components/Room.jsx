import React from "react";

import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

function Room({ room }) {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group rounded-xl">
      <div className="overflow-hidden">
        <Link to={`/room/${id}`}>
          <img
            className="group-hover:scale-110 transition-all duration-300 w-full cursor-pointer"
            src={image}
            alt="Room"
          />
        </Link>
      </div>
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tartiary tracking-[1px] text-base rounded-xl">
        <div className="flex justify-between w-[90%]">
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Size</div>
              <div>{size}m2</div>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="font-normal mb-5">{name}</h3>
        </Link>
        <div>
          <p className="max-w-[300px] mx-auto mb-3 lg:mb-5 text-[15px]">
            {description.slice(0, 70)}..
          </p>
          <Link to={`/room/${id}`}>
            <p className="underline my-4">See more about the room</p>
          </Link>
        </div>
      </div>
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto rounded-xl mb-7"
      >
        Book now from ${price}
      </Link>
    </div>
  );
}

export default Room;
