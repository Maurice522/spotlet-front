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
import Gst from '../Components/Listing/Gst';




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
                        <div>
                            <button
                                onClick={() => handlesection("GST Details")}
                                className={
                                    section === "GST Details" ? "lnav-text sel" : "lnav-text"
                                }
                            >
                                GST Details
                            </button>
                        </div>
                    </div>
                </nav>
                <div>
                    {section === "Details & Description" ? <>
                        <Details setsection={section} />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Location")}>Continue</button>
                                </div>
                            </div>
                        </div></> : ""}
                    {section === "Location" ? <>
                        <Location />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Amenities")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}

                    {section === "Amenities" ? <><Amenities />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Photo")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Photo" ? <>
                        <Photo />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Features")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Features" ? <>
                        <Features />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Do’s & Don’ts")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Do’s & Don’ts" ? <>
                        <Dondont />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Pricing")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Pricing" ? <><Pricing />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Timings")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Timings" ? <>
                        <Rules />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Rules of the Host")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Rules of the Host" ? <>
                        <Timings />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("Contact Details")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "Contact Details" ? <>
                        <Contact />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue' onClick={() => showSection("GST Details")}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                    {section === "GST Details" ? <><Gst />
                        <div className="continue1">
                            <div className='row1'>
                                <div className='coll1'>
                                    <button className='continue'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </> : ""}
                </div>



            </div>
        </div>
    </>

    )
}

export default ListingPlace