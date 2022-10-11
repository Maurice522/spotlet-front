import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import "../../Assets/Styles/listYourSpace.css";

const Contact = ({showSection}) => {
 
  const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);
  const user = useSelector(selectUserData);
  const [contact_det, setContactDet] = useState({
    name: "",
    mobile_num: "",
    email: "",
    alt_name: "",
    alt_mobile: "",
    img : user.personalInfo.profile_pic
  });
  useEffect(() => {
		location?.contact_det && setContactDet(location.contact_det);
	  }, [])

  const handleChange = async(e) => {
    e.preventDefault();
    setContactDet({
      ...contact_det,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    //console.log(contact_det);
    e.preventDefault();
    if(!contact_det.email.length || !contact_det.mobile_num.length || !contact_det.name.length)
        return toast.error("Please fill all required fields");
    const locData = {
     ...location,
     contact_det
   }
   dispatch(addLocation(locData));
   const form = {
     location_id,
     data : locData
   }
   try {
     await createTempLocation(form);
     showSection("GST Details")
   } catch (error) {
     toast.error(error.response.data);
   }
 }
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Name on the Booking<span style={{color : "red"}}>*</span></h2>
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
          <h2>Mobile Number<span style={{color : "red"}}>*</span></h2>
          <input
            className="input"
            name="mobile_num"
            onChange={handleChange}
            value={contact_det.mobile_num}
          />
        </div>
        <div className="coll1">
          <h2>Email Id<span style={{color : "red"}}>*</span></h2>
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
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
