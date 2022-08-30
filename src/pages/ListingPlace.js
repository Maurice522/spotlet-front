import React, { useState } from 'react'
import "../Assets/Styles/ListingPlace.css"
import Details from '../Components/Listing/Details';
import Location from '../Components/Listing/Location';
import Amenities from '../Components/Listing/Amenities';
import Navbar from "../Components/Navbar";
import Photo from '../Components/Listing/Photo';



const ListingPlace = () => {
    const [section, showSection] = useState("Details & Description");
    const handlesection = () => {

    }

    return (<>
        <div>
            <Navbar extraNavId={"id-2"} />
            <div className='host'>
            <nav className={"lnav-menu"}>
                <div className="lnav-menu-items">
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Details & Description" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Details & Description
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Security")}
                            className={
                                section === "Location" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Location
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Payments")}
                            className={
                                section === "Amenities" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Amenities
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Photo" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Photo 
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Features" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Features
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Do’s & Don’ts" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Do’s & Don’ts
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Pricing" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Pricing
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Timings" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Timings
                        </button>

                    </div>
                    <div>
                        <button
                            onClick={() => handlesection("Profile")}
                            className={
                                section === "Rules of the Host" ? "lnav-text sel" : "lnav-text"
                            }
                        >
                            Rules of the Host
                        </button>
                    </div>
                </div>
            </nav>
            <div>
            {/* <Details/> */}
            {/* <Location/> */}
            <Amenities/>
            {/* <Photo/> */}
            </div>
            
            </div>
        </div>
    </>

    )
}

export default ListingPlace