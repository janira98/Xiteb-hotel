import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CoustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
              onChange={date => setStartDate(date)}
              className=' rounded-3xl text-dark-blue p-3'
      />
    </div>
  );
};

export default CoustomDatePicker;
