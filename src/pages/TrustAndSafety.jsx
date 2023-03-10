import React from "react";
import image from "../Assets/Images/trustandSafety_img2.jpeg";
import Navbar from "../Components/Navbar";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import image2 from "../Assets/Images/PhotographyImg2.png";
import TAS_Cards from "../Components/TAS_Cards";
import Footer from "../Components/Footer";
import "../Assets/Styles/photography.css";
import "../Assets/Styles/trustAndSafety.css";

import { Button } from "@mui/material";
import { ImWarning } from "react-icons/im";
import { BsShield } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { FiUmbrella } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";

const TrustAndSafety = () => {
  const elements = [
    {
      icon: <ImWarning size="1.5rem" />,
      title: "Risk Management",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <BsShield size="1.5rem" />,
      title: "Identity Verification",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <BsClipboard size="1.5rem" />,
      title: "Rights to List",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <FiUmbrella size="1.5rem" />,
      title: "Liability Insurance",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <AiOutlineLock size="1.5rem" />,
      title: "Protected Payments",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <AiOutlineStar size="1.5rem" />,
      title: "Real Reviews",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <AiOutlineEye size="1.5rem" />,
      title: "Fraud Protection",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
    {
      icon: <FiKey size="1.5rem" />,
      title: "Additional Safety",
      info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
    },
  ];

  return (
    <div>
      <Navbar extraNavId={"id-2"} />
      <div className="text-on-image-container">
        <img src={image} alt="background" className="bg-image darken" />
        <div className="message myMessage ">
          Trust and Safety
          <p className="subtextBanner">
            Peerspace brings people together, not only online, but face-to-face.
            We???re committed to the safety of our hosts and guests. We believe a
            safe transacting marketplace builds trust between hosts, guests, and
            our platform.
          </p>
        </div>
      </div>
      <div className="container">
        <h3>Trust and Safety with you in mind</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin hendrerit nisi sed sollicitudin pellentesque.
          Nunc posuere purus rhoncus pulvinar aliquam.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
          pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Nunc
          posuere purus rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
          pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.{" "}
        </div>
      </div>

      <div
        className="trust_safe_container"
        style={{
          marginTop: "6%",
        }}
      >
        {elements.map((item, ind) => (
          <TAS_Cards data={item} key={ind} />
        ))}
      </div>

      {/* <div className="container1">
				<div className="leftContainer1">
					<div className="contentLeftContainer">
						<h1>Safe Social Event</h1>
						<p className="contentLeftContainerSubtext">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
							Nunc p{" "}
						</p>
						<Button
							variant="outlined"
							sx={{
								borderColor: "#ff6767",
								color: "#ff6767",
								marginTop: "1rem",
								marginBottom: "2rem",
								padding: "10px 20px",
							}}>
							Learn More
						</Button>
					</div>
				</div>

				<div className="rightContainer1">
					<div className="colouredbg">
						<img src={image1} alt="background" className="container1Img" />
					</div>
				</div>
			</div>

			<div className="container2">
				<div className="rightContainer2">
					<div className="colouredbg">
						<img src={image2} alt="background" className="container1Img" />
					</div>
				</div>

				<div className="rightContainer2">
					<div className="contentRightContainer">
						<h1>COVID 19 Health and Safety Measures</h1>
						<p className="contentRightContainerSubtext">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
							Nunc p{" "}
						</p>
					</div>
				</div>
			</div>

			<div className="container1">
				<div className="leftContainer1">
					<div className="contentLeftContainer">
						<h1>Safe Social Event</h1>
						<p className="contentLeftContainerSubtext">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
							Nunc p{" "}
						</p>
						<Button
							variant="outlined"
							sx={{
								borderColor: "#ff6767",
								color: "#ff6767",
								marginTop: "1rem",
								marginBottom: "2rem",
								padding: "10px 20px",
							}}>
							Learn More
						</Button>
					</div>
				</div>

				<div className="rightContainer1">
					<div className="colouredbg">
						<img src={image1} alt="background" className="container1Img" />
					</div>
				</div>
			</div> */}

      <div
        className="container"
        style={{
          marginTop: "100px",
        }}
      >
        <div className="careerPage_article1">
          <div className="careerPage_article_info">
            <div className="career_heading">
              We connect people with unique spaces
            </div>
            <div className="career_Info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
              Nunc posuere purus rhoncus pulvinar aliquam.{" "}
            </div>
            <Link to="/">
              <Button
                variant="outlined"
                // className="buttonHover1"
                sx={{
                  borderColor: "#EA4235",
                  color: "white",
                  padding: "12px 24px",
                  background: "#EA4235",
                  //   width: "100%",
                  "&:hover": {
                    color: "#000",
                    background: "#fff",
                    borderColor: "#EA4235",
                  },
                }}
              >
                Find a space
              </Button>
            </Link>
          </div>

          <div className="CareerPage_image_main">
            <div
              //   style={{
              //     position: "relative",
              //     top: "0%",
              //     left: "26%",
              //     width: "340px",
              //     height: "340px",
              //     backgroundColor: "#ff6767",
              //   }}
              className="CareerPage_image_red"
            >
              <div
                // style={{
                //   position: "absolute",
                //   top: "-40px",
                //   left: "-40px",
                //   width: "340px",
                //   height: "340px",
                //   backgroundColor: "#d9d9d9",
                // }}
                className="CareerPage_image"
              >
                <img src={image1} alt="background" className="container-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: "120px",
        }}
      >
        <div className=" careerPage_article1 careerPage_article2">
          <div className="CareerPage_image_main order_image ">
            <div
              className="CareerPage_image_red"
              //   style={{
              //     position: "relative",
              //     top: "0%",
              //     left: "10%",
              //     width: "340px",
              //     height: "340px",
              //     backgroundColor: "#ff6767",
              //   }}
            >
              <div
                className="CareerPage_image"

                // style={{
                //   position: "absolute",
                //   top: "-35px",
                //   left: "-32px",
                //   width: "340px",
                //   height: "340px",
                //   backgroundColor: "#d9d9d9",
                // }}
              >
                <img src={image2} alt="background" className="container-img" />
              </div>
            </div>
          </div>
          <div className="careerPage_article_info">
            <div className="career_heading">
              We connect people with unique spaces
            </div>
            <div className="career_Info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
              Nunc posuere purus rhoncus pulvinar aliquam.{" "}
            </div>
            <Link to="/host">
              <Button
                // className="buttonHover"
                sx={{
                  borderColor: "#EA4235",

                  padding: "12px 24px",
                  color: "#000",
                  //   background: "#EA4235",
                  //   width: "100%",
                  "&:hover": {
                    color: "#fff",
                    background: "#EA4235",
                    borderColor: "#EA4235",
                  },
                }}
                variant="outlined"
                // sx={{
                //   marginTop: "30px",
                //   borderColor: "#ff6767",
                //   color: "black",
                //   background: "white",

                //   fontSize: "14px",
                //   fontFamily: "Rubik",
                //   fontWeight: "600",
                //   padding: "6px 12px",
                // }}
              >
                List a space
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: "100px",
        }}
      >
        <div className="careerPage_article1">
          <div className="careerPage_article_info">
            <div className="career_heading">
              We connect people with unique spaces
            </div>
            <div className="career_Info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
              Nunc posuere purus rhoncus pulvinar aliquam.{" "}
            </div>
            <Link to="/helpcenter">
              <Button
                // className="buttonHover1"
                variant="outlined"
                sx={{
                  borderColor: "#EA4235",
                  color: "white",
                  padding: "12px 24px",
                  background: "#EA4235",
                  //   width: "100%",
                  "&:hover": {
                    color: "#000",
                    background: "#fff",
                    borderColor: "#EA4235",
                  },
                }}
                // sx={{
                //   marginTop: "30px",
                //   borderColor: "#ff6767",
                //   color: "white",
                //   background: "#ff6767",

                //   fontSize: "14px",
                //   fontFamily: "Rubik",
                //   fontWeight: "600",
                //   padding: "6px 12px",
                // }}
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="CareerPage_image_main">
            <div
              className="CareerPage_image_red"

              //   style={{
              //     position: "relative",
              //     top: "0%",
              //     left: "26%",
              //     width: "340px",
              //     height: "340px",
              //     backgroundColor: "#ff6767",
              //   }}
            >
              <div
                className="CareerPage_image"
                // style={{
                //   position: "absolute",
                //   top: "-40px",
                //   left: "-40px",
                //   width: "340px",
                //   height: "340px",
                //   backgroundColor: "#d9d9d9",
                // }}
              >
                <img src={image1} alt="background" className="container-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: "4rem 0" }}></div>

      <Footer />
    </div>
  );
};

export default TrustAndSafety;
