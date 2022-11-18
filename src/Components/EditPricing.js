import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { locationUpdate, getUserData, userUpdate } from "../services/api";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { selectUserData, selectUser_id } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

const Pricing = ({ location }) => {
  const [listedLocations, setListedLocations] = useState([]);
  const userData = useSelector(selectUserData);
  const user_id = useSelector(selectUser_id);

  useEffect(() => {
    const fetchListedLoc = async () => {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const user_jwt = jwtDecode(jwt);
        const { data } = await getUserData(user_jwt._id);
        setListedLocations(data.listedLocations);
        console.log(listedLocations);
      }
    };
    fetchListedLoc();
  }, []);

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

  console.log(location);
  useEffect(() => {
    if (location) {
      location.pricing && setfilm(location.pricing.film_webseries_ad);
      location.pricing && settv(location.pricing.tv_series_other);
      location.pricing && setcorp(location.pricing.corporate);
      location.pricing && setevent(location.pricing.individual);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!film.isPresent && !tv.isPresent && !corp.isPresent && !event.isPresent)
      return toast.error("Please add atleast one event type!");
    const pricing = {
      film_webseries_ad: film,
      tv_series_other: tv,
      corporate: corp,
      individual: event,
    };
    const newLocData = {
      ...location,
      pricing,
    };

    const locData = {
      newLocData,
      location_id: location.location_id,
    };

    const updatedListedLocations = listedLocations.map((loc) => {
      if (loc.location_id === location.location_id) {
        console.log(location.location_id);
        return newLocData;
      }
      return loc;
    });

    const updatedUserData = {
      ...userData,
      listedLocations: updatedListedLocations,
    };
    const data = {
      updatedUserData,
      user_id,
    };
    console.log(data);
    try {
      await locationUpdate(locData);
      await userUpdate(data);
      toast.success("Information Updated");
      window.location.reload(true);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="lbox" style={{ marginTop: "30px !important" }}>
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
          </div>
          <div className="row1">
            <div className="coll1">
              <h2>
                Half Day Price &nbsp;&nbsp;{" "}
                <span style={{ color: "grey" }}>*10% discount applied</span>
              </h2>
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
          </div>
          <div className="row1">
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
          </div>
          <div className="row1">
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
      <div className="row1">
        <div className="coll1">
          <button className="continue" onClick={handleSubmit}>
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
