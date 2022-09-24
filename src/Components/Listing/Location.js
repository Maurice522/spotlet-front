import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
const Location = ({showSection}) => {
  const [property_address, setPropertyAddress] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    landmark: "",
    location_detail: "",
  });
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
    location.property_address && setPropertyAddress(location.property_address);
  }, [])

  const handleChange = (e) => {
    setPropertyAddress({
      ...property_address,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
     //console.log(property_address)
     if(!property_address.address.length || !property_address.city.length || !property_address.state.length ||
      !property_address.country.length || !property_address.pincode.length || !property_address.location_detail.length)
         return toast.error("Please fill all required fields!!!")
     const locData = {
      ...location,
      property_address
    }
    dispatch(addLocation(locData));
    const form = {
      location_id,
      data : locData
    }
    try {
      await createTempLocation(form);
      showSection("Amenities");
    } catch (error) {
      toast.error(error.response.data);
    }
  }
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Address<span style={{color : "red"}}>*</span></h2>
          <input
            className="lginput"
            name="address"
            onChange={handleChange}
            value={property_address.address}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>City<span style={{color : "red"}}>*</span></h2>
          <input
            className="input"
            name="city"
            onChange={handleChange}
            value={property_address.city}
          />
        </div>
        <div className="coll1">
          <h2>State<span style={{color : "red"}}>*</span></h2>
          <input
            className="input"
            name="state"
            onChange={handleChange}
            value={property_address.state}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Country<span style={{color : "red"}}>*</span></h2>
          <input
            className="input"
            name="country"
            onChange={handleChange}
            value={property_address.country}
          />
        </div>
        <div className="coll1">
          <h2>Pincode<span style={{color : "red"}}>*</span></h2>
          <input
            className="input"
            name="pincode"
            type="number"
            onChange={handleChange}
            value={property_address.pincode}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Landmark </h2>
          <input
            className="lginput"
            name="landmark"
            onChange={handleChange}
            value={property_address.landmark}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Location Details - Map<span style={{color : "red"}}>*</span></h2>
          <input
            className="lginput"
            name="location_detail"
            onChange={handleChange}
            value={property_address.location_detail}
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

export default Location;
