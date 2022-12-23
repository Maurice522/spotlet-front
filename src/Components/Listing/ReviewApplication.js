import React, { useEffect, useState } from "react";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, selectUser_id } from "../../redux/slices/userSlice";
import { createTempLocation, getTempLocation } from "../../services/api";
import {
    addLocation,
    addLocationId,
    selectLocationData,
    selectLocationId,
} from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
import "../../Assets/Styles/listYourSpace.css";


const ReviewApplication = ({ changeSection }) => {

    const location_id = useSelector(selectLocationId);
    const [finalData, setFinalData] = useState({});

    const handleSubmit = () => {
        changeSection("Terms & Conditions");
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTempLocation(location_id);
                setFinalData(res.data);
                // console.log(finalData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [location_id]
    )

    console.log(finalData)

    return (
        <div className="lbox" style={{ height: "120vh", overflowY: "auto", overflowX: "hidden" }}>
            <div id="box-1">
                <div className="review--edit">
                    <h1 style={{ fontSize: "1.5rem" }}>Details & Description</h1>
                    <Button onClick={() => {
                        changeSection("Details & Description");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            Type of Location<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="listingInput input"
                            name="type_of_location"
                            type="text"
                            disabled
                            value={finalData.property_desc ? finalData.property_desc.location_type : ""}
                        />
                    </div>
                    <div className="coll1">
                        <h2>
                            Property Size in sq ft<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="listingInput input"
                            name="property_size"
                            type="number"
                            disabled
                            value={finalData.property_desc ? finalData.property_desc.property_size : ""}
                        />
                    </div>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            Name of the Location
                            <span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            disabled
                            className="listingInput input"
                            name="name"
                            value={finalData.property_desc ? finalData.property_desc.property_name : ""}
                        />
                    </div>
                </div>
                <div>
                    <div className="coll1">
                        <h2>
                            In-House Parking Facility Available
                            <span style={{ color: "red" }}>*</span>
                        </h2>
                        <div className="row2">
                            <div>
                                <input
                                    disabled
                                    type="radio"
                                    className="radio"
                                    name="house_parking"
                                    checked={finalData.property_desc ? finalData.property_desc.house_parking === "yes" : ""}
                                />
                                <span>YES</span>
                            </div>
                            <div>
                                <input
                                    disabled
                                    type="radio"
                                    className="radio"
                                    name="house_parking"
                                    checked={finalData.property_desc ? finalData.property_desc.house_parking === "no" : ""}
                                />{" "}
                                <span>NO</span>
                            </div>
                        </div>
                    </div>
                    <div className="coll1">
                        <h2>
                            Street Parking Facility Available
                            <span style={{ color: "red" }}>*</span>
                        </h2>
                        <div className="row2">
                            <div>
                                <input
                                    disabled
                                    type="radio"
                                    className="radio"
                                    name="street_parking"
                                    checked={finalData.property_desc ? finalData.property_desc.street_parking === "yes" : ""}
                                />
                                <span>YES</span>
                            </div>
                            <div>
                                <input
                                    disabled
                                    type="radio"
                                    className="radio"
                                    name="street_parking"
                                    checked={finalData.property_desc ? finalData.property_desc.street_parking === "no" : ""}
                                />{" "}
                                <span>NO</span>
                            </div>
                        </div>
                    </div>
                    <div className="coll1">
                        <h2>
                            Security Camera Available<span style={{ color: "red" }}>*</span>
                        </h2>
                        <div className="row2">
                            <div>
                                <input
                                    disabled
                                    type="radio"
                                    className="radio"
                                    name="security_camera"
                                    checked={finalData.property_desc ? finalData.property_desc.security_camera === "yes" : ""}
                                />
                                <span>YES</span>
                            </div>
                            <div>
                                <input
                                    disabled
                                    type="radio"
                                    className="radio"
                                    name="security_camera"
                                    checked={finalData.property_desc ? finalData.property_desc.security_camera === "no" : ""}
                                />{" "}
                                <span>NO</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            Description of the property<span style={{ color: "red" }}>*</span>
                        </h2>
                        <TextareaAutosize
                            className="listingInput text-input"
                            aria-label="minimum height"
                            minRows={6}
                            maxLength={500}
                            name="property_info"
                            style={{
                                width: 690,
                                fontSize: "16px",
                                lineHeight: "24px",
                                padding: "1%",
                                backgroundColor: "transparent"
                            }}
                            value={finalData.property_desc ? finalData.property_desc.property_info : ""}
                        />
                    </div>
                </div>
            </div>

            <div id="box-2">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Location</h1>
                    <Button onClick={() => {
                        changeSection("Location");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <label
                            htmlFor="country">
                            <h2 className="locationH2">Country<span style={{ color: "red" }}>*</span></h2>
                        </label>
                        <input
                            disabled
                            className="listingInput input"
                            name="country"
                            type="text"
                            value={finalData.property_address ? finalData.property_address.country : ""}
                        />
                    </div>



                    <div className="coll1">
                        <label
                            htmlFor="wstate">
                            <h2 className="locationH2">State<span style={{ color: "red" }}>*</span></h2>
                        </label>
                        <input
                            className="listingInput input"
                            name="state"
                            disabled
                            type="text"
                            value={finalData.property_address ? finalData.property_address.state : ""}
                        />
                    </div>
                </div>

                <div className="row1">
                    <div className="coll1">
                        <label
                            htmlFor="wcity">
                            <h2 className="locationH2">City<span style={{ color: "red" }}>*</span></h2>
                        </label>
                        <input
                            disabled
                            className="listingInput input"
                            name="city"
                            type="text"
                            value={finalData.property_address ? finalData.property_address.city : ""}
                        />
                    </div>


                    <div className="coll1">
                        <label
                            htmlFor="pin">
                            <h2 className="locationH2">Pincode<span style={{ color: "red" }}>*</span></h2>
                        </label>
                        <input
                            disabled
                            className="listingInput input"
                            id="pin"
                            name="pincode"
                            type="text"
                            value={finalData.property_address ? finalData.property_address.pincode : ""}
                        />
                    </div>



                    <div className="coll1">
                        <h2 className="locationH2" style={{ marginTop: "3%" }}>Area<span style={{ color: "red", }}>*</span></h2>
                        <input
                            disabled
                            className="listingInput input input--border"
                            name="area"
                            value={finalData.property_address ? finalData.property_address.area : ""}
                        />
                    </div>

                    <div className="coll1">
                        <h2 className="locationH2" style={{ marginTop: "3%" }}>Landmark<span style={{ color: "red", }}>*</span></h2>
                        <input
                            disabled
                            className="listingInput input input--border"
                            name="landmark"
                            value={finalData.property_address ? finalData.property_address.landmark : ""}
                        />
                    </div>
                </div>



                <div className="row1">
                    <div className="coll1">
                        <h2 className="locationH2">Address<span style={{ color: "red" }}>*</span></h2>
                        <input
                            className="listingInput lginput input--border"
                            disabled
                            name="address"
                            value={finalData.property_address ? finalData.property_address.address : ""}
                        />
                    </div>
                </div>
            </div>


            <div id="box-3">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Amenities</h1>
                    <Button onClick={() => {
                        changeSection("Amenities");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="coll1">
                    <ul>
                        {finalData.amenities ? finalData.amenities?.map(item => <li key={item}>{item}</li>) : ""}
                    </ul>
                </div>
            </div>

            <div id="box-4">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Photos</h1>
                    <Button onClick={() => {
                        changeSection("Photos");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="row1" id="photo-sec-s">
                    {finalData.imagesData?.map((imageData, index) => {
                        return (
                            <div className="pict" key={index}>
                                <img src={imageData.image} />{" "}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div id="box-5">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Features</h1>
                    <Button onClick={() => {
                        changeSection("Features");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="coll1">
                    <ul>
                        {finalData.features ? finalData.features?.map(item => <li key={item}>{item}</li>) : ""}
                    </ul>
                </div>
            </div>


            <div id="box-6">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Do's & Don'ts</h1>
                    <Button onClick={() => {
                        changeSection("Do's & Don'ts");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="coll1"></div>
                <div className="coll1">
                    <h2>Do's</h2>
                    <div className="row2">
                        <ul>
                            {finalData.do_and_dont ? finalData.do_and_dont.do_s?.map(item => <li key={item}>{item}</li>) : ""}
                        </ul>
                    </div>
                </div>

                <div className="coll1">
                    <h2>Don't</h2>
                    <div className="row2">
                        <ul>
                            {finalData.do_and_dont ? finalData.do_and_dont.dont_s?.map(item => <li key={item}>{item}</li>) : ""}
                        </ul>
                    </div>
                </div>
            </div>


            <div id="box-7">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Pricing</h1>
                    <Button onClick={() => {
                        changeSection("Pricing");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                    <div></div>
                </div>
                <div className="coll1">
                    <div className="row1" style={{ marginBottom: "0" }}>
                        <h1 style={{ fontWeight: "bold" }}>Film/ Ad Film/ Web Series Shoot</h1>
                        <Switch
                            color="warning"
                            checked={finalData?.pricing?.film_webseries_ad?.isPresent}
                        />
                    </div>
                </div>
                <div className="coll1" style={{ marginBottom: "2rem" }}>
                    <h2>Enter Houly Price</h2>
                    <input
                        disabled
                        className="input"
                        value={finalData.pricing ? finalData.pricing.film_webseries_ad?.hourly_rate : ""}
                    />
                </div>

                <div className="coll1">
                    <div className="row1" style={{ marginBottom: "0" }}>
                        <h1 style={{ fontWeight: "bold" }}>TV Series & Other Video Shoot</h1>
                        <Switch
                            color="warning"
                            checked={finalData?.pricing?.tv_series_other?.isPresent}
                        />
                    </div>
                </div>
                <div className="coll1" style={{ marginBottom: "2rem" }}>
                    <h2>Enter Hourly Price in ₹.</h2>
                    <input
                        disabled
                        className="input"
                        value={finalData.pricing ? finalData.pricing.tv_series_other?.hourly_rate : ""}
                    />
                </div>
                <div className="coll1">
                    <div className="row1" style={{ marginBottom: "0" }}>
                        <h1 style={{ fontWeight: "bold" }}>Corporate Event</h1>
                        <Switch
                            color="warning"
                            checked={finalData?.pricing?.corporate?.isPresent}
                        />
                    </div>
                </div>
                <div className="coll1" style={{ marginBottom: "2rem" }}>
                    <h2>Enter Hourly Price in ₹.</h2>
                    <input
                        disabled
                        className="input"
                        value={finalData.pricing ? finalData.pricing.corporate?.hourly_rate : ""}
                    />
                </div>

                <div className="coll1">
                    <div className="row1" style={{ marginBottom: "0" }}>
                        <h1 style={{ fontWeight: "bold" }}>Individual Event</h1>
                        <Switch
                            color="warning"
                            checked={finalData?.pricing?.individual?.isPresent}
                        />
                    </div>
                </div>
                <div className="coll1" style={{ marginBottom: "2rem" }}>
                    <h2>Enter Hourly Price in ₹.</h2>
                    <input
                        disabled
                        className="input"
                        value={finalData.pricing ? finalData.pricing.individual?.hourly_rate : ""}
                    />
                </div>

                <div className="coll1">
                    <div className="row1" style={{ marginBottom: "0" }}>
                        <h1 style={{ fontWeight: "bold" }}>Cleaning Fee</h1>
                    </div>
                </div>
                <div className="coll1" style={{ marginBottom: "2rem" }}>
                    <input
                        disabled
                        className="input"
                        value={finalData.pricing ? finalData.pricing.cleaningFee : ""}
                    />
                </div>
            </div>


            <div id="box-8">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Rules of the Host</h1>
                    <Button onClick={() => {
                        changeSection("Rules of the Host");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="coll1">
                    <h2>Rules of the Host</h2>
                    <div className="row2">
                        <ul>
                            {finalData.rules ? finalData.rules?.map(item => <li key={item}>{item}</li>) : ""}
                        </ul>
                    </div>
                </div>
            </div>

            <div id="box-9">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Timings</h1>
                    <Button onClick={() => {
                        changeSection("Timings");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Monday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.monday?.open}
                        disabled
                    />
                    {finalData?.timings?.monday?.open && <div className="row2">
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="monday"
                            checked={finalData?.timings?.monday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="monday"
                            checked={finalData?.timings?.monday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.monday?.open && finalData?.timings?.monday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.monday?.time?.start}</p>
                            <p>End: {finalData?.timings?.monday?.time?.end}</p>
                        </div>
                    }
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Tuesday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.tuesday?.open}
                        disabled
                    />
                    {finalData?.timings?.tuesday?.open && <div className="row2">
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="tuesday"
                            checked={finalData?.timings?.tuesday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="tuesday"
                            checked={finalData?.timings?.tuesday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.tuesday?.open && finalData?.timings?.tuesday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.tuesday?.time?.start}</p>
                            <p>End: {finalData?.timings?.tuesday?.time?.end}</p>
                        </div>
                    }
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Wednesday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.wednesday?.open}
                        disabled
                    />
                    {finalData?.timings?.wednesday?.open && <div className="row2">
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="wednesday"
                            checked={finalData?.timings?.wednesday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="wednesday"
                            checked={finalData?.timings?.wednesday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.wednesday?.open && finalData?.timings?.wednesday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.wednesday?.time?.start}</p>
                            <p>End: {finalData?.timings?.wednesday?.time?.end}</p>
                        </div>
                    }
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Thursday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.thursday?.open}
                        disabled
                    />
                    {finalData?.timings?.thursday?.open && <div className="row2">
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="thursday"
                            checked={finalData?.timings?.thursday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="thursday"
                            checked={finalData?.timings?.thursday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.thursday?.open && finalData?.timings?.thursday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.thursday?.time?.start}</p>
                            <p>End: {finalData?.timings?.thursday?.time?.end}</p>
                        </div>
                    }
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Friday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.friday?.open}
                        disabled
                    />
                    {finalData?.timings?.friday?.open && <div className="row2">
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="friday"
                            checked={finalData?.timings?.friday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="friday"
                            checked={finalData?.timings?.friday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.friday?.open && finalData?.timings?.friday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.friday?.time?.start}</p>
                            <p>End: {finalData?.timings?.friday?.time?.end}</p>
                        </div>
                    }
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Saturday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.saturday?.open}
                        disabled
                    />
                    {finalData?.timings?.saturday?.open && <div className="row2">
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="saturday"
                            checked={finalData?.timings?.saturday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="saturday"
                            checked={finalData?.timings?.saturday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.saturday?.open && finalData?.timings?.saturday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.saturday?.time?.start}</p>
                            <p>End: {finalData?.timings?.saturday?.time?.end}</p>
                        </div>
                    }
                </div>
                <div className="row1 timing-row-rev">
                    <h2>Sunday</h2>
                    <Switch
                        color="warning"
                        checked={finalData?.timings?.sunday?.open}
                        disabled
                    />
                    {finalData?.timings?.sunday?.open && <div className="row2">
                        <input
                            type="radio"
                            className="radio"
                            name="sunday"
                            disabled
                            checked={finalData?.timings?.sunday?.time === 'all day'}
                        />
                        <h2 className="timingH2AllDay">All Day</h2>
                        <input
                            disabled
                            type="radio"
                            className="radio"
                            name="sunday"
                            checked={finalData?.timings?.sunday?.isSetHours === true}
                        />
                        <h2 className="timingH2AllDay">Set Hours</h2>
                    </div>}
                    {finalData?.timings?.sunday?.open && finalData?.timings?.sunday?.isSetHours === true &&
                        <div>
                            <p>Start: {finalData?.timings?.sunday?.time?.start}</p>
                            <p>End: {finalData?.timings?.sunday?.time?.end}</p>
                        </div>
                    }
                </div>
            </div>


            <div id="box-10">
                <div className="lbox">
                    <div className="review--edit" style={{ marginTop: "3rem" }}>
                        <h1 style={{ fontSize: "1.5rem" }}>Contact Details</h1>
                        <Button onClick={() => {
                            changeSection("Contact Details");
                            window.scrollTo(0, 0);
                        }}>Edit</Button>
                    </div>
                    
                    <div className="coll1">
                        <h2>
                            Contact Person Name<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="input"
                            disabled
                            name="contact_name"
                            value={finalData.contact_det ? finalData.contact_det.contact_name : ""}
                        />
                    </div>
                    <div className="coll1">
                        <h2>
                            Contact Person Desgination<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="input"
                            name="designation"
                            value={finalData.contact_det ? finalData.contact_det.designation : ""}
                        />
                    </div>
                    <div className="coll1">
                        <h2 style={{ marginTop: "3%" }}>
                            Mobile Number<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="input"
                            name="mobile_num"
                            disabled
                            type="tel"
                            value={finalData.contact_det ? finalData.contact_det.mobile_num : ""}
                        />
                    </div>
                    <div className="coll1">
                        <h2 style={{ marginTop: "3%" }}>
                            Email Id<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="input"
                            name="email"
                            disabled
                            type="email"
                            value={finalData.contact_det ? finalData.contact_det.email : ""}
                        />
                    </div>
                </div>

                <div className="row1">
                    <div className="coll1">
                        <h2>Alternate person’s name</h2>
                        <input
                            className="input"
                            name="alt_name"
                            disabled
                            value={finalData.contact_det ? finalData.contact_det.alt_name : ""}
                        />
                    </div>
                    <div className="coll1">
                        <h2>Alternate person’s Mobile Number</h2>
                        <input
                            className="input"
                            name="alt_mobile"
                            type="tel"
                            value={finalData.contact_det ? finalData.contact_det.alt_mobile : ""}
                        />
                    </div>

                    <div className="coll1">
                        <h2 style={{ marginTop: "3%" }}>
                            Pan Number<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="input"
                            name="pan_no"
                            disabled
                            value={finalData.contact_det ? finalData.contact_det.pan_no : ""}
                        />
                    </div>
                    <div className="coll1">
                        <h2 style={{ marginTop: "3%" }}>
                            Aadhar Card Number<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="input"
                            name="aadhar_no"
                            type="number"
                            disabled
                            value={finalData.contact_det ? finalData.contact_det.aadhar_no : ""}
                        />
                    </div>
                </div>
            </div>


            <div id="box-11">
                <div className="lbox">
                    <div className="review--edit" style={{ marginTop: "3rem" }}>
                        <h1 style={{ fontSize: "1.5rem" }}>GST Details</h1>
                        <Button onClick={() => {
                            changeSection("GST Details");
                            window.scrollTo(0, 0);
                        }}>Edit</Button>
                    </div>
                    <div className="row1">
                        <div className="coll1">
                            <h2>
                                GST Number
                                <span style={{ color: "red" }}>*</span>
                            </h2>
                            <input
                                disabled
                                className="input"
                                name="gst"
                                value={finalData?.gst?.doc_no}
                            />

                            {finalData?.gst?.docs.map((fileData, index) => {
                                return (
                                    <div className="pict" style={{ width: "440px", height: "330px" }} key={index}>
                                        <embed src={fileData.file} width="440px" height="330px" />{" "}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>


            <div id="box-12">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Bank Details</h1>
                    <Button onClick={() => {
                        changeSection("Bank Details");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="coll1">
                    <h2>
                        Account Holder's Name<span style={{ color: "red" }}>*</span>
                    </h2>
                    <input
                        className="listingInput input"
                        name="account_holder_name"
                        type="text"
                        disabled
                        value={finalData.bankDetails ? finalData.bankDetails.account_holder_name : ""}
                    />
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            Bank Name<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="listingInput input"
                            name="bank_name"
                            type="text"
                            value={finalData.bankDetails ? finalData.bankDetails.bank_name : ""}
                        />
                    </div>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            IFSC Code<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="listingInput input"
                            name="ifsc_code"
                            type="text"
                            disabled
                            value={finalData.bankDetails ? finalData.bankDetails.ifsc_code : ""}
                        />
                    </div>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            Account Number<span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="listingInput input"
                            name="account_number"
                            type="number"
                            disabled
                            value={finalData.bankDetails ? finalData.bankDetails.account_number : ""}
                        />
                    </div>
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

export default ReviewApplication;
