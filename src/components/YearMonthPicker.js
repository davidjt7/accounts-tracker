import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function YearMonthPicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <div className="picker">
      <DatePicker
        views={["year", "month"]}
        label="Select Month and Year"
        value={selectedDate}
        onChange={handleDateChange}
      />
      </div>
    </Fragment>
  );
}

export default YearMonthPicker;