import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Details/bookingForm.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
const BookingForm = ({
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  event,
  setEvent,
  setV1,
  setV2,
  setV3,
  setV4,
  setV5,
  setV6,
  locationData,
  tot_price,
  setTotPrice,
}) => {
  let disabledDates = [];
  let finalDates = [];
  let gst = v6 * v3 * 1.18;
  const [dateRange, setDateRange] = useState({
    startDate: new Date(moment().startOf("isoweek").utc()),
    endDate: new Date(moment().endOf("week").utc()),
  });

  const isDisabled = (date) => {
    Object.keys(timings).forEach(function (key, index) {
      if (!timings[key].open) {
        // console.log(key);
        disabledDates.push(key.substring(0, 3));
      }
    });
    // for (let index = 0; index < 7; index++) {
    // 	const weekDay = moment().day(disabledDates[index]).format("D");
    // 	finalDates.push(weekDay)
    // }

    for (let i = 0; i < 7; i++) {
      switch (disabledDates[i]) {
        case "mon":
          finalDates.push(1);
          break;
        case "tue":
          finalDates.push(2);
          break;
        case "wed":
          finalDates.push(3);
          break;
        case "thu":
          finalDates.push(4);
          break;
        case "fri":
          finalDates.push(5);
          break;
        case "sat":
          finalDates.push(6);
          break;
        case "sun":
          finalDates.push(0);
          break;
        default:
          break;
      }
    }

    // console.log(finalDates);
    const day = date.getDay();
    // console.log(day);
    return (
      day !== finalDates[0] &&
      day !== finalDates[1] &&
      day !== finalDates[2] &&
      day !== finalDates[3] &&
      day !== finalDates[4] &&
      day !== finalDates[5] &&
      day !== finalDates[6]
    );
  };

  useEffect(() => {
    // console.log(v1, v2, v3, v4, v5, v6);
    setTimings(locationData?.timings);
  }, [locationData]);

  const user = useSelector(selectUserData);
  const [timings, setTimings] = useState([]);
  const [active, setActive] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    calculatePrice(event, v3);
  }, [locationData]);
  const handleClick = () => {
    // console.log(v1, v2, v3, v4, v5, v6);
    if (user) {
      if (
        v1 !== "" &&
        v2 !== "" &&
        v3 !== "" &&
        v4 !== "" &&
        v5 !== "" &&
        v6 !== ""
      ) {
        //console.log("Navigate", navigate);
        navigate(`/${window.location.pathname.substring(10)}/booking`);
      } else {
        toast.error("Please fill all the fields");
      }
    } else {
      toast.error("Please Login first");
    }
    window.scrollTo(0, 0);
  };

  const calculatePrice = (eventType, hour_rate = 0) => {
    // console.log(eventType, hour_rate);
    if (eventType === "Film, Webseries or Ad") {
      const rate = locationData?.pricing?.film_webseries_ad?.hourly_rate;
      setV6(rate);
      if (hour_rate === "12") setTotPrice(rate * 12 * 0.9 * 1.18);
      else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8 * 1.18);
      else setTotPrice(rate * hour_rate * 1.18);
    } else if (eventType === "Corporate") {
      const rate = locationData?.pricing?.corporate?.hourly_rate;
      setV6(rate);
      if (hour_rate === "12") setTotPrice(rate * 12 * 0.9 * 1.18);
      else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8 * 1.18);
      else setTotPrice(rate * hour_rate * 1.18);
    } else if (eventType === "TV Series and Others") {
      const rate = locationData?.pricing?.tv_series_other?.hourly_rate;
      setV6(rate);
      if (hour_rate === "12") setTotPrice(rate * 12 * 0.9 * 1.18);
      else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8 * 1.18);
      else setTotPrice(rate * hour_rate * 1.18);
    } else {
      const rate = locationData?.pricing?.individual?.hourly_rate;
      setV6(rate);
      if (hour_rate === "12") setTotPrice(rate * 12 * 0.9 * 1.18);
      else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8 * 1.18);
      else setTotPrice(rate * hour_rate * 1.18);
    }
  };

  const activity = [
    [""],
    [
      "Film Shoot",
      "Web Series Shoot",
      "Ad Film Shoot",
      "Music Album Shoot",
      "Green Screen",
      "Photoshoot",
    ],
    ["Party", "Product Release / Demo", "Awards Ceremony", "Conference"],
    [
      "Birthday Party",
      "Family / Friends OutlinedFlag",
      "Conference / Counselling",
    ],
  ];

  const activityIndex = {
    "": 0,
    Corporate: 2,
    "Film, Webseries or Ad": 1,
    Individual: 3,
    "TV Series and Others": 1,
  };

  return (
    <div>
      <div
        className="wrapper"
        // onMouseEnter={() => {
        // 	setActive(true);
        // }}
        // onMouseLeave={() => {
        // 	setActive(false);
        // }}
      >
        <form
          className={
            event === "Individual" || event === "Corporate" ? "form" : "form-2"
          }
        >
          <div>
            <label
              htmlFor="event"
              className={active === true ? "focus-label" : "booking-form-label"}
            >
              <strong>Event</strong>
            </label>
            <Select
              required
              type="text"
              className={active === true ? "focus" : "normal"}
              id="event"
              name="event"
              onChange={(e) => {
                // console.log(e.target.value);
                setEvent(e.target.value);
                // console.log(val);
                let a = v3;
                calculatePrice(e.target.value, a);
              }}
              value={event}
              displayEmpty
              // defaultValue={new Date().toISOString().split("T")[0]}
            >
              {locationData?.pricing?.corporate?.isPresent && (
                <MenuItem value="Corporate">Corporate</MenuItem>
              )}
              {locationData?.pricing?.film_webseries_ad?.isPresent && (
                <MenuItem value="Film, Webseries or Ad">
                  Film, Webseries or Ad
                </MenuItem>
              )}
              {locationData?.pricing?.individual?.isPresent && (
                <MenuItem value="Individual">Individual</MenuItem>
              )}
              {locationData?.pricing?.tv_series_other?.isPresent && (
                <MenuItem value="TV Series and Others">
                  TV Series and Others
                </MenuItem>
              )}
            </Select>
          </div>
          <div>
            <label
              htmlFor="date"
              className={active === true ? "focus-label" : "booking-form-label"}
            >
              <strong>Date</strong>
            </label>
            {/* <input
							required
							type="date"
							className={active === true ? "focus" : "normal"}
							id="date"
							name="date"
							style={{ border: "2px solid lightgray", width: "78%", height: "34px" }}
							min={new Date().toISOString().split("T")[0]}
							defaultValue={new Date().toISOString().split("T")[0]}
							onChange={(e) => {
								//console.log(e.target.value);
								setV1(e.target.value);
							}}
							value={v1}
						/> */}
            <DatePicker
              required
              type="date"
              className={active === true ? "focus" : "normal"}
              id="date"
              name="date"
              style={{
                border: "2px solid lightgray",
                width: "78%",
                height: "34px",
              }}
              // selected={new Date(dateRange.startDate)}
              onChange={(date) => {
                setDateRange({ ...dateRange, startDate: date });
                console.log(date);
                setV1(date);
              }}
              selected={v1}
              // name="startDate"
              dateFormat="dd/MM/yyyy"
              filterDate={isDisabled}
              placeholderText="dd/mm/yyyy"
              minDate={moment().toDate() - 1}
              value={v1}
            />
          </div>
          {event === "Individual" || event === "Corporate" ? (
            <div>
              <label
                htmlFor="start-time"
                className={
                  active === true ? "focus-label" : "booking-form-label"
                }
              >
                <strong>Start time</strong>
              </label>
              <Select
                required
                id="start-time"
                name="start-time"
                MenuProps={{
                  style: {
                    maxHeight: 300,
                    width: 150,
                  },
                }} // defaultValue="06:30 pm"
                type="text"
                className={active === true ? "focus" : "normal"}
                onChange={(e) => {
                  console.log(e.target.value, "v2");
                  setV2(e.target.value);
                  console.log(v2);
                }}
                value={`${v2}`}
              >
                <MenuItem></MenuItem>
                <MenuItem value="10:00 am">10:00 am</MenuItem>
                <MenuItem value="11:00 am">11:00 am</MenuItem>
                <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                <MenuItem value="01:00 pm">01:00 pm</MenuItem>
                <MenuItem value="02:00 pm">02:00 pm</MenuItem>
                <MenuItem value="03:00 pm">03:00 pm</MenuItem>
                <MenuItem value="04:00 pm">04:00 pm</MenuItem>
                <MenuItem value="05:00 pm">05:00 pm</MenuItem>
                <MenuItem value="06:00 pm">06:00 pm</MenuItem>
                <MenuItem value="07:00 pm">07:00 pm</MenuItem>
                <MenuItem value="08:00 pm">08:00 pm</MenuItem>
                <MenuItem value="09:00 pm">09:00 pm</MenuItem>
                <MenuItem value="10:00 pm">10:00 pm</MenuItem>
                <MenuItem value="11:00 pm">11:00 pm</MenuItem>
                <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                <MenuItem value="01:00 am">01:00 am</MenuItem>
                <MenuItem value="02:00 am">02:00 am</MenuItem>
                <MenuItem value="03:00 am">03:00 am</MenuItem>
                <MenuItem value="04:00 am">04:00 am</MenuItem>
                <MenuItem value="05:00 am">05:00 am</MenuItem>
                <MenuItem value="06:00 am">06:00 am</MenuItem>
                <MenuItem value="07:00 am">07:00 am</MenuItem>
                <MenuItem value="08:00 am">08:00 am</MenuItem>
                <MenuItem value="09:00 am">09:00 am</MenuItem>
              </Select>
            </div>
          ) : (
            <div>
              <label
                htmlFor="time-shifts"
                className={
                  active === true ? "focus-label" : "booking-form-label"
                }
              >
                <strong>Time Slot</strong>
              </label>
              <Select
                required
                id="time-shifts"
                name="time-shifts"
                // defaultValue="Half Day (6am to 6pm)"
                defaultValue=""
                type="time"
                className={active === true ? "focus" : "normal"}
                onChange={(e) => {
                  // console.log(e.target.value)
                  setV3(e.target.value === "6am-6pm" ? "12" : "22");
                  // (e.target.value === "6am-6pm" ? "12" : "24");
                  let a = e.target.value === "6am-6pm" ? "12" : "22";
                  calculatePrice(event, a);
                  setV2("06:00 am");
                  setV3(e.target.value === "6am-6pm" ? 12 : 22);
                }}
                // value={"6am-6pm"}
                displayEmpty
              >
                <MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>
                <MenuItem value=""></MenuItem>
                <MenuItem value="6am-2am">Full Day (6am to 2am)</MenuItem>
              </Select>
            </div>
          )}
          {(event === "Individual" || event === "Corporate") && (
            <div>
              <label
                htmlFor="number-of-hours"
                className={
                  active === true ? "focus-label" : "booking-form-label"
                }
              >
                <strong>Number of Hours</strong>
              </label>
              <Select
                required
                type="number"
                id="number-of-hours"
                name="number-of-hours"
                className={active === true ? "focus" : "normal"}
                onChange={(e) => {
                  console.log(e.target.value);
                  setV3(e.target.value);
                  calculatePrice(event, e.target.value);
                }}
                value={v3}
                displayEmpty
              >
                <MenuItem value="8">8 hours</MenuItem>
                <MenuItem value="12">12 hours</MenuItem>
                <MenuItem value="24">24 hours</MenuItem>
              </Select>
            </div>
          )}
          <div>
            <label
              htmlFor="number-of-people"
              className={active === true ? "focus-label" : "booking-form-label"}
            >
              <strong>Number of people</strong>
            </label>
            <Select
              required
              type="number"
              id="number-of-people"
              name="number-of-people"
              placeholder="Approx. no."
              className={active === true ? "focus" : "normal"}
              onChange={(e) => {
                //console.log(e.target.value);
                setV4(e.target.value);
              }}
              value={v4}
            >
              <MenuItem value="5">1-5</MenuItem>
              <MenuItem value="15">6-15</MenuItem>
              <MenuItem value="25">15-25</MenuItem>
              <MenuItem value="50">25-50</MenuItem>
              <MenuItem value="100">50-100</MenuItem>
              <MenuItem value="more than 100">More than 100</MenuItem>
            </Select>
          </div>
          <div>
            <label
              htmlFor="activity"
              className={active === true ? "focus-label" : "booking-form-label"}
            >
              <strong>Activity</strong>
            </label>
            <Select
              required
              type="text"
              id="activity"
              name="activity"
              className={active === true ? "focus" : "normal"}
              onChange={(e) => {
                //console.log(e.target.value);
                setV5(e.target.value);
              }}
              value={v5}
            >
              {event != "Select Event" &&
                activity[activityIndex[event]].map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </div>
        </form>
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          alignItems: "right",
          gap: "30px",
          textAlign: "end",
        }}
      >
        <div
          className={active === true ? "active-rate" : "rate"}
          style={{
            display: "inline-block",
            marginTop: "2%",
            fontSize: "30px",
          }}
        >
          ₹ {parseInt(gst)}
        </div>
        <div
          className="submit"
          type="submit"
          onClick={handleClick}
          style={{
            display: "inline-block",
            width: "11%",
            textAlign: "center",
            marginLeft: "4%",
          }}
        >
          Reserve
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
