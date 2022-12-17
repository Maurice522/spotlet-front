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
import { toast } from "react-toastify";
import "../../Assets/Styles/listYourSpace.css";
import Select from "react-select";

const options = [

  { value: "01:00 am", label: "01:00 am" },
  { value: "02:00 am", label: "02:00 am" },
  { value: "03:00 am", label: "03:00 am" },
  { value: "04:00 am", label: "04:00 am" },
  { value: "05:00 am", label: "05:00 am" },
  { value: "06:00 am", label: "06:00 am" },
  { value: "07:00 am", label: "07:00 am" },
  { value: "08:00 am", label: "08:00 am" },
  { value: "09:00 am", label: "09:00 am" },
  { value: "10:00 am", label: "10:00 am" },
  { value: "11:00 am", label: "11:00 am" },
  { value: "12:00 am", label: "12:00 am" },
  { value: "01:00 pm", label: "01:00 pm" },
  { value: "02:00 pm", label: "02:00 pm" },
  { value: "03:00 pm", label: "03:00 pm" },
  { value: "04:00 pm", label: "04:00 pm" },
  { value: "05:00 pm", label: "05:00 pm" },
  { value: "06:00 pm", label: "06:00 pm" },
  { value: "07:00 pm", label: "07:00 pm" },
  { value: "08:00 pm", label: "08:00 pm" },
  { value: "09:00 pm", label: "09:00 pm" },
  { value: "10:00 pm", label: "10:00 pm" },
  { value: "11:00 pm", label: "11:00 pm" },
  { value: "12:00 pm", label: "12:00 pm" },

];

