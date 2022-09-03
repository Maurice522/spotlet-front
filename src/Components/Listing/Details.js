import React, { useEffect, useState } from "react";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useSelector } from "react-redux";
import { selectUser_id } from "../../redux/slices/userSlice";

const options = [
  { value: "Airport", label: "Airport" },
  { value: "Amusement Park", label: "Amusement Park" },
  { value: "Apartment", label: "Apartment" },
];

const Details = ({showSection}) => {
  const user_id = useSelector(selectUser_id);
  const [property_desc, setPropertyDescr] = useState({
    user_id: "",
    location_type: "",
    property_size: "",
    property_info: "",
    street_parking: "",
    security_camera: "",
  });

  useEffect(() => {
    user_id && setPropertyDescr({...property_desc, user_id})
  }, [user_id])
 
  const handleChange = (e) => {
    setPropertyDescr({
      ...property_desc,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Type of Location</h2>
          <Select
            className="locationtype"
            options={options}
            onChange={(e) =>
              setPropertyDescr({ ...property_desc, location_type: e.value })
            }
          />
        </div>
        <div className="coll1">
          <h2>Property Size in sq ft</h2>
          <input
            className="input"
            name="property_size"
            onChange={handleChange}
            value={property_desc.property_size}
          />
        </div>
      </div>
      <div className="row1">
        <div className="coll1">
          <h2>Street Parking Facility Available</h2>
          <div className="row2">
            <input
              type="radio"
              className="radio"
              name="street_parking"
              onChange={handleChange}
              value="yes"
            />
            YES
            <input
              type="radio"
              className="radio"
              name="street_parking"
              onChange={handleChange}
              value="no"
            />{" "}
            NO
          </div>
        </div>
        <div className="coll1">
          <h2>Security Camera Available</h2>
          <div className="row2">
            <input
              type="radio"
              className="radio"
              name="security_camera"
              onChange={handleChange}
              value="yes"
            />
            YES
            <input
              type="radio"
              className="radio"
              name="security_camera"
              onChange={handleChange}
              value="no"
            />{" "}
            NO
          </div>
        </div>
      </div>
      <div className="row1">
        <div className="coll1">
          <h2>Direction Instruction</h2>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={9}
            name="property_info"
            onChange={handleChange}
            value={property_desc.property_info}
            style={{ width: 690 }}
          />
        </div>
      </div>
      <div className="row1">
        <div className="coll1">
          <button
            className="continue"
            onClick={() => {
              console.log(property_desc);
              showSection("Location")
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
