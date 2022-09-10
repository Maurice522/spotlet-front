import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { createTempLocation } from "../../services/api";
import {
  addLocation,
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { useDispatch, useSelector } from "react-redux";

const Timing = ({ showSection }) => {
  const [monday, setmonday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const [tuesday, settuesday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const [wednesday, setwednesday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const [thursday, setthursday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const [friday, setfriday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const [saturday, setsaturday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const [sunday, setsunday] = useState({
    open: false,
    isSetHours: false,
    time: "",
  });
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
    location.timings && setmonday(location.timings.monday);
    location.timings && settuesday(location.timings.tuesday);
    location.timings && setwednesday(location.timings.wednesday);
    location.timings && setthursday(location.timings.thursday);
    location.timings && setfriday(location.timings.friday);
    location.timings && setsaturday(location.timings.saturday);
    location.timings && setsunday(location.timings.sunday);
  }, []);

  return (
    <div className="lbox">
      <div className="row1">
        <h2>Monday</h2>
        <Switch
          onClick={() => setmonday({ ...monday, open: !monday.open })}
          color="warning"
        />
        {monday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {monday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setmonday({ ...monday, time: "all day", isSetHours: false })
                }
                name="monday"
                checked={monday.time === "all day"}
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setmonday({ ...monday, isSetHours: true })}
                name="monday"
                checked={monday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {monday.isSetHours === true ? (
              <>
                <div className="row1">
                  <input
                    className="input"
                    onChange={(e) =>
                      setmonday({
                        ...monday,
                        time: { ...monday.time, start: e.target.value },
                      })
                    }
                    value={monday.time.start}
                  />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      setmonday({
                        ...monday,
                        time: { ...monday.time, end: e.target.value },
                      })
                    }
                    value={monday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="row1">
        <h2>Tuesday</h2>
        <Switch
          onClick={() => settuesday({ ...tuesday, open: !tuesday.open })}
          color="warning"
        />
        {tuesday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {tuesday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  settuesday({ ...tuesday, time: "all day", isSetHours: false })
                }
                checked={tuesday.time === "all day"}
                name="tueday"
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => settuesday({ ...tuesday, isSetHours: true })}
                name="tueday"
                checked={tuesday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {tuesday.isSetHours === true ? (
              <>
                <div className="row1">
                  <input
                    className="input"
                    onChange={(e) =>
                      settuesday({
                        ...tuesday,
                        time: { ...tuesday.time, start: e.target.value },
                      })
                    }
                    value={tuesday.time.start}
                  />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      settuesday({
                        ...tuesday,
                        time: { ...tuesday.time, end: e.target.value },
                      })
                    }
                    value={tuesday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="row1">
        <h2>Wednesday</h2>
        <Switch
          onClick={() => setwednesday({ ...wednesday, open: !wednesday.open })}
          color="warning"
        />
        {wednesday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {wednesday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setwednesday({
                    ...wednesday,
                    time: "all day",
                    isSetHours: false,
                  })
                }
                checked={wednesday.time === "all day"}
                name="wed"
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setwednesday({ ...wednesday, isSetHours: true })}
                name="wed"
                checked={wednesday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {wednesday.isSetHours === true ? (
              <>
                <div className="row1">
                  <input
                    className="input"
                    onChange={(e) =>
                      setwednesday({
                        ...wednesday,
                        time: { ...wednesday.time, start: e.target.value },
                      })
                    }
                    value={wednesday.time.start}
                  />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      setwednesday({
                        ...wednesday,
                        time: { ...wednesday.time, end: e.target.value },
                      })
                    }
                    value={wednesday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="row1">
        <h2>Thursday</h2>
        <Switch
          onClick={() => setthursday({ ...thursday, open: !thursday.open })}
          color="warning"
        />
        {thursday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {thursday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setthursday({
                    ...thursday,
                    time: "all day",
                    isSetHours: false,
                  })
                }
                checked={thursday.time === "all day"}
                name="thrus"
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setthursday({ ...thursday, isSetHours: true })}
                name="thrus"
                checked={thursday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {thursday.isSetHours === true ? (
              <>
                <div
                  className="row1"
                >
                  <input className="input"  onChange={(e) =>
                    setthursday({
                      ...thursday,
                      time: { ...thursday.time, start: e.target.value },
                    })
                  }
                  value={thursday.time.start} />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      setthursday({
                        ...thursday,
                        time: { ...thursday.time, end: e.target.value },
                      })
                    }
                    value={thursday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="row1">
        <h2>Friday</h2>
        <Switch
          onClick={() => setfriday({ ...friday, open: !friday.open })}
          color="warning"
        />
        {friday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {friday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setfriday({ ...friday, time: "all day", isSetHours: false })
                }
                checked={friday.time === "all day"}
                name="fri"
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setfriday({ ...friday, isSetHours: true })}
                name="fri"
                checked={friday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {friday.isSetHours === true ? (
              <>
                <div className="row1">
                  <input
                    className="input"
                    onChange={(e) =>
                      setfriday({
                        ...friday,
                        time: { ...friday.time, start: e.target.value },
                      })
                    }
                    value={friday.time.start}
                  />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      setfriday({
                        ...friday,
                        time: { ...friday.time, end: e.target.value },
                      })
                    }
                    value={friday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="row1">
        <h2>Saturday</h2>
        <Switch
          onClick={() => setsaturday({ ...saturday, open: !saturday.open })}
          color="warning"
        />
        {saturday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {saturday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setsaturday({
                    ...saturday,
                    time: "all day",
                    isSetHours: false,
                  })
                }
                name="sat"
                checked={saturday.time === "all day"}
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setsaturday({ ...saturday, isSetHours: true })}
                name="sat"
                checked={saturday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {saturday.isSetHours === true ? (
              <>
                <div className="row1">
                  <input
                    className="input"
                    onChange={(e) =>
                      setsaturday({
                        ...saturday,
                        time: { ...saturday.time, start: e.target.value },
                      })
                    }
                    value={saturday.time.start}
                  />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      setsaturday({
                        ...saturday,
                        time: { ...saturday.time, end: e.target.value },
                      })
                    }
                    value={saturday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="row1">
        <h2>Sunday</h2>
        <Switch
          onClick={() => setsunday({ ...sunday, open: !sunday.open })}
          color="warning"
        />
        {sunday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
        {sunday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setsunday({ ...sunday, time: "all day", isSetHours: false })
                }
                name="sun"
                checked={sunday.time === "all day"}
              />
              <h2>All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setsunday({ ...sunday, isSetHours: true })}
                name="sun"
                checked={sunday.isSetHours === true}
              />
              <h2>Set Hours</h2>
            </div>
            {sunday.isSetHours === true ? (
              <>
                <div className="row1">
                  <input
                    className="input"
                    onChange={(e) =>
                      setsunday({
                        ...sunday,
                        time: { ...sunday.time, start: e.target.value },
                      })
                    }
                    value={sunday.time.start}
                  />
                  <h2> to </h2>
                  <input
                    className="input"
                    onChange={(e) =>
                      setsunday({
                        ...sunday,
                        time: { ...sunday.time, end: e.target.value },
                      })
                    }
                    value={sunday.time.end}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <button
        className="continue"
        onClick={async () => {
          const timings = {
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
          };
          //console.log(timings);
          const locData = {
            ...location,
            timings,
          };
          dispatch(addLocation(locData));
          const form = {
            location_id,
            data: locData,
          };
          await createTempLocation(form);
          showSection("Rules of the Host");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Timing;
