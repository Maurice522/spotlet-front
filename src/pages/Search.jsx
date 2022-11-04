import React, { useState, useEffect } from "react";
import { GiFilmProjector } from "react-icons/gi";
import FormFilter from "../Components/Home/FormFilter";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyInfo from "../Components/PropertyInfo";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import img4 from "../Assets/Images/property-4.jpeg";
import img5 from "../Assets/Images/property-5.jpeg";
import img6 from "../Assets/Images/property-6.jpeg";
import "../Assets/Styles/Search/search.css";
import Host from "../Components/Home/Host";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { getAllLocations } from "../services/api";
import { useParams, useLocation } from "react-router-dom";

const Search = () => {
    const { type } = useParams();
    const [propertyDetails, setPropertiesDetail] = useState([]);
    useEffect(() => {
        const getAllLocations = async () => {
            const response = await axios.get(
                "https://nipunbacky.herokuapp.com/getlocations"
            );

            const res = response.data;
            const result = res.locations;
            console.log(result[0].pricing.corporate.isPresent);
            console.log(result[0].pricing.film_webseries_ad.isPresent);
            console.log(result[0].pricing.individual.isPresent);
            console.log(result[0].pricing.tv_series_other.isPresent);
            setPropertiesDetail(result);
        };
        getAllLocations();

    }, []);

    const [fav, setFav] = useState([]);



    return (

        <>
            <Navbar extraNavId="id-2" />
            <div className="below-nav">
                <FormFilter fullScreen={true} />
            </div>
            <div className="search-heading">All Locations</div>

            <div className="search-property-list">
                {propertyDetails.map((item, index) => {
                    {
                        /* console.log(item.pricing.film_webseries_ad) */
                    }
                    if (type == 0) {
                        return (
                            <PropertyInfo
                                item={item}
                                index={index}
                                isFav={false}
                                favPage={true}
                                key={index}
                                handleClick={() => {
                                    console.log("clicked");
                                }}
                                border={false}
                            />
                        );
                    }
                    else if (type == 1 && item.pricing.film_webseries_ad.isPresent == true) {
                        return (
                            <PropertyInfo
                                item={item}
                                index={index}
                                isFav={false}
                                favPage={true}
                                key={index}
                                handleClick={() => {
                                    console.log("clicked");
                                }}
                                border={false}
                            />
                        );
                    } else if (type == 2 && item.pricing.corporate.isPresent == true) {
                        return (
                            <PropertyInfo
                                item={item}
                                index={index}
                                isFav={false}
                                favPage={true}
                                key={index}
                                handleClick={() => {
                                    console.log("clicked");
                                }}
                                border={false}
                            />
                        );
                    } else if (type == 3 && item.pricing.individual.isPresent == true) {
                        return (
                            <PropertyInfo
                                item={item}
                                index={index}
                                isFav={false}
                                favPage={true}
                                key={index}
                                handleClick={() => {
                                    console.log("clicked");
                                }}
                                border={false}
                            />
                        );
                    }
                })}
            </div>
            {/* <Host
title="Get in buisness with GoRecce"
buttonContent="Become a Host"
/> */}
            <Footer />
        </>
    );
};

export default Search;
