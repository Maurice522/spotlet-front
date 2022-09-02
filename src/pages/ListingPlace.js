import React, { useState } from 'react'
import "../Assets/Styles/ListingPlace.css"
import Details from '../Components/Listing/Details';
import Location from '../Components/Listing/Location';
import Amenities from '../Components/Listing/Amenities';
import Navbar from "../Components/Navbar";
import Photo from '../Components/Listing/Photo';
import Features from '../Components/Listing/Features';
import Dondont from '../Components/Listing/Dondont';
import Pricing from '../Components/Listing/Pricing';
import Rules from '../Components/Listing/Rules';
import Timings from '../Components/Listing/Timing';
import Contact from '../Components/Listing/Contact';



const ListingPlace = () => {
    const [section, showSection] = useState("Details & Description");
    const handlesection = (e) => {
    showSection(e);
    }

    return (<>
        <div>
            <Navbar extraNavId={"id-2"} />
            <div className='host'>
            <nav className={"lnav-menu"}>
                <div className="lnav-menu-items">
                    <div>
                        <button
                            onClick={() => handlesection("Details & Description")}
                            className={
                                section === "Details & Description" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Details & Description
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Location")}
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
                            className={
                                section === "Rules of the Host" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Rules of the Host
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Contact Details")}
                            className={
                                section === "Contact Details" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Contact Details
                        </button>
                    </div>
                    
                </div>
            </nav>
            <div>
            {section==="Details & Description"?<Details section={"Details & Description"}/>:""}
            {section==="Location"?<Location/>:""}
            {section==="Amenities"?<Amenities/>:""}
            {section==="Photo"?<Photo/>:""}
            {section==="Features"?<Features/>:""}
            {section==="Do’s & Don’ts"?<Dondont/>:""}
            {section==="Pricing"?<Pricing/>:""}
            {section==="Rules of the Host"?<Rules/>:""}
            {section==="Timings"?<Timings/>:""}
            {section==="Contact Details"?<Contact/>:""}
            {/* </> */}
            {/* </> */}
            {/* <Pricing/> */}
            </div>
            
            </div>
        </div>
    </>

    )
}

export default ListingPlace