import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId, updatelocation } from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
import GoogleMap from "../GoogleMap";
import axios from "axios";
import { BiRightArrow } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { MdTravelExplore } from "react-icons/md";
import "../../Assets/Styles/listYourSpace.css";
import { Country, State, City } from 'country-state-city';
import {
  Select,
  MenuItem

} from "@mui/material";
import { selectUserData } from "../../redux/slices/userSlice";

// import {

//   Autocomplete,

// } from '@react-google-maps/api'
import { Direction } from "react-toastify";


const Location = ({ showSection, changeSection }) => {
  const [property_address, setPropertyAddress] = useState({
    address: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    landmark: "",
    location_details: null
  });


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  // const [address, setAddress] = useState({})
  // const [mapCenter, setMapCenter] = useState({
  //   lat:17.3850,
  //   lng:78.4867
  // } )

  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  console.log(user)
  // console.log(selectLocationId)
  console.log(location)

  useEffect(() => {
    location && setPropertyAddress(location.property_address);
    console.log(property_address);
  }, []);

  const [showmap, setShowmap] = useState(false)

  const showLocation = () => {
    setShowmap(!showmap);
  }

  const changeCountry = (id) => {
    setCountry(id);
  }
  const changeState = (id) => {
    setState(id);
  }
  const changeCity = (id) => {
    setCity(id);
  }

  console.log(country.length);
  console.log(state.length);
  console.log(city);


  // console.log(Country.getAllCountries())
  // console.log(State.getAllStates())

  // console.log(country);
  // console.log(state);

  let stateArray = State.getAllStates().filter(item => item.countryCode === country);
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
    if (!property_address.city.length || !property_address.state.length || !property_address.area.length ||
      !property_address.country.length || !property_address.pincode.length || !property_address.address.length)
      return toast.error("Please fill all required fields!!!")
    const locData = {
      ...location,
      property_address
    }
    dispatch(addLocation(locData));
    const form = {
      location_id,
      data: locData
    }
    try {
      await createTempLocation(form);
      showSection("Amenities");
    } catch (error) {
      toast.error(error.response.data);
    }

    changeSection("Amenities");
		window.scrollTo(0, 0);
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
            onChange={handleChange}>
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
            isDisabled={country.length === 0 ? true : false}
            onChange={handleChange}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {country.length ? stateArray.map(item => <MenuItem value={item.name} onClick={changeState.bind(this, item.isoCode)} key={item.name}>{item.name}</MenuItem>) : <MenuItem value={''} key={''}></MenuItem>}
          </Select>
          {country.length === 0 && <p style={{ fontSize: "15px", color: "grey" }}>Please select country first</p>}
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
            className={'listingInput input input__location'}
            isDisabled={state.length === 0 ? true : false}
            onChange={handleChange}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {cityArray.map(item => <MenuItem value={item.name} key={item.name}>{item.name}</MenuItem>)}
          </Select>
          {state.length === 0 && <p style={{ fontSize: "15px", color: "grey" }}>Please select country and state first</p>}
        </div>


        <div className="coll1">
          <label
            htmlFor="pin">
            <h2 className="locationH2">Pincode<span style={{ color: "red" }}>*</span></h2>
          </label>
          <input
            className="listingInput input"
            id="pin"
            name="pincode"
            type="text"
            onChange={handleChange}
            value={property_address ? property_address.pincode : ""}
          />
        </div>



        <div className="coll1">
          <h2 className="locationH2" style={{ marginTop: "3%" }}>Area<span style={{ color: "red", }}>*</span></h2>
          <input
            className="listingInput input input--border"
            name="area"
            onChange={handleChange}
            value={property_address ? property_address.area : ""}
          />
        </div>

        <div className="coll1">
          <h2 className="locationH2" style={{ marginTop: "3%" }}>Landmark<span style={{ color: "red", }}>*</span></h2>
          <input
            className="listingInput input input--border"
            name="landmark"
            onChange={handleChange}
            value={property_address ? property_address.landmark : ""}
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
            value={property_address ? property_address.address : ""}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2 className="locationH2">Location Details</h2>
          <input
            className="listingInput lginput"
            name="location_detail"
            onChange={handleChange}
            value={property_address ? property_address.location_details : ""}
          />
          <MdTravelExplore onClick={() => showLocation()} size={27} style={{ marginLeft: "auto", position: "relative", top: "-35px", marginRight: "10px", cursor: "pointer" }} />
        </div>
      </div>


      {(showmap === true) ? (
        <div style={{
          width: "10%",
          height: "10%"
        }}>
          <GoogleMap address={property_address ? property_address.location_details : ""} loc={true} />
        </div>) : null
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
