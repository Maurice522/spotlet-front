import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { createCity, createLocation, createLocType } from "../../services/api";
import { toast } from "react-toastify";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Modal } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function TermCondition() {
  const location_id = useSelector(selectLocationId);
  let data = useSelector(selectLocationData);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [policy, setPolicy] = useState({
    privacy_policy: false,
    term_cond: false,
    grant_info: false,
  });
  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.checked });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!policy.grant_info || !policy.privacy_policy || !policy.term_cond)
      return toast.error("Please check all fields!!");
    data = {
      ...data,
      bookedDates: []
    }
    const locData = {
      data,
      location_id,
    };
    const cityData = {
      value: locData.data.property_address.city,
      label: locData.data.property_address.city
    }
    const loctypedata = {
      value: locData.data.property_desc.location_type,
      label: locData.data.property_desc.location_type
    }
    try {
      const response = await createLocation(locData);
      await createCity(cityData);
      await createLocType(loctypedata);
      localStorage.removeItem("locationData");
      localStorage.removeItem("locationId");
      localStorage.removeItem("locationTypeOptions");
      toast.success(response.data);
      window.location = "/bookinglist/:listing";
    } catch (error) {
      toast.error(error.response.data);
    }
    setOpen(true);
  };
  return (
    <div
      style={{
        height: "800px",
        position: "relative",
      }}
    >
      <h1
        style={{
          marginTop: "10%",
          fontWeight: "600",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        Terms and Conditions
      </h1>
      <p
        style={{
          lineHeight: "24px",
          width: "60vw",
          textAlign: "justify",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose injected humour and the
        like.
      </p>
      <div
        className="terms-conditions"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              sx={{
                color: "#ea4235",
                "&.Mui-checked": {
                  color: "#ea4235",
                },
              }}
              name="privacy_policy"
              checked={policy.privacy_policy}
            />
          }
          label="I have read and agree to the privacy policy"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              sx={{
                color: "#ea4235",
                "&.Mui-checked": {
                  color: "#ea4235",
                },
              }}
              name="term_cond"
              checked={policy.term_cond}
            />
          }
          label="I agree to the Term and Conditions with Hostinger International"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              sx={{
                color: "#ea4235",
                "&.Mui-checked": {
                  color: "#ea4235",
                },
              }}
              name="grant_info"
              checked={policy.grant_info}
            />
          }
          label="I consent to Spotlet using my information"
        />
      </div>
      <div className="row1">
        <div className="coll1">
          <button
            className="termsContinueButton continue"
            style={{ marginLeft: "30px" }}
            onClick={handleSubmit}
          >
            Create Location
          </button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div>
          <div className="listing-modal">
            <h3>Congratulations! You have completed a Listing</h3>
            <Button
              className="auth-btn"
              onClick={() => {
                handleClose();
                navigate("/bookinglist/:listing");
              }}
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
