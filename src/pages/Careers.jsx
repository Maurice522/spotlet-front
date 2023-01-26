import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/Images/HelpCneter_img2.jpeg";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import image2 from "../Assets/Images/PhotographyImg2.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../Assets/Styles/careers.css";
const Careers = () => {
  return (
    <div>
      <Navbar extraNavId="id-2" />
      <div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="about-us-message bold">
					<div>Careers</div>
				</div>
			</div>
      <div className="career_page">
        <div className="careerPage_article1">
          <div className="careerPage_article_info">
            <div className="career_heading">Join Our Team</div>
            <div className="career_Info">
            We’re always looking for passionate and dedicated professionals to share the spotlight. As an online platform, we celebrate the intersection of technology and people and invite you to bring your creative ideas, intelligence and innovation to our fast-paced tech-enabled world.
            <br />
            If you’re ready to make a difference and impact society, we’re ready to welcome you on board.
            </div>

            <div className="careerPage_article_sub_info">
              <div className="careerPage_article_sub_info1">
                <div className="career_heading2">Our Environment</div>
                <div
                  style={{
                    marginTop: "15px",

                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  We offer a conducive learning environment for working professionals. You’ll interact with some of the most modern, dynamic, and experienced people while learning countless new skills and expertise on the job.{" "}
                </div>
              </div>
              <div className="careerPage_article_sub_info2">
                <div className="career_heading2">Our People</div>
                <div
                  style={{
                    marginTop: "15px",

                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  We’re building a future-ready organisation with ideators, thinkers, and leaders. At SpotLet, we nurture a warm, friendly, and open culture where you can ask questions, share opinions and make a genuine difference.{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="CareerPage_image_main">
            <div className="CareerPage_image_red">
              <div className="CareerPage_image">
                <img src={image1} alt="background" className="container-img" />
              </div>
            </div>
          </div>
        </div>

        {/* //second */}
        <div className="careerPage_article1 careerPage_article2  ">
          <div className="CareerPage_image_main order_image">
            <div className="CareerPage_image_red">
              <div className="CareerPage_image">
                <img src={image1} alt="background" className="container-img" />
              </div>
            </div>
          </div>
          <div className="careerPage_article_info">
            <div className="career_heading ">Why work with us</div>
            <div className="career_Info">
            If you’d like to grow in this unique space, we have a desk with your name on it! We love people who push boundaries, explore creative ideas, and think outside the box. If you can make spaces shine in the spotlight, we are ready to welcome you onboard.
            </div>

            <div className="careerPage_article_sub_info">
              <div className="careerPage_article_sub_info1">
                <div className="career_heading2">Our Passion</div>
                <div
                  style={{
                    marginTop: "15px",

                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  We work with passionate and dedicated individuals and believe that by training the team, we’re building a sustainable and reliable future for our clients, hosts, and guests.{" "}
                </div>
              </div>
              <div className="careerPage_article_sub_info2">
                <div className="career_heading2">Our Perks</div>
                <div
                  style={{
                    marginTop: "15px",

                    paddingRight: "30px",
                    lineHeight: "26px",
                    textAlign: "justify",
                  }}
                >
                  You can visit some of the finest properties in the city, learn from people that come from different walks of life, make friends for a lifetime, and enjoy pan-India and global success!{" "}
                </div>
              </div>
            </div>
            <div className="career_btn">
              <Link to="#">
                <Button
                  variant="outlined"
                  className="career_btn1"
                  sx={{
                    background: "#EA4235",
                    borderColor: "#EA4235",
                    color: "#fff",
                    padding: "12px 24px",
                    width: "100%",
                    "&:hover": {
                      borderColor: "#EA4235",
                      background: "#fff",
                      color: "#000",
                    },
                  }}
                >
                  Current Openings
                </Button>
              </Link>
              <Link to="#">
                <Button
                  variant="outlined"
                  className="career_btn2"
                  sx={{
                    borderColor: "#EA4235",
                    color: "black",
                    padding: "12px 24px",
                    width: "100%",
                    "&:hover": {
                      background: "#EA4235",
                      color: "#fff",
                      borderColor: "#EA4235",
                    },
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

        {/* <div className="content-with-image-2">
          <div>
            <div
              style={{
                position: "relative",
                top: "15%",
                left: "10%",
                width: "330px",
                height: "320px",
                backgroundColor: "#ff6767",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "-28px",
                  width: "330px",
                  height: "320px",
                  backgroundColor: "#d9d9d9",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <img src={image2} alt="background" className="container-img" />
              </div>
            </div>
          </div>
          <div>
            <div className="about-us-content-heading">Why work with us</div>
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
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
