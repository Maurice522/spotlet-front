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

const Search = () => {
  const [propertyDetails, setPropertiesDetail] = useState([]);
  useEffect(() => {
    getAllLocations()
      .then()
      .then((res) => setPropertiesDetail(res.data.locations))
      .catch((err) => console.log(err));
  }, []);
  const propertyDetail3 = [
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img1,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "1",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img2,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "2",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img3,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "3",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img4,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "4",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img5,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "5",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img6,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "1",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img1,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "2",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img2,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "3",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img3,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "4",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img4,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "5",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img5,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "1",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img6,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "2",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img1,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "3",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img2,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "4",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img3,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "5",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img4,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "1",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img5,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "2",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img6,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "3",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img5,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "4",
    },
    {
      icon: <GiFilmProjector size="24px" color="black" />,
      reviewCount: 40,
      image: img6,
      name: "Name of Property",
      location: "Location of Property",
      price: "Price",
      rating: "5",
    },
  ];

  const [fav, setFav] = useState([]);

  return (
    <div>
      <Navbar extraNavId="id-2" />
      <div className="below-nav">
        <FormFilter fullScreen={true} />
      </div>

      <div className="search-heading">
        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
        tempor occaecat cupidatat”
      </div>

      <div className="search-property-list">
        {console.log(propertyDetails)}
        {propertyDetails.map((item, index) => (
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
        ))}
      </div>

      <div
        style={{
          margin: "10px auto",
          width: "fit-content",
        }}
      >
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>

      <Host
        title="Get in buisness with GoRecce"
        buttonContent="Become a Host"
      />

      <Footer />
    </div>
  );
};

export default Search;
