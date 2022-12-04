import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  addLocation,
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import "../../Assets/Styles/listYourSpace.css";

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

const Contact = ({ showSection, changeSection }) => {
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);
  const user = useSelector(selectUserData);
  const [contact_det, setContactDet] = useState({
    contact_name: "",
    designation: "",
    mobile_num: "",
    email: "",
    alt_name: "",
    alt_mobile: "",
    pan_no: "",
    aadhar_no: "",
    img: user?.personalInfo?.profile_pic,
  });
  useEffect(() => {
    location?.contact_det && setContactDet(location.contact_det);
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    setContactDet({
      ...contact_det,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    //console.log(contact_det);
    e.preventDefault();
    if (!contact_det.email.length || !contact_det.mobile_num.length)
      return toast.error("Please fill all required fields");
    // if (contact_det.alt_name.length != 12) {
    // 	return toast.error("Please enter valid aadhar no.");
    // }

    if (contact_det.pan_no.length !== 10)
      return toast.error("Invalid Pan Number");
    if (
      !isNumeric(contact_det.aadhar_no) ||
      contact_det.aadhar_no.length !== 12
    )
      return toast.error("Invalid Aadhar Number");
    if (
      !isNumeric(contact_det.mobile_num) ||
      contact_det.mobile_num.length !== 10
    )
      return toast.error("Invalid Mobile Number");

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contact_det.email)
    )
      return toast.error("Invalid Email");

    const locData = {
      ...location,
      contact_det,
    };
    dispatch(addLocation(locData));
    const form = {
      location_id,
      data: locData,
    };
    try {
      await createTempLocation(form);
      showSection("GST Details");
    } catch (error) {
      toast.error(error.response.data);
    }

    changeSection("GST Details");
    window.scrollTo(0, 0);
  };
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>
            Contact Person Name<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="input"
            name="contact_name"
            onChange={handleChange}
            value={contact_det.contact_name}
          />
        </div>
        <div className="coll1">
          <h2>
            Contact Person Desgination<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="input"
            name="designation"
            onChange={handleChange}
            value={contact_det.designation}
          />
        </div>
        <div className="coll1">
          <h2 style={{ marginTop: "3%" }}>
            Mobile Number<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="input"
            name="mobile_num"
            onChange={handleChange}
            value={contact_det.mobile_num}
            type="tel"
          />
        </div>
        <div className="coll1">
          <h2 style={{ marginTop: "3%" }}>
            Email Id<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="input"
            name="email"
            onChange={handleChange}
            value={contact_det.email}
            type="email"
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
            type="tel"
          />
        </div>

        <div className="coll1">
          <h2 style={{ marginTop: "3%" }}>
            Pan Number (Bank Account Owner)<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="input"
            name="pan_no"
            onChange={handleChange}
            value={contact_det.pan_no}
          />
        </div>
        <div className="coll1">
          <h2 style={{ marginTop: "3%" }}>
            Aadhar Card Number<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="input"
            name="aadhar_no"
            onChange={handleChange}
            value={contact_det.aadhar_no}
            type="text"
          />
        </div>
      </div>
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

export default Contact;
