import React, { useState } from "react";
import "../Assets/Styles/host.css";
import "../Assets/Styles/photography.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import image from "../Assets/Images/photography_img2.jpeg";
import image1 from "../Assets/Images/photography_subImg1.jpeg";
import image2 from "../Assets/Images/photography_subImg2.jpeg";
import Navbar from "../Components/Navbar";
import { MdExpandMore, MdDone } from "react-icons/md";
import Footer from "../Components/Footer";
const Photography = () => {
    const [open,setOpen]=useState(false);
    const clicked=()=>{
        setOpen(!open);
    }
    const accordion = [
		{
			title: "Who can be a Gorecce Host?",
			info: "lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "How do I get paid?",
			info: "lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "How does Gorecce makes money?",
			info: "lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "How to get more clients?",
			info: " lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "What is in it for you?",
			info: " lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
	];
  return (

    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="message myMessage ">          
					Professional Photography
                    <p className="subtextBanner">Providing high-quality photography makes that simple!llicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.</p> 
				</div>
			</div>

        <div className="container1">
            <div className="leftContainer1">
                <div className="contentLeftContainer">
                    <h1>Maximize your Earnings</h1>
                    <p className="contentLeftContainerSubtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p </p>
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
                    <h1>Preparing Your Space</h1>
                    <p className="contentRightContainerSubtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p </p>
                </div>
            </div>
		</div>

       
        <div className="faqSection">
        <h1 className="faqHead">Frequently Asked Questions</h1>
        <div
					style={{
						width: "80%",
						margin: "30px auto",
					}}>
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
								id="panel1a-header">
								{item.title}
							</AccordionSummary>
							<AccordionDetails
								sx={{
									fontFamily: "Inter",
									fontStyle: "normal",
									fontWeight: "400",
									lineHeight:"24px",
									fontSize: "16px",
									paddingTop: "20px",
                                    textAlign:"left",
								}}>
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







 {/* <div className="faqSection">
            <h1 className="faqHead">Frequently Asked Questions</h1>
            <div className="faqContent">

                <h2 className="faqQuestion">Can I Keep the photos?{<MdExpandMore size="31px" color="black" className="dropDownArrow" onClick={()=>clicked()}/>}</h2>
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
        </div> */}