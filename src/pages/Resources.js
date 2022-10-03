import React, { useState } from "react";
import "../Assets/Styles/resources.css";
import image from "../Assets/Images/resources.png";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
// import { MdExpandMore, MdDone } from "react-icons/md";

import Footer from "../Components/Footer";
const Resources = () => {
    return (
    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image " />
				<div className="message myMessage ">          
                RESOURCE CENTRE
				</div>
			</div>
        <div class="container">
            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg" />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p> Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
