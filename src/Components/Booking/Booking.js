import React from "react";
import { TextField } from "@mui/material";

import "../../Assets/Styles/Booking/booking.css";

const Booking = ({ v1, v2, v3, v4, v5, v6, v7 }) => {
  // console.log(v1, v2, v3, v4, v5, v6);
  // console.log(v1);
  const date = new Date(v7);
  const day = v1?.getDate();
  const month = v1?.getMonth() + 1;
  const year = v1?.getFullYear();
  const newDay = date?.getDate();
  const newMonth = date?.getMonth() + 1;
  const newYear = date?.getFullYear();
  const ampm = date?.getHours() > 12 ? "pm" : "am";
  let newHour = date?.getHours() > 12 ? date?.getHours() - 12 : date?.getHours();
  console.log(newHour.toString().length);
  if(newHour.toString().length < 2)
    newHour = "0" + newHour;
  const newMin = date?.getMinutes();
  console.log(newHour);
  console.log(day + "-" + month + "-" + year);
  return (
    <form id="booking-page-form">
      <div>
        <label htmlFor="date">Date</label>
        <TextField
          required
          disabled
          id="date"
          type="text"
          fullWidth
          size="small"
          // defaultValue={day + "-" + month + "-" + year}
          value={day + "-" + month + "-" + year + ", " + newDay + "-" + newMonth + "-" + newYear}
        />
      </div>
      <div>
        <label htmlFor="start-time">Start Time</label>
        <TextField
          required
          disabled
          id="start-time"
          type="text"
          defaultValue={v2 + ", " + newHour + ":" + newMin + " " + ampm}
          fullWidth
          size="small"
        />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <TextField
          required
          disabled
          id="duration"
          type="number"
          fullWidth
          size="small"
          defaultValue={v3}
        />
      </div>
      <div>
        <label htmlFor="attendies">Attendies</label>
        <TextField
          required
          disabled
          id="attendies"
          type="text"
          fullWidth
          size="small"
          defaultValue={v4}
        />
      </div>
      <div>
        <label htmlFor="activity">Activity</label>
        <TextField
          required
          disabled
          id="activity"
          type="text"
          fullWidth
          size="small"
          defaultValue={v5}
        />
      </div>
      {/* <div className="filter-body booking-checkbox">
        <h2>Do you need a location manager?</h2>
        <div className="filter--coll3">
          <label class="filter-container">
            Yes
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="filter-container">
            No
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div> */}
    </form>
  );
};

export default Booking;
