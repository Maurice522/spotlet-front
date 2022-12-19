import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/resources.css";
import image from "../Assets/Images/resourceCenter_img2.jpeg";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
import { Pagination } from "@mui/material";
// import { MdExpandMore, MdDone } from "react-icons/md";

import Footer from "../Components/Footer";
const Resources = () => {
  const elements = [
    {
      id: 1,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
    {
      id: 2,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
    {
      id: 3,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
    {
      id: 4,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
    {
      id: 5,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
    {
      id: 6,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
    {
      id: 7,
      image: image1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
      linkText: "Read More ...",
    },
  ];
  return (
    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="text-on-image-container">
          <img src={image} alt="background" className="bg-image " />
          <div
            className="message myMessage"
            style={{
              color: "white",
            }}
          >
            RESOURCE CENTRE
          </div>
        </div>
        <h2 style={{width: "80%", margin: "auto", marginTop: "2rem"}}>We’re happy to share all the information you need to make your hosting or renting experience on SpotLet truly seamless. Please go through our blogs and let us know if you have any further questions.</h2>
        <div class="Blog_container">
          {elements.map((item, ind) => (
            <div class="Blog_container_div" key={ind}>
              <Link to={`/resource/${item.id}`}>
                <div className="Blog_containerImage">
                  <img
                    src={item.image}
                    alt="background"
                    className="blog_image "
                  />
                </div>
                <h3 className="blog_heading" style={{ color: "black" }}>
                  {item.title}
                </h3>
                <p className="blog_heading" style={{ color: "black" }}>
                  {item.info}
                </p>
                <p className="blog_readMore">{item.linkText}</p>
              </Link>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "fit-content",
            margin: "20px auto",
          }}
        >
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