const Timing = ({ showSection, changeSection }) => {
  const [monday, setmonday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const [tuesday, settuesday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const [wednesday, setwednesday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const [thursday, setthursday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const [friday, setfriday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const [saturday, setsaturday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const [sunday, setsunday] = useState({
    open: true,
    isSetHours: false,
    time: "all day",
  });
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
    if (location) {
      location.timings && setmonday(location.timings.monday);
      location.timings && settuesday(location.timings.tuesday);
      location.timings && setwednesday(location.timings.wednesday);
      location.timings && setthursday(location.timings.thursday);
      location.timings && setfriday(location.timings.friday);
      location.timings && setsaturday(location.timings.saturday);
      location.timings && setsunday(location.timings.sunday);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!monday.open && !tuesday.open && !wednesday.open && !thursday.open && !friday.open && !saturday.open && !sunday.open)
      return toast.error("Please fill all required fields");
    const timings = {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    };
    console.log(timings)
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
    try {
      await createTempLocation(form);
      showSection("Rules of the Host");
    } catch (error) {
      toast.error(error.response.data);
    }

    changeSection("Contact Details");
    window.scrollTo(0, 0);
  }
  return (
    <div className="lbox">
      <div className="row1 timing-row">
        <h2>Monday</h2>
        <Switch
          onClick={() => setmonday({ ...monday, open: !monday.open })}
          color="warning"
          checked={monday.open}
        />
        {monday.open === false ? <h2></h2> : <h2>Open</h2>}
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
                checked={monday.isSetHours === false}
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setmonday({ ...monday, isSetHours: true })}
                name="monday"
                checked={monday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {monday.isSetHours === true ? (
              <>
                <div className="row1">
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setmonday({
                        ...monday,
                        time: { ...monday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setmonday({
                        ...monday,
                        time: { ...monday.time, end: e.value },
                      })
                    }
                    options={options}
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
      <div className="row1 timing-row">
        <h2>Tuesday</h2>
        <Switch
          onClick={() => settuesday({ ...tuesday, open: !tuesday.open })}
          color="warning"
          checked={tuesday.open}
        />
        {tuesday.open === false ? <h2></h2> : <h2>Open</h2>}
        {tuesday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  settuesday({ ...tuesday, time: "all day", isSetHours: false })
                }
                checked={tuesday.isSetHours === false}
                name="tueday"
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => settuesday({ ...tuesday, isSetHours: true })}
                name="tueday"
                checked={tuesday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {tuesday.isSetHours === true ? (
              <>
                <div className="row1">
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      settuesday({
                        ...tuesday,
                        time: { ...tuesday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      settuesday({
                        ...tuesday,
                        time: { ...tuesday.time, end: e.value },
                      })
                    }
                    options={options}
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

      <div className="row1 timing-row">
        <h2>Wednesday</h2>
        <Switch
          onClick={() => setwednesday({ ...wednesday, open: !wednesday.open })}
          color="warning"
          checked={wednesday.open}
        />
        {wednesday.open === false ? <h2></h2> : <h2>Open</h2>}
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
                checked={wednesday.isSetHours === false}
                name="wed"
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setwednesday({ ...wednesday, isSetHours: true })}
                name="wed"
                checked={wednesday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {wednesday.isSetHours === true ? (
              <>
                <div className="row1">
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setwednesday({
                        ...wednesday,
                        time: { ...wednesday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setwednesday({
                        ...wednesday,
                        time: { ...wednesday.time, end: e.value },
                      })
                    }
                    options={options}
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

      <div className="row1 timing-row">
        <h2>Thursday</h2>
        <Switch
          onClick={() => setthursday({ ...thursday, open: !thursday.open })}
          color="warning"
          checked={thursday.open}
        />
        {thursday.open === false ? <h2></h2> : <h2>Open</h2>}
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
                checked={thursday.isSetHours === false}
                name="thrus"
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setthursday({ ...thursday, isSetHours: true })}
                name="thrus"
                checked={thursday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {thursday.isSetHours === true ? (
              <>
                <div
                  className="row1"
                >
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setthursday({
                        ...thursday,
                        time: { ...thursday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setthursday({
                        ...thursday,
                        time: { ...thursday.time, end: e.value },
                      })
                    }
                    options={options}
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

      <div className="row1 timing-row">
        <h2>Friday</h2>
        <Switch
          onClick={() => setfriday({ ...friday, open: !friday.open })}
          color="warning"
          checked={friday.open}
        />
        {friday.open === false ? <h2></h2> : <h2>Open</h2>}
        {friday.open === true ? (
          <>
            <div className="row2">
              <input
                type="radio"
                className="radio"
                onClick={() =>
                  setfriday({ ...friday, time: "all day", isSetHours: false })
                }
                checked={friday.isSetHours === false}
                name="fri"
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setfriday({ ...friday, isSetHours: true })}
                name="fri"
                checked={friday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {friday.isSetHours === true ? (
              <>
                <div className="row1">
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setfriday({
                        ...friday,
                        time: { ...friday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setfriday({
                        ...friday,
                        time: { ...friday.time, end: e.value },
                      })
                    }
                    options={options}
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

      <div className="row1 timing-row">
        <h2>Saturday</h2>
        <Switch
          onClick={() => setsaturday({ ...saturday, open: !saturday.open })}
          color="warning"
          checked={saturday.open}
        />
        {saturday.open === false ? <h2></h2> : <h2>Open</h2>}
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
                checked={saturday.isSetHours === false}
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setsaturday({ ...saturday, isSetHours: true })}
                name="sat"
                checked={saturday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {saturday.isSetHours === true ? (
              <>
                <div className="row1">
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setsaturday({
                        ...saturday,
                        time: { ...saturday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setsaturday({
                        ...saturday,
                        time: { ...saturday.time, end: e.value },
                      })
                    }
                    options={options}
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

      <div className="row1 timing-row">
        <h2>Sunday</h2>
        <Switch
          onClick={() => setsunday({ ...sunday, open: !sunday.open })}
          color="warning"
          checked={sunday.open}
        />
        {sunday.open === false ? <h2></h2> : <h2>Open</h2>}
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
                checked={sunday.isSetHours === false}
              />
              <h2 className="timingH2AllDay">All Day</h2>
              <input
                type="radio"
                className="radio"
                onClick={() => setsunday({ ...sunday, isSetHours: true })}
                name="sun"
                checked={sunday.isSetHours === true}
              />
              <h2 className="timingH2AllDay">Set Hours</h2>
            </div>
            {sunday.isSetHours === true ? (
              <>
                <div className="row1">
                  <Select
                    required
                    id="start-time"
                    name="start-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setsunday({
                        ...sunday,
                        time: { ...sunday.time, start: e.value },
                      })
                    }
                    options={options}
                  />
                  <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                  <Select
                    required
                    id="end-time"
                    name="end-time"
                    style={{ border: "2px solid lightgray", width: "50%", height: "38px", padding: 0, fontSize: "8px" }}
                    defaultValue="06:00 pm"
                    type="text"
                    onChange={(e) =>
                      setsunday({
                        ...sunday,
                        time: { ...sunday.time, end: e.value },
                      })
                    }
                    options={options}
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
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div >
  );
};

export default Timing;
