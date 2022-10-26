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
import {
  Select,
  MenuItem,

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

  const [country, setCountry] = useState(0);
  const [state, setState] = useState(0);

	const changeCountry = (e) => {
		setCountry(e.target.value);
	}
	const changeState = (e) => {
		setState(e.target.value);
	}

	const filterOptions = {
		State: [
			'Hyderabad'
		],

		City: [
			[''],
			['Ameerpet', 'Sanathnagar', 'Khairatabad', 'Musheerabad', 'Amberpet', 'Nampally', 'Secunderabad', 'Secunderabad Cantonment', 'HITEC City', 'Jubilee Hills', 'Gachibowli', 'Serilingampally', 'Kukatpally', 'Patancheru', 'Balanagar', 'Qutbullapur', 'Medchal', 'Alwal', 'Malkajgiri', 'Kapra', 'Keesara', 'Uppal Kalan', 'Ghatkesar', 'Dilsukhnagar', 'LB Nagar', 'Saroornagar', 'Hayathnagar', 'Mehdipatnam', 'Rajendranagar', 'Shamshabad']
        
	],

		Pincode: [
			[''],
			['500001', '500002', '500003', '500004', '500005', '500006', '500007', '500008', '500011', '500012', '500013', '500016', '500018', '500019', '500020', '500022', '500023', '500024', '500025', '500027', '500028', '500029', '500030', '500031', '500032', '500033', '500034', '500035', '500036', '500037', '500038', '500039', '500041', '500042', '500043', '500044', '500045', '500046', '500048', '500049', '500050', '500052', '500053', '500054', '500055', '500057', '500058', '500059', '500060', '500061', '500063', '500064', '500065', '500066', '500067', '500068', '500069', '500070', '500072', '500073', '500074', '500075', '500076', '500077', '500079', '500080', '500081', '500082', '500084', '500085', '500086', '500088', '500089', '500090', '500091', '500092', '500093', '500095', '500096', '500097', '500098', '500100', '500102', '500104', '500107', '500111', '500112', '500114', '500133', '500138', '500264', '500457', '500482', '500873', '501203', '501218', '501301', '501323', '501401', '501503', '501504', '501505', '501510', '501511', '502032', '502300', '502305', '502307', '502319', '502324', '502325', '502329']
	]
	}

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
  //       //const { lat, lng } = response.results[0].geometry.location;
  //     //  console.log(response.data.results[0]);
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
            onChange={changeCountry}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            <MenuItem value="1">India</MenuItem>
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
            onChange={changeState}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {country ? filterOptions.State.map(item => <MenuItem value={filterOptions.State.indexOf(item)} key={item}>{item}</MenuItem>) : <MenuItem value={''} key={''}></MenuItem>}
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
            className={'listingInput input input__location'}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {filterOptions.City[state+1].map(item => <MenuItem value={filterOptions.City[state+1].indexOf(item)} key={item}>{item}</MenuItem>)}
          </Select>
        </div>


        <div className="coll1">
          <label
            htmlFor="pin">
            <h2 className="locationH2">Pincode<span style={{ color: "red" }}>*</span></h2>
          </label>
          <Select
            id="pin"
            name="pin"
            defaultValue=""
            // value="Hyderabad"
            className={'listingInput input input__location'}
            onChange={(e) => console.log(e.target.value)}>
            {/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
            {filterOptions.Pincode[state+1].map(item => <MenuItem value={filterOptions.Pincode[state+1].indexOf(item)} key={item}>{item}</MenuItem>)}
          </Select>
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
      {/* {console.log(cord)} */}
      {
        // (cord.lat !== 0) 
        true
        &&
        <div style={{ width: "70%", height: "300px", marginLeft: "70px" }}>
          {/* <GoogleMap lat={cord.lat} lng={cord.lng} zoom={18} /> */}
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
