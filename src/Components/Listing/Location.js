import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
import  GoogleMap from "../GoogleMap";
import axios from "axios";
import { BiRightArrow } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { MdTravelExplore } from "react-icons/md";
import "../../Assets/Styles/listYourSpace.css";
// import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { Country, State, City } from 'country-state-city';
import {
  Select,
  MenuItem

} from "@mui/material";



const Location = ({ showSection }) => {
  const [property_address, setPropertyAddress] = useState({
    address: "",
    area: "",
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

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  
 
  const changeCountry = (count) => {
    setCountry(count);
  }
  const changeState = (stat) => {
    setState(stat);
  }
  const changeCountryHandler = (e) => {
    console.log(e.target.value)
  }
  const changeStateHandler = (e) => {
    console.log(e.target.value)
  }
  const changeCityHandler = (e) => {
    console.log(e.target.value)
  }

  // console.log(Country.getAllCountries())
  // console.log(State.getAllStates())

  // console.log(country);
  // console.log(state);

  let stateArray = State.getAllStates().filter(item => item.countryCode === country);;
  let cityArray = City.getCitiesOfState(country, state);

  // const [cord, setCord] = useState({
  //   lat : 0,
  //   lng : 0
  // })

  // const GEO_API = "b531f1d229f547d09b4c7c3207885471";

  // useEffect(() => {
  //   location.property_address && setPropertyAddress(location.property_address);
  //   const address = location.property_address && encodeURI(location.property_address.location_detail)
  //   location.property_address && axios.get(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${GEO_API}`)
  //   .then(
  //     (response) => {
  //       //const { lat, lng } = response.results[0].geometry.location;
  //     //  console.log(response.data.results[0]);
  //       setCord({
  //         lat : response.data.results[0].lat,
  //         lng : response.data.results[0].lon,
  //       })
  //     })
  //    .catch(err => console.log(err))
  // }, [])

  // const searchMap = () => {
  //  // console.log(first)
  //   const address = encodeURI(property_address.location_detail)
  //   axios.get(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${GEO_API}`)
  //   .then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //      console.log(response.data.results[0]);
  //       setCord({
  //         lat : response.data.results[0].lat,
  //         lng : response.data.results[0].lon,
  //       })
  //     })
  //    .catch(err => console.log(err))
  // }


  const handleChange = (e) => {
    setPropertyAddress({
      ...property_address,
      [e.target.name]: e.target.value,
    });
    console.log(property_address);
  };


  const handleSubmit = async (e) => {
    //console.log(property_address)
    if (!property_address.address.length || !property_address.city.length || !property_address.state.length || !property_address.state.area ||
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

  // const handleMap = (loc) =>{
  //   geocodeByAddress(loc)
  // .then(results => getLatLng(results[0]))
  // .then(({ lat, lng }) =>
  //   setLat(lat),
  //   setLng(lng)
  // );
  // }
 

  return (
    <div className="lbox">

      <div className="row1">
        <div className="coll1">
          <label
            htmlFor="country">
            <h2 className="locationH2">Country<span style={{ color: "red" }}>*</span></h2>
          </label>
          <Select
            id="country"
            name="country"
            defaultValue=""
            // value="Hyderabad"
            className={'listingInput input input__location'}
            onChange={changeCountryHandler}
            value={property_address.country}>
            
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {Country.getAllCountries().map(item => <MenuItem value={item.name} onClick={changeCountry.bind(this, item.isoCode)} key={item.name}>{item.name}</MenuItem>)}
          </Select>
        </div>


        <div className="coll1">
          <label
            htmlFor="wstate">
            <h2 className="locationH2">State<span style={{ color: "red" }}>*</span></h2>
          </label>
          <Select
            id="state"
            name="state"
            defaultValue=""
            // value="Hyderabad"
            className={'listingInput input input__location'}
            onChange={changeStateHandler}
            value={property_address.state}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {country.length ? stateArray.map(item => <MenuItem value={item.name} key={item.name} onClick={changeState.bind(this, item.isoCode)}>{item.name}</MenuItem>) : <MenuItem value={''} key={''}></MenuItem>}
          </Select>
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <label
            htmlFor="wcity">
            <h2 className="locationH2">City<span style={{ color: "red" }}>*</span></h2>
          </label>
          <Select
            id="city"
            name="city"
            defaultValue=""
            // value="Hyderabad"
            onChange={changeCityHandler}
            className={'listingInput input input__location'}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {cityArray.map(item => <MenuItem value={item.name} key={item.name}>{item.name}</MenuItem>)}
          </Select>
        </div>


        <div className="coll1">
          <label
            htmlFor="pin">
            <h2 className="locationH2">Pincode<span style={{ color: "red" }}>*</span></h2>
          </label>
          <input
            className="listingInput input"
            id="pin"
            name="pin"
            type="number"
            min={100000}
            max={999999}
          />
        </div>



        <div className="coll1">
          <h2 className="locationH2" style={{ marginTop: "3%" }}>Area<span style={{ color: "red", }}>*</span></h2>
          <input
            className="listingInput input input--border"
            name="area"
            onChange={handleChange}
            value={property_address.area}
          />
        </div>

        <div className="coll1">
          <h2 className="locationH2" style={{ marginTop: "3%" }}>Landmark<span style={{ color: "red", }}>*</span></h2>
          <input
            className="listingInput input input--border"
            name="landmark"
            onChange={handleChange}
            value={property_address.landmark}
          />
        </div>
      </div>



      <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">Address<span style={{ color: "red" }}>*</span></h2>
          <input
            className="listingInput lginput input--border"
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
          <h2 className="locationH2">Location Details - Map<span style={{ color: "red" }}>*</span></h2>
        
          <input
            className="listingInput lginput input--border"
            name="location_detail"
            onChange={handleChange}
            value={property_address.location_detail}
          />
          
          <MdTravelExplore onClick={console.log("")} size={27} style={{ marginLeft: "auto", position: "relative", top: "-35px", marginRight: "10px", cursor: "pointer" }} />
        </div>
      </div>
     
      
       {/* handleMap(property_address.location_detail) */}
        
        <div style={{ width: "60%", height: "600px", marginLeft: "70px"  }}>
         <GoogleMap/>
        </div>
        
        
      
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
