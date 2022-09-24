import React, { useEffect, useState } from "react";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, selectUser_id } from "../../redux/slices/userSlice";
import { createTempLocation } from "../../services/api";
import { addLocation, addLocationId, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";

const options = [
  { value: "Airport", label: "Airport" },
  { value: "Amusement Park", label: "Amusement Park" },
  { value: "Apartment", label: "Apartment" },
];

const Details = ({ showSection }) => {
  const user_id = useSelector(selectUser_id);
  const user = useSelector(selectUserData);
  const location = useSelector(selectLocationData);
  const location_id = useSelector(selectLocationId);
  const dispatch = useDispatch();
  const [property_desc, setPropertyDescr] = useState({
    user_id: "",
    location_type: "",
    property_size: "",
    property_info: "",
    street_parking: "",
    security_camera: "",
  });

  useEffect(() => {
    user_id && setPropertyDescr({ ...property_desc, user_id });
  }, [user_id]);

  useEffect(() => {
    location && setPropertyDescr(location.property_desc);
  }, [])

  const handleChange = (e) => {
    setPropertyDescr({
      ...property_desc,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!property_desc.location_type.length || !property_desc.property_info.length || !property_desc.property_size.length ||
       !property_desc.security_camera.length || !property_desc.street_parking.length)
          return toast.error("Please fill all required fields!!!")
    const form = {
      data: {
        ...location,
        property_desc,
      },
      name: user.personalInfo.fullName,
      location_id,
    };
    console.log(form);
    try {
      const response = await createTempLocation(form);
    !location_id && dispatch(addLocationId(response.data));
    dispatch(addLocation(form.data));
    showSection("Location");
    } catch (error) {
      toast.error(error.response.data);
    }
  }
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Type of Location<span style={{color : "red"}}>*</span></h2>
          <Select
            className="locationtype"
            options={options}
            onChange={(e) =>
              setPropertyDescr({ ...property_desc, location_type: e.value })
            }
            value={options.filter(function(option) {
              return option.value === property_desc.location_type;
            })}
          />
        </div>
        <div className="coll1">
          <h2>Property Size in sq ft<span style={{color : "red"}}>*</span></h2>
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
          <h2>Street Parking Facility Available<span style={{color : "red"}}>*</span></h2>
          <div className="row2">
            <input
              type="radio"
              className="radio"
              name="street_parking"
              onChange={handleChange}
              value="yes"
              checked={property_desc.street_parking === "yes"}
            />
            YES
            <input
              type="radio"
              className="radio"
              name="street_parking"
              onChange={handleChange}
              value="no"
              checked={property_desc.street_parking === "no"}
            />{" "}
            NO
          </div>
        </div>
        <div className="coll1">
          <h2>Security Camera Available<span style={{color : "red"}}>*</span></h2>
          <div className="row2">
            <input
              type="radio"
              className="radio"
              name="security_camera"
              onChange={handleChange}
              value="yes"
              checked = {property_desc.security_camera === "yes"}
            />
            YES
            <input
              type="radio"
              className="radio"
              name="security_camera"
              onChange={handleChange}
              value="no"
              checked = {property_desc.security_camera === "no"}
            />{" "}
            NO
          </div>
        </div>
      </div>
      <div className="row1">
        <div className="coll1">
          <h2>Direction Instruction<span style={{color : "red"}}>*</span></h2>
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
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
