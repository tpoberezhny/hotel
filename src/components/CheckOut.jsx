import React, { useState } from 'react';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css';

import { BsCalendar } from 'react-icons/bs';


function CheckOut() {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center h-full justify-end">
      <div className="absolute z-10 p-8">
        <div>
          <BsCalendar className="text-accent text-base"/>
        </div> 
      </div>
      <ReactDatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
}

export default CheckOut;