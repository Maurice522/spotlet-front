import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/Images/HelpCneter_img2.jpeg";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import image2 from "../Assets/Images/PhotographyImg2.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Careers = () => {
  let x = window.matchMedia("(max-width:576px)");
  return (
    <div>
      <Navbar extraNavId="id-2" />
      <div className="text-on-image-container">
        <img src={image} alt="background" className="bg-image darken" />
        <div className="about-us-message">
          <div>OUR MISSION</div>
          <br />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam.
          </div>
        </div>
      </div>
      <div className="about-us-content">
        <div className="content-with-image1">
          {x.matches && (
            <div className="image-box1-overlay">
              <div className="image-box">
                <img src={image1} alt="background" className="container-img" />
              </div>
            </div>
          )}
          <div>
            <div className="about-us-content-heading">Our Culture</div>
            <div className="about-us-content-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2rem",
                gap: "20px",
                flexDirection: x.matches ? "column" : "row",
              }}
            >
              <div>
                <h4>Our Environment</h4>
                <div
                  style={{
                    marginTop: "5px",
                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam.{" "}
                </div>
              </div>
              <div>
                <h4>Our People</h4>
                <div
                  style={{
                    marginTop: "5px",
                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam.{" "}
                </div>
              </div>
            </div>
          </div>

          {!x.matches && (
            <div>
              <div className="image-box1-overlay">
                <div className="image-box">
                  <img
                    src={image1}
                    alt="background"
                    className="container-img"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="content-with-image-2">
          <div className="image-box2-overlay">
            <div className="image-box" style={{ left: x.matches && "2px" }}>
              <img src={image2} alt="background" className="container-img" />
            </div>
          </div>
          <div style={{ padding: x.matches && "20px" }}>
            <div className="about-us-content-heading">Why work with us</div>
            <div
              className="about-us-content-info"
              style={{ marginLeft: x.matches && "-20px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2rem",
                width: x.matches && "120%",
              }}
            >
              <div>
                <h4>We've got you</h4>
                <div
                  style={{
                    marginTop: "5px",
                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam.{" "}
                </div>
              </div>
              <div>
                <h4>Our Perks</h4>
                <div
                  style={{
                    marginTop: "5px",
                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam.{" "}
                </div>
              </div>
            </div>
            <div className="about-us-btn-container" style={{ marginTop: "5%" }}>
              <Link to="#">
                <Button
                  variant="contained"
                  className="buttonHover1"
                  sx={{
                    backgroundColor: "#EA4235",
                    color: "white",
                    padding: "12px 24px",
                    width: "100%",
                  }}
                >
                  View Open Positions
                </Button>
              </Link>

              <Link to="#">
                <Button
                  variant="outlined"
                  className="buttonHover"
                  sx={{
                    borderColor: "#EA4235",
                    color: "black",
                    padding: "12px 24px",
                    width: "100%",
                  }}
                  onClick={() =>
                    (window.location = "mailto:noreply@spotlet.in")
                  }
                >
                  Send Your Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
