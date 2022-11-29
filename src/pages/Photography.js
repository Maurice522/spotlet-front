import React, { useState } from "react";
import "../Assets/Styles/host.css";
import "../Assets/Styles/photography.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import image from "../Assets/Images/photography_img2.jpeg";
import image1 from "../Assets/Images/photography_subImg1.jpeg";
import image2 from "../Assets/Images/photography_subImg2.jpeg";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form";

import { MdExpandMore, MdDone } from "react-icons/md";
import Footer from "../Components/Footer";
const Photography = () => {
  const [open, setOpen] = useState(false);
  const clicked = () => {
    setOpen(!open);
  };
  const accordion = [
    {
      title: "Is my property eligible for a photo shoot with SpotLet?",
      info: "Currently, we are offering photography services to all our clients who list with us. So no matter where you’re located, we can arrange a photographer and ensure that your property listing has the best photos for maximum booking opportunities.",
    },
    {
      title: "Can I save the photos from the photoshoot?",
      info: "Of course, it is your property, and we would love for you to use these pictures to promote as much as possible. We will give you high-quality photos that will be watermarked with the SpotLet logo. If you want, you can purchase the non-watermarked images as well. You can talk to our photography team for further details.",
    },
    {
      title: "What all will be photographed?",
      info: "The more pictures are available on your listing, the higher your chances of getting more bookings. We photograph all the spaces around your property – rooms, kitchen, living,resort outdoors, pool, dining areas and more. Our photographers will take pictures of every space we feel our customers would like to see before confirming the booking. We will inform you in advance of the images we will be taking so that you can prepare your property accordingly.",
    },
    {
      title: "What are the Charges for the Photoshoot?",
      info: " We can give you the most affordable photography rates depending on your property and the package you choose. We aim to help you get more bookings and make your listing as attractive as possible. Contact us for a customised quote today.",
    },
    {
      title: "What is in it for you?",
      info: " lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
    },
  ];

  const labels = ["Name", "Email", "Phone Number", "Address"];
  return (
    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="text-on-image-container">
          <img src={image} alt="background" className="bg-image darken" />
          <div className="message myMessage ">
            Professional Photography
            <p className="subtextBanner">
              Showcase your Property in the best light and earn the spotlight
              with our exclusive and cost-effective photography services.
            </p>
          </div>
        </div>

        <div className="container1">
          <div className="leftContainer1">
            <div className="contentLeftContainer">
              <h1>Capturing the Essence of your Spaces</h1>
              <p className="contentLeftContainerSubtext">
                Just like e-commerce is driven by exceptional photographs,
                getting more enquiries and bookings for your space is primarily
                driven by high-quality photos of your location. So if you want
                to boost sales for your area, we can offer photoshoots with
                professional photographers across the country.{" "}
              </p>
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

          <div className="leftContainer2">
            <div className="contentRightContainer">
              <h1>Preparing for Noteworthy Shoots</h1>
              <p className="contentRightContainerSubtext">
                Our photographers are highly skilled in clicking all kinds of
                properties and bringing out the best features of your space that
                will appeal to potential clients and maximise your earning
                potential. Here are a few valuable tips to make the most of your
                photography sessions:
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <Form
          labels={labels}
          heading="Leverage the Power of Professional Photos for your Listing."
        />

        <div className="faqSection">
          <h1 className="faqHead">Frequently Asked Questions</h1>
          <div
            style={{
              width: "80%",
              margin: "30px auto",
            }}
          >
            {accordion.map((item, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    padding: "10px",
                  }}
                  expandIcon={<MdExpandMore size="31px" color="black" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px",
                    fontSize: "16px",
                    paddingTop: "20px",
                    textAlign: "left",
                  }}
                >
                  {item.info}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Photography;

{
  /* <div className="faqSection">
	<h1 className="faqHead">Frequently Asked Questions</h1>
	<div className="faqContent">

		<h2 className="faqQuestion">Can I Keep the photos?{<MdExpandMore size="31px" color="black" className="dropDownArrow" onClick={() => clicked()} />}</h2>
		<p className="faqContentPAddClass">loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p</p>
		<hr></hr>

		<h2 className="faqQuestion ">What will be photographed?{<MdExpandMore size="31px" color="black" className="dropDownArrow" />}</h2>
		<p className="faqContentPAddClass">loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p</p>
		<hr></hr>

		<h2 className="faqQuestion">Is it actually free?{<MdExpandMore size="31px" color="black" className="dropDownArrow" />}</h2>
		<p className="faqContentPAddClass">loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p</p>
		<hr></hr>

		<h2 className="faqQuestion">How to get more clients?{<MdExpandMore size="31px" color="black" className="dropDownArrow" />}</h2>
		<p className="faqContentPAddClass">loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p</p>
		<hr></hr>

	</div>
</div>  */
}
