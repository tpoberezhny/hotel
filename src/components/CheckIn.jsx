import React, { useState } from "react";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";

function CheckIn() {
  const [startDate, setStartDate] = useState(false);
  return (
    <div className="relative flex items-center h-full justify-end">
      <div className="absolute z-10 p-8">
        <div>
          <BsCalendar className="text-accent text-base"/>
        </div> 
      </div>
      <ReactDatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default CheckIn;
