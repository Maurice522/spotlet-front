import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";

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
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Address</h2>
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
          <h2>City</h2>
          <input
            className="input"
            name="city"
            onChange={handleChange}
            value={property_address.city}
          />
        </div>
        <div className="coll1">
          <h2>State</h2>
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
          <h2>Country</h2>
          <input
            className="input"
            name="country"
            onChange={handleChange}
            value={property_address.country}
          />
        </div>
        <div className="coll1">
          <h2>Pincode</h2>
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
          <h2>Landmark (optional)</h2>
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
          <h2>Location Details - Map</h2>
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
            onClick={async() => {
              //console.log(property_address)
              const locData = {
                ...location,
                property_address
              }
              dispatch(addLocation(locData));
              const form = {
                location_id,
                data : locData
              }
               await createTempLocation(form);
              showSection("Amenities");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
