import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";

const Contact = ({showSection}) => {
  const [contact_det, setContactDet] = useState({
    name: "",
    mobile_num: "",
    email: "",
    alt_name: "",
    alt_mobile: "",
  });
  const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

  useEffect(() => {
		location?.contact_det && setContactDet(location.contact_det);
	  }, [])

  const handleChange = (e) => {
    setContactDet({
      ...contact_det,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Name</h2>
          <input
            className="lginput"
            name="name"
            onChange={handleChange}
            value={contact_det.name}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Mobile Number</h2>
          <input
            className="input"
            name="mobile_num"
            onChange={handleChange}
            value={contact_det.mobile_num}
          />
        </div>
        <div className="coll1">
          <h2>Email Id</h2>
          <input
            className="input"
            name="email"
            onChange={handleChange}
            value={contact_det.email}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Alternate person’s name</h2>
          <input
            className="input"
            name="alt_name"
            onChange={handleChange}
            value={contact_det.alt_name}
          />
        </div>
        <div className="coll1">
          <h2>Alternate person’s Mobile Number</h2>
          <input
            className="input"
            name="alt_mobile"
            onChange={handleChange}
            value={contact_det.alt_mobile}
          />
        </div>
      </div>
      <div className="row1">
        <div className="coll1">
          <button
            className="continue"
            onClick={async() => {
              //console.log(contact_det);
              const locData = {
                ...location,
                contact_det
              }
              dispatch(addLocation(locData));
              const form = {
                location_id,
                data : locData
              }
               await createTempLocation(form);
              showSection("GST Details")
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
