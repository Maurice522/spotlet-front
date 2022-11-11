import React, { useEffect, useState } from "react";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId, updatelocation } from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
import GoogleMap from "../GoogleMap";
import axios from "axios";
import { MdTravelExplore } from "react-icons/md";
import "../../Assets/Styles/listYourSpace.css";
import { Country, State, City } from 'country-state-city';
import {
  Select,
  MenuItem

} from "@mui/material";

const Location = ({ showSection, changeSection }) => {
  const [property_address, setPropertyAddress] = useState({
    address: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    landmark: "",
    location_detail: null
  });

  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);
  const dispatch = useDispatch();

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const [countryKey, setCountryKey] = useState(-1);
  const [stateKey, setStateKey] = useState(-1);
  const [cityKey, setCityKey] = useState(-1);

  // const [address, setAddress] = useState({})
  // const [mapCenter, setMapCenter] = useState({
  //   lat:17.3850,
  //   lng:78.4867
  // } )


  useEffect(() => {

    var countryiso
    location && Country.getAllCountries().map((item, index) => {
      if (item.name === location?.property_address?.country) {
        setCountryKey(index);
        countryiso = item.isoCode;
        setCountry(item.isoCode);
        // alert(index);
      }
    })

    var stateiso
    location && State.getAllStates().filter(item => item.countryCode === countryiso).map((item, index) => {
      if (item.name === location?.property_address?.state) {
        setStateKey(index);
        setState(item.isoCode);
        stateiso = item.isoCode;
        // alert(index);
      }
    })

    location && City.getCitiesOfState(countryiso, stateiso).map((item, index) => {
      if (item.name === location?.property_address?.city) {
        setCityKey(index);
        setCity(item.name);
        // alert(index);
      }
    })

    location && setPropertyAddress(location?.property_address);
  }, []);

  const [showmap, setShowmap] = useState(false)

  const showLocation = () => {
    setShowmap(!showmap);
  }

  let stateArray = State.getAllStates().filter(item => item.countryCode === country);
  // console.log(stateArray);
  let cityArray = City.getCitiesOfState(country, state);

  const changeCountry = (id, idx) => {
    setCountryKey(idx);
    setCountry(id);
  }
  const changeState = (id, idx) => {
    setStateKey(idx)
    setState(id);
  }
  const changeCity = (name, idx) => {
    setCityKey(idx)
    setCity(name);
  }

  // console.log(Country.getAllCountries())
  // console.log(State.getAllStates())

  // console.log(country);
  // console.log(state);



  // console.log(cityArray);

  // const [cord, setCord] = useState({
  //   lat : 0,
  //   lng : 0
  // })

  // const GEO_API = "b531f1d229f547d09b4c7c3207885471";

  // useEffect(() => {
  //   location?.property_address && setPropertyAddress(location?.property_address);
  //   const address = location.property_address && encodeURI(location.property_address.location_detail)
  //   location?.property_address && axios.get(`https://api.geoapify.com/v1/geocode/search?text=${location?.location_details}&format=json&apiKey=${GEO_API}`)
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
  // }, [property_address])

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
    if (!property_address?.city?.length || !property_address?.state?.length || !property_address?.area?.length ||
      !property_address?.country?.length || !property_address?.pincode?.length || !property_address?.address?.length)
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
            // defaultValue=""
            value={countryKey == -1 ? "" : Country.getAllCountries()[countryKey].name}
            className={'listingInput input input__location'}
            onChange={handleChange}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {Country.getAllCountries().map((item, index) => <MenuItem value={item.name} onClick={changeCountry.bind(this, item.isoCode, index)} key={item.name}>{item.name}</MenuItem>)}
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
            // defaultValue=""
            value={country?.length ? stateArray[stateKey]?.name : ""}
            className={'listingInput input input__location'}
            isDisabled={country.length === 0 ? true : false}
            onChange={handleChange}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {country.length ? stateArray.map((item, index) => <MenuItem value={item.name} onClick={changeState.bind(this, item.isoCode, index)} key={item.name}>{item.name}</MenuItem>) : <MenuItem value={''} key={''}></MenuItem>}
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
            value={city}
            className={'listingInput input input__location'}
            isDisabled={state.length === 0 ? true : false}
            onChange={handleChange}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {stateArray.length && cityArray.map((item, index) => <MenuItem value={item.name} onClick={changeCity.bind(this, item.name, index)} key={item.name}>{item.name}</MenuItem>)}
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
            value={property_address ? property_address.location_detail : ""}
          />
          <MdTravelExplore onClick={() => showLocation()} size={27} style={{ marginLeft: "auto", position: "relative", top: "-35px", marginRight: "10px", cursor: "pointer" }} />
        </div>
      </div>


      {(showmap === true) ? (
        <div style={{
          width: "10%",
          height: "10%"
        }}>
          <GoogleMap address={property_address?.location_detail} />
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
