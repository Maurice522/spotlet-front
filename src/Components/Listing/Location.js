import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
import GoogleMap from "../GoogleMap";
import axios from "axios";
import { BiRightArrow } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { MdTravelExplore } from "react-icons/md";
import "../../Assets/Styles/listYourSpace.css";


const Location = ({showSection}) => {
  const [property_address, setPropertyAddress] = useState({
    address: "",
    area:"",
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
  const [cord, setCord] = useState({
    lat : 0,
    lng : 0
  })
  const GEO_API = "b531f1d229f547d09b4c7c3207885471";
  useEffect(() => {
    location.property_address && setPropertyAddress(location.property_address);
    const address = location.property_address && encodeURI(location.property_address.location_detail)
    location.property_address && axios.get(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${GEO_API}`)
    .then(
      (response) => {
        //const { lat, lng } = response.results[0].geometry.location;
      //  console.log(response.data.results[0]);
        setCord({
          lat : response.data.results[0].lat,
          lng : response.data.results[0].lon,
        })
      })
     .catch(err => console.log(err))
  }, [])

  const searchMap = () => {
   // console.log(first)
    const address = encodeURI(property_address.location_detail)
    axios.get(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${GEO_API}`)
    .then(
      (response) => {
        //const { lat, lng } = response.results[0].geometry.location;
      //  console.log(response.data.results[0]);
        setCord({
          lat : response.data.results[0].lat,
          lng : response.data.results[0].lon,
        })
      })
     .catch(err => console.log(err))
  }
  const handleChange = (e) => {
    setPropertyAddress({
      ...property_address,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
     //console.log(property_address)
     if(!property_address.address.length || !property_address.city.length || !property_address.state.length ||!property_address.state.area ||
      !property_address.country.length || !property_address.pincode.length || !property_address.location_detail.length)
         return toast.error("Please fill all required fields!!!")
    //  const locData = {
    //   ...location,
    //   property_address
    // }
    // dispatch(addLocation(locData));
    // const form = {
    //   location_id,
    //   data : locData
    // }
    try {
      // await createTempLocation(form);
      showSection("Amenities");
    } catch (error) {
      toast.error(error.response.data);
    }
  }
  return (
    <div className="lbox">
     
      <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">Country<span style={{color : "red"}}>*</span></h2>
          <input
            className="listingInput input"
            name="country"
            onChange={handleChange}
            value={property_address.country}
          />
        </div>
        <div className="coll1">
          <h2 className="locationH2">State<span style={{color : "red"}}>*</span></h2>
          <input
            className="listingInput input"
            name="state"
            onChange={handleChange}
            value={property_address.state}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">City<span style={{color : "red"}}>*</span></h2>
          <input
            className="listingInput input"
            name="city"
            onChange={handleChange}
            value={property_address.city}
          />
        </div>
        <div className="coll1">
          <h2 className="locationH2">Pincode<span style={{color : "red"}}>*</span></h2>
          <input
            className="listingInput input"
            name="pincode"
            type="number"
            onChange={handleChange}
            value={property_address.pincode}
          />
        </div>

        <div className="coll1">
          <h2 className="locationH2" style={{marginTop:"3%"}}>Area<span style={{color : "red",}}>*</span></h2>
          <input
            className="listingInput input"
            name="area"
            onChange={handleChange}
            value={property_address.area}
          />
        </div>
        <div className="coll1">
          <h2 className="locationH2" style={{marginTop:"3%"}}>Landmark<span style={{color : "red",}}>*</span></h2>
          <input
            className="listingInput input"
            name="landmark"
            onChange={handleChange}
            value={property_address.landmark}
          />
        </div>
       

    
      </div>

    

      <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">Address<span style={{color : "red"}}>*</span></h2>
          <input
            className="listingInput lginput"
            name="address"
            onChange={handleChange}
            value={property_address.address}
          />
        </div>
      </div>

      {/* <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">Landmark </h2>
          <input
            className="listingInput lginput"
            name="landmark"
            onChange={handleChange}
            value={property_address.landmark}
          />
        </div>
      </div> */}

      <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">Location Details - Map<span style={{color : "red"}}>*</span></h2>
          <input
            className="listingInput lginput"
            name="location_detail"
            onChange={handleChange}
            value={property_address.location_detail}
          />
          <MdTravelExplore onClick={searchMap} size={27} style={{marginLeft : "auto", position:"relative", top : "-35px", marginRight : "10px", cursor:"pointer"}}/>
        </div>
      </div>
      {console.log(cord)}
      {(cord.lat !== 0) && 
      <div style={{ width: "70%", height: "300px", marginLeft : "70px" }}>
         <GoogleMap lat={cord.lat} lng={cord.lng} zoom={18} />
    </div>
  }
      <div className="row1">
        <div className="coll1">
          <button
            className="locationContinue continue"
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
