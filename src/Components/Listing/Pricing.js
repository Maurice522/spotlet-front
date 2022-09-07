import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";

const Pricing = ({showSection}) => {
  const [film, setfilm] = useState({
    hourly_rate: 0,
    isPresent: false,
  });
  const [tv, settv] = useState({
    hourly_rate: 0,
    isPresent: false,
  });
  const [corp, setcorp] = useState({
    hourly_rate: 0,
    isPresent: false,
  });
  const [event, setevent] = useState({
    hourly_rate: 0,
    isPresent: false,
  });
  const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const data = useSelector(selectLocationData);
  return (
    <div className="lbox">
      <div className="coll1">
        <div className="row1">
          <h1>Film/ Ad Film/ Web Series Shoot</h1>
          <Switch
            onClick={() => setfilm({ ...film, isPresent: !film.isPresent })}
            color="warning"
          />
        </div>
      </div>
      {film.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>1 hour Rate</h2>
              <input
                className="input"
                onChange={(e) =>
                  setfilm({ ...film, hourly_rate: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row1">
            <div className="coll1">
              <h2>4 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={film.hourly_rate * 4}
              />
            </div>
            <div className="coll1">
              <h2>8 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={film.hourly_rate * 8}
              />
            </div>
            <div className="coll1">
              <h2>12 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={(film.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>24 hour Rate</h2>
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
          />
        </div>
      </div>
      {tv.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>1 hour Rate</h2>
              <input
                className="input"
                onChange={(e) => settv({ ...tv, hourly_rate: e.target.value })}
              />
            </div>
          </div>
          <div className="row1">
            <div className="coll1">
              <h2>4 hour Rate</h2>
              <input className="sminput" disabled value={tv.hourly_rate * 4} />
            </div>
            <div className="coll1">
              <h2>8 hour Rate</h2>
              <input className="sminput" disabled value={tv.hourly_rate * 8} />
            </div>
            <div className="coll1">
              <h2>12 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={(tv.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>24 hour Rate</h2>
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
          />
        </div>
      </div>
      {corp.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>1 hour Rate</h2>
              <input
                className="input"
                onChange={(e) =>
                  setcorp({ ...corp, hourly_rate: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row1">
            <div className="coll1">
              <h2>4 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={corp.hourly_rate * 4}
              />
            </div>
            <div className="coll1">
              <h2>8 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={corp.hourly_rate * 8}
              />
            </div>
            <div className="coll1">
              <h2>12 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={(corp.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>24 hour Rate</h2>
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
          />
        </div>
      </div>
      {event.isPresent == true ? (
        <>
          <div className="row1">
            <div className="coll1">
              <h2>1 hour Rate</h2>
              <input
                className="input"
                onChange={(e) =>
                  setevent({ ...event, hourly_rate: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row1">
            <div className="coll1">
              <h2>4 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={event.hourly_rate * 4}
              />
            </div>
            <div className="coll1">
              <h2>8 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={event.hourly_rate * 8}
              />
            </div>
            <div className="coll1">
              <h2>12 hour Rate</h2>
              <input
                className="sminput"
                disabled
                value={(event.hourly_rate * 12 * 0.9).toFixed(2)}
              />
            </div>
            <div className="coll1">
              <h2>24 hour Rate</h2>
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
      <div className="row1">
        <div className="coll1">
          <button
            className="continue"
            onClick={async() => {
              const pricing = {
                film_webseries_ad: film,
                tv_series_other: tv,
                corporate : corp,
                individual : event
              };
             // console.log(pricing);
              const locData = {
                ...data,
                pricing
              }
              dispatch(addLocation(locData));
              const form = {
                location_id,
                data : locData
              }
               await createTempLocation(form);
              showSection("Timings");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
