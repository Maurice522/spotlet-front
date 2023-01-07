import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import {
  addLocation,
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";
import { MenuItem, Select, TextField } from "@mui/material";

const Pricing = ({ showSection, changeSection }) => {
  const [cleaningFee, setCleaningFee] = useState(0);
  const [film, setfilm] = useState({
    hourly_rate: 0,
    attendees: "",
    isPresent: false,
  });
  const [tv, settv] = useState({
    hourly_rate: 0,
    attendees: "",
    isPresent: false,
  });
  const [corp, setcorp] = useState({
    hourly_rate: 0,
    attendees: "",
    isPresent: false,
  });
  const [event, setevent] = useState({
    hourly_rate: 0,
    attendees: "",
    isPresent: false,
  });
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
    if (location) {
      location.pricing && setfilm(location.pricing.film_webseries_ad);
      location.pricing && settv(location.pricing.tv_series_other);
      location.pricing && setcorp(location.pricing.corporate);
      location.pricing && setevent(location.pricing.individual);
      location.pricing && setCleaningFee(location.pricing.cleaningFee);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!film.isPresent && !tv.isPresent && !corp.isPresent && !event.isPresent)
      return toast.error("Please add atleast one event type!");
    if (!cleaningFee)
      return toast.error("Please enter cleaning fee!");
    const pricing = {
      cleaningFee: cleaningFee,
      film_webseries_ad: film,
      tv_series_other: tv,
      corporate: corp,
      individual: event,
    };
    // console.log(pricing);
    const locData = {
      ...location,
      pricing,
    };
    dispatch(addLocation(locData));
    const form = {
      location_id,
      data: locData,
    };
    try {
      await createTempLocation(form);
      showSection("Timings");
    } catch (error) {
      toast.error(error.response.data);
    }

    changeSection("Rules of the Host");
    window.scrollTo(0, 0);
  };
  return (
    <div className="lbox">
      <div className="coll1">
        <div className="row1">
          <h1>Film/ Ad Film/ Web Series Shoot</h1>
          <Switch
            onClick={() => setfilm({ ...film, isPresent: !film.isPresent })}
            color="warning"
            checked={film.isPresent}
          />
        </div>
      </div>
      {film.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>Enter Houly Price</h2>
              <input
                className="input"
                onChange={(e) =>
                  setfilm({ ...film, hourly_rate: e.target.value })
                }
                value={film.hourly_rate}
              />
            </div>
            <div>
            <label
              htmlFor="number-of-people"
              className="booking-form-label"
            >
              <h2>Number Of Attendees</h2>
            </label>
            <Select
              required
              type="number"
              id="number-of-people"
              name="number-of-people"
              placeholder="Approx. no."
              className="normal input"
              style={{border: "none"}}
              onChange={(e) => {
                //console.log(e.target.value);
                setfilm({ ...film, attendees: e.target.value })
              }}
              value={film.attendees}
            >
              <MenuItem value="5">1-5</MenuItem>
              <MenuItem value="15">6-15</MenuItem>
              <MenuItem value="25">15-25</MenuItem>
              <MenuItem value="50">25-50</MenuItem>
              <MenuItem value="100">50-100</MenuItem>
              <MenuItem value="more than 100">More than 100</MenuItem>
            </Select>
          </div>
          </div>
          <div className="row1">
            <div className="coll1">
              <h2>
                Half Day Price &nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*10% discount applied</span>
              </h2>
              <p style={{ color: "grey", fontSize: "14px" }}>6 AM to 6 PM</p>
              <input
                className="sminput"
                disabled
                value={(film.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>
                Full Day Price&nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*20% discount applied</span>{" "}
              </h2>
              <p style={{ color: "grey", fontSize: "14px" }}>6 AM to 2 AM</p>
              <input
                className="sminput"
                disabled
                value={(film.hourly_rate * 24 * 0.8).toFixed(2)}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <hr />
      <br />

      <div className="coll1">
        <div className="row1">
          <h1>TV Series & Other Video Shoot</h1>
          <Switch
            onClick={() => settv({ ...tv, isPresent: !tv.isPresent })}
            color="warning"
            checked={tv.isPresent}
          />
        </div>
      </div>
      {tv.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>Enter Hourly Price in ₹.</h2>
              <input
                className="input"
                onChange={(e) => settv({ ...tv, hourly_rate: e.target.value })}
                value={tv.hourly_rate}
              />
            </div>
            <div>
            <label
              htmlFor="number-of-people"
              className="booking-form-label"
            >
              <h2>Number Of Attendees</h2>
            </label>
            <Select
              required
              type="number"
              id="number-of-people"
              name="number-of-people"
              placeholder="Approx. no."
              className="normal input"
              style={{border: "none"}}
              onChange={(e) => {
                //console.log(e.target.value);
                settv({ ...tv, attendees: e.target.value })
              }}
              value={tv.attendees}
            >
              <MenuItem value="5">1-5</MenuItem>
              <MenuItem value="15">6-15</MenuItem>
              <MenuItem value="25">15-25</MenuItem>
              <MenuItem value="50">25-50</MenuItem>
              <MenuItem value="100">50-100</MenuItem>
              <MenuItem value="more than 100">More than 100</MenuItem>
            </Select>
          </div>
          </div>
          <div className="row1">
            {/* <div className="coll1">
							<h2>8 hour Price</h2>
							<input className="sminput" disabled value={tv.hourly_rate * 8} />
						</div> */}
            <div className="coll1">
              <h2>
                Half Day Price &nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*10% discount applied</span>
              </h2>
              <p style={{ color: "grey", fontSize: "14px" }}>6 AM to 6 PM</p>
              <input
                className="sminput"
                disabled
                value={(tv.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>
                Full Day Price &nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*20% discount applied</span>
              </h2>
              <p style={{ color: "grey", fontSize: "14px" }}>6 AM to 2 AM</p>
              <input
                className="sminput"
                disabled
                value={(tv.hourly_rate * 24 * 0.8).toFixed(2)}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <hr />
      <br />

      <div className="coll1">
        <div className="row1">
          <h1>Corporate Event</h1>
          <Switch
            onClick={() => setcorp({ ...corp, isPresent: !corp.isPresent })}
            color="warning"
            checked={corp.isPresent}
          />
        </div>
      </div>
      {corp.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>Enter Hourly Price in ₹.</h2>
              <input
                className="input"
                onChange={(e) =>
                  setcorp({ ...corp, hourly_rate: e.target.value })
                }
                value={corp.hourly_rate}
              />
            </div>
            <div>
            <label
              htmlFor="number-of-people"
              className="booking-form-label"
            >
              <h2>Number Of Attendees</h2>
            </label>
            <Select
              required
              type="number"
              id="number-of-people"
              name="number-of-people"
              placeholder="Approx. no."
              className="normal input"
              style={{border: "none"}}
              onChange={(e) => {
                //console.log(e.target.value);
                setcorp({ ...corp, attendees: e.target.value })
              }}
              value={corp.attendees}
            >
              <MenuItem value="5">1-5</MenuItem>
              <MenuItem value="15">6-15</MenuItem>
              <MenuItem value="25">15-25</MenuItem>
              <MenuItem value="50">25-50</MenuItem>
              <MenuItem value="100">50-100</MenuItem>
              <MenuItem value="more than 100">More than 100</MenuItem>
            </Select>
          </div>
          </div>
          <div className="row2" style={{ gap: "5%" }}>
            <div className="coll1">
              <h2>8 hour Price</h2>
              <input
                className="sminput"
                disabled
                value={corp.hourly_rate * 8}
              />
            </div>
            <div className="coll1">
              <h2>
                12 hour Price&nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*10% discount applied</span>
              </h2>
              <input
                className="sminput"
                disabled
                value={(corp.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>
                24 hour Price&nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*20% discount applied</span>
              </h2>
              <input
                className="sminput"
                disabled
                value={(corp.hourly_rate * 24 * 0.8).toFixed(2)}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <hr />
      <br />

      <div className="coll1">
        <div className="row1">
          <h1>Individual Event</h1>
          <Switch
            onClick={() => setevent({ ...event, isPresent: !event.isPresent })}
            color="warning"
            checked={event.isPresent}
          />
        </div>
      </div>
      {event.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>Enter Hourly Price in ₹.</h2>
              <input
                className="input"
                onChange={(e) =>
                  setevent({ ...event, hourly_rate: e.target.value })
                }
                value={event.hourly_rate}
              />
            </div>
            <div>
            <label
              htmlFor="number-of-people"
              className="booking-form-label"
            >
              <h2>Number Of Attendees</h2>
            </label>
            <Select
              required
              type="number"
              id="number-of-people"
              name="number-of-people"
              placeholder="Approx. no."
              className="normal input"
              style={{border: "none"}}
              onChange={(e) => {
                //console.log(e.target.value);
                setevent({ ...event, attendees: e.target.value })
              }}
              value={event.attendees}
            >
              <MenuItem value="5">1-5</MenuItem>
              <MenuItem value="15">6-15</MenuItem>
              <MenuItem value="25">15-25</MenuItem>
              <MenuItem value="50">25-50</MenuItem>
              <MenuItem value="100">50-100</MenuItem>
              <MenuItem value="more than 100">More than 100</MenuItem>
            </Select>
          </div>
          </div>
          <div className="row2" style={{ gap: "5%" }}>
            <div className="coll1">
              <h2>8 hour Price</h2>
              <input
                className="sminput"
                disabled
                value={event.hourly_rate * 8}
              />
            </div>
            <div className="coll1">
              <h2>
                12 hour Price &nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*10% discount applied</span>
              </h2>
              <input
                className="sminput"
                disabled
                value={(event.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>
                24 hour Price &nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*20% discount applied</span>
              </h2>
              <input
                className="sminput"
                disabled
                value={(event.hourly_rate * 24 * 0.8).toFixed(2)}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <hr />
      <br />
      <div className="coll1">
        <div className="row1">
          <h1>
            Cleaning Fee
            <span style={{ color: "red" }}>*</span>
          </h1>
          <TextField
            required
            type="text"
            // label="Cleaning Fee"
            name="cleaningFee"
            variant="outlined"
            size="small"
            value={cleaningFee}
            onChange={(e) => setCleaningFee(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div className="row1">
        <div className="coll1">
          <button className="continue" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
