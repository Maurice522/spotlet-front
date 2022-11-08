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
                console.log(finalData)
            } catch (error) {
                console.log(error) 
            }
        }
        fetchData();
    }, [location_id]
    )

    console.log(finalData.property_desc)

    return (
        <div className="lbox">
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
                        value={finalData.property_desc ? finalData.property_desc.location_type: ""}
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
                        value={finalData.property_desc ? finalData.property_desc.property_size: ""}
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
                                type="radio"
                                className="radio"
                                name="house_parking"
                            />
                            <span>YES</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="radio"
                                name="house_parking"
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
                                type="radio"
                                className="radio"
                                name="street_parking"
                            />
                            <span>YES</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="radio"
                                name="street_parking"
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
                                type="radio"
                                className="radio"
                                name="security_camera"
                            />
                            <span>YES</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="radio"
                                name="security_camera"
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
                        }}
                    />
                </div>
            </div>

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
                        className="listingInput input"
                        name="country"
                        type="text"
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
                        type="text"
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
                        className="listingInput input"
                        name="city"
                        type="text"
                    />
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
                    />
                </div>



                <div className="coll1">
                    <h2 className="locationH2" style={{ marginTop: "3%" }}>Area<span style={{ color: "red", }}>*</span></h2>
                    <input
                        className="listingInput input input--border"
                        name="area"
                    />
                </div>

                <div className="coll1">
                    <h2 className="locationH2" style={{ marginTop: "3%" }}>Landmark<span style={{ color: "red", }}>*</span></h2>
                    <input
                        className="listingInput input input--border"
                        name="landmark"
                    />
                </div>
            </div>



            <div className="row1">
                <div className="coll1">
                    <h2 className="locationH2">Address<span style={{ color: "red" }}>*</span></h2>
                    <input
                        className="listingInput lginput input--border"
                        name="address"
                    />
                </div>
            </div>


            <div className="review--edit" style={{ marginTop: "3rem" }}>
                <h1 style={{ fontSize: "1.5rem" }}>Amenities</h1>
                <Button onClick={() => {
                    changeSection("Amenities");
                    window.scrollTo(0, 0);
                }}>Edit</Button>
            </div>
            <div className="coll1">
                <h2>
                    Amenties<span style={{ color: "red" }}>*</span>
                </h2>
                <input
                    className="listingInput input"
                    name="amenities"
                    type="text"
                />
            </div>

            <div className="review--edit" style={{ marginTop: "3rem" }}>
                <h1 style={{ fontSize: "1.5rem" }}>Features</h1>
                <Button onClick={() => {
                    changeSection("Features");
                    window.scrollTo(0, 0);
                }}>Edit</Button>
            </div>
            <div className="coll1">
                <h2>
                    Features<span style={{ color: "red" }}>*</span>
                </h2>
                <input
                    className="listingInput input"
                    name="features"
                    type="text"
                />
            </div>


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
                    <input
                        className="listingInput input"
                        id="myInput"
                    />
                </div>
            </div>

            <div className="coll1">
                <h2>Don't</h2>
                <div className="row2">
                    <input
                        className="listingInput input"
                        id="myInput"
                    />
                </div>
            </div>

            <div className="review--edit" style={{ marginTop: "3rem" }}>
                <h1 style={{ fontSize: "1.5rem" }}>Pricing</h1>
                <Button onClick={() => {
                    changeSection("Pricing");
                    window.scrollTo(0, 0);
                }}>Edit</Button>
                <div></div>
            </div>
            <div className="coll1">
                <div className="row1">
                    <h1>Film/ Ad Film/ Web Series Shoot</h1>
                    <Switch
                        color="warning"
                    />
                </div>
            </div>
            <div className="coll1">
                <h2>Enter Houly Price</h2>
                <input
                    className="input"
                />
            </div>
            <div className="coll1">
                <h2>Half Day Price &nbsp;&nbsp; <span style={{ color: "grey" }}>*10% discount applied</span></h2>
                <input
                    className="sminput"
                    disabled
                />
                <div className="coll1">
                    <h2>Full Day Price&nbsp;&nbsp; <span style={{ color: "grey" }}>*20% discount applied</span> </h2>
                    <input
                        className="sminput"
                        disabled
                    />
                </div>

                <div className="coll1">
                    <div className="row1">
                        <h1>TV Series & Other Video Shoot</h1>
                        <Switch
                            color="warning"
                        />
                    </div>
                </div>
                <div className="coll1">
                    <h2>Enter Hourly Price in Rs.</h2>
                    <input
                        className="input"
                    />
                </div>
                <div className="coll1">
                    <h2>Half Day Price &nbsp;&nbsp; <span style={{ color: "grey" }}>*10% discount applied</span></h2>
                    <input
                        className="sminput"
                        disabled
                    />
                    <div className="coll1">
                        <h2>Full Day Price &nbsp;&nbsp; <span style={{ color: "grey" }}>*20% discount applied</span></h2>
                        <input
                            className="sminput"
                            disabled
                        />
                    </div>
                </div>
                <div className="coll1">
                    <div className="row1">
                        <h1>Corporate Event</h1>
                        <Switch
                            color="warning"
                        />
                    </div>
                </div>
                <div className="coll1">
                    <h2>Enter Hourly Price in Rs.</h2>
                    <input
                        className="input"
                    />
                </div>
                <div className="coll1">
                    <h2>8 hour Price</h2>
                    <input
                        className="sminput"
                        disabled
                    />
                    <div className="coll1">
                        <h2>12 hour Price&nbsp;&nbsp; <span style={{ color: "grey" }}>*10% discount applied</span></h2>
                        <input
                            className="sminput"
                            disabled
                        />
                    </div>
                    <div className="coll1">
                        <h2>24 hour Price&nbsp;&nbsp; <span style={{ color: "grey" }}>*20% discount applied</span></h2>
                        <input
                            className="sminput"
                            disabled
                        />
                    </div>
                </div>

                <div className="coll1">
                    <div className="row1">
                        <h1>Individual Event</h1>
                        <Switch
                            color="warning"
                        />
                    </div>
                </div>
                <div className="coll1">
                    <h2>Enter Hourly Price in Rs.</h2>
                    <input
                        className="input"
                    />
                </div>
                <div className="coll1">
                    <h2>8 hour Price</h2>
                    <input
                        className="sminput"
                        disabled
                    />
                    <div className="coll1">
                        <h2>12 hour Price &nbsp;&nbsp; <span style={{ color: "grey" }}>*10% discount applied</span></h2>
                        <input
                            className="sminput"
                            disabled
                        />
                    </div>
                    <div className="coll1">
                        <h2>24 hour Price &nbsp;&nbsp; <span style={{ color: "grey" }}>*20% discount applied</span></h2>
                        <input
                            className="sminput"
                            disabled
                        />
                    </div>
                </div>
            </div>


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
                    <input
                        className="listingInput input"
                        id="myInput"
                    />
                </div>
            </div>

            <div className="review--edit" style={{ marginTop: "3rem" }}>
                <h1 style={{ fontSize: "1.5rem" }}>Timings</h1>
                <Button onClick={() => {
                    changeSection("Timings");
                    window.scrollTo(0, 0);
                }}>Edit</Button>
            </div>
            <div className="row1 timing-row">
                <h2>Monday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>
            <div className="row1 timing-row">
                <h2>Tuesday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>
            <div className="row1 timing-row">
                <h2>Wednesday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>
            <div className="row1 timing-row">
                <h2>Thursday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>
            <div className="row1 timing-row">
                <h2>Friday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>
            <div className="row1 timing-row">
                <h2>Saturday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>
            <div className="row1 timing-row">
                <h2>Sunday</h2>
                <Switch
                    color="warning"
                />
                <div className="row2">
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">All Day</h2>
                    <input
                        type="radio"
                        className="radio"
                        name="monday"
                    />
                    <h2 className="timingH2AllDay">Set Hours</h2>
                </div>
                <div className="row1 timing-row">
                    <input
                        className="timeInput listingInput input"
                        type="time"
                    />
                    <h2 style={{ display: "inline-block", marginRight: "2%", marginLeft: "27%", }}> to </h2>
                    <input
                        className="timeInput timeInput lisitngInput input"
                        type="time"
                    />
                </div>
            </div>


            <div className="lbox">
                <div className="review--edit" style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "1.5rem" }}>Contact Details</h1>
                    <Button onClick={() => {
                        changeSection("Contact Details");
                        window.scrollTo(0, 0);
                    }}>Edit</Button>
                </div>
                <div className="row1">
                    <div className="coll1">
                        <h2>
                            Name required on the Booking (Company/Individual)
                            <span style={{ color: "red" }}>*</span>
                        </h2>
                        <input
                            className="lginput"
                            name="name"
                        />
                    </div>
                </div>

                <div className="coll1">
                    <h2>
                        Contact Person Name<span style={{ color: "red" }}>*</span>
                    </h2>
                    <input
                        className="input"
                        name="contact_name"
                    />
                </div>
                <div className="coll1">
                    <h2>
                        Contact Person Desgination<span style={{ color: "red" }}>*</span>
                    </h2>
                    <input
                        className="input"
                        name="designation"
                    />
                </div>
                <div className="coll1">
                    <h2 style={{ marginTop: "3%" }}>
                        Mobile Number<span style={{ color: "red" }}>*</span>
                    </h2>
                    <input
                        className="input"
                        name="mobile_num"
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
                    />
                </div>
                <div className="coll1">
                    <h2>Alternate person’s Mobile Number</h2>
                    <input
                        className="input"
                        name="alt_mobile"
                        type="tel"
                    />
                </div>

                <div className="coll1">
                    <h2 style={{ marginTop: "3%" }}>
                        Pan Number<span style={{ color: "red" }}>*</span>
                    </h2>
                    <input
                        className="input"
                        name="pan_no"
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
                    />
                </div>
            </div>


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
                            className="gstinput"
                            name="gst"
                        />
                    </div>
                </div>
            </div>


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
                    required
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
                        required
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
                        required
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
                        required
                    />
                </div>
            </div>


            <hr />
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
