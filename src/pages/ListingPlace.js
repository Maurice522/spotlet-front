import React, { useState } from "react";
import "../Assets/Styles/ListingPlace.css";
import Details from "../Components/Listing/Details";
import Location from "../Components/Listing/Location";
import Amenities from "../Components/Listing/Amenities";
import Navbar from "../Components/Navbar";
import Photo from "../Components/Listing/Photo";
import Features from "../Components/Listing/Features";
import Dondont from "../Components/Listing/Dondont";
import Pricing from "../Components/Listing/Pricing";
import Rules from "../Components/Listing/Rules";
import Timings from "../Components/Listing/Timing";
import Contact from "../Components/Listing/Contact";
import Gst from '../Components/Listing/Gst';
import TermCondition from "../Components/Listing/Term&Condition";
import { useSelector } from "react-redux";
import { selectLocationData } from "../redux/slices/locationSlice";

const ListingPlace = () => {
  const [section, showSection] = useState("Details & Description");
  const data = useSelector(selectLocationData);
  const handlesection = (e) => {
    showSection(e);
  };

  return (
    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="host">
          <nav className={"lnav-menu"}>
            <div className="lnav-menu-items">
              <div>
                <button
                  onClick={() => handlesection("Details & Description")}
                  className={
                    section === "Details & Description"
                      ? "lnav-text sel"
                      : "lnav-text"
                  }
                >
                  Details & Description
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Location")}
                  disabled={data?.property_desc ? false : true}
                  className={
                    section === "Location" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Location
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Amenities")}
                  disabled={data?.property_address ? false : true}
                  className={
                    section === "Amenities" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Amenities
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Photo")}
                  disabled={data?.amenities ? false : true}
                  className={
                    section === "Photo" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Photo
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Features")}
                  disabled={data?.images ? false : true}
                  className={
                    section === "Features" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Features
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Do’s & Don’ts")}
                  disabled={data?.features ? false : true}
                  className={
                    section === "Do’s & Don’ts" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Do’s & Don’ts
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Pricing")}
                  disabled={data?.do_and_dont ? false : true}
                  className={
                    section === "Pricing" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Pricing
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Timings")}
                  disabled={data?.pricing ? false : true}
                  className={
                    section === "Timings" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Timings
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Rules of the Host")}
                  disabled={data?.timings ? false : true}
                  className={
                    section === "Rules of the Host"
                      ? "lnav-text sel"
                      : "lnav-text"
                  }
                >
                  Rules of the Host
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Contact Details")}
                  disabled={data?.rules ? false : true}
                  className={
                    section === "Contact Details"
                      ? "lnav-text sel"
                      : "lnav-text"
                  }
                >
                  Contact Details
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("GST Details")}
                  disabled={data?.contact_det ? false : true}
                  className={
                    section === "GST Details" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  GST Details
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlesection("Term & Condition")}
                  disabled={data?.gst ? false : true}
                  className={
                    section === "Term & Condition" ? "lnav-text sel" : "lnav-text"
                  }
                >
                  Term & Condition
                </button>
              </div>
            </div>
          </nav>
          <div>
            {section === "Details & Description" ? (<Details showSection = {handlesection} />) : "" }
            {section === "Location" ? <Location showSection = {handlesection}/> : ""}
            {section === "Amenities" ? <Amenities showSection = {handlesection} /> : ""}
            {section === "Photo" ? <Photo showSection = {handlesection} /> : ""}
            {section === "Features" ? <Features showSection = {handlesection} /> : ""}
            {section === "Do’s & Don’ts" ? <Dondont showSection = {handlesection} /> : ""}
            {section === "Pricing" ? <Pricing showSection = {handlesection} /> : ""}
            {section === "Rules of the Host" ? <Rules showSection = {handlesection} /> : ""}
            {section === "Timings" ? <Timings showSection = {handlesection} /> : ""}
            {section === "Contact Details" ? <Contact showSection = {handlesection} /> : ""}
            {section === "GST Details" ? <Gst showSection = {handlesection} /> : ""}
            {section === "Term & Condition" ? <TermCondition showSection = {handlesection} /> : ""}
            {/* </> */}
            {/* <Pricing/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPlace;
