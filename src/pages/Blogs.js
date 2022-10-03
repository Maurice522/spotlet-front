import React, { useState } from "react";
import "../Assets/Styles/blogs.css";
import image from "../Assets/Images/blogs.png";
import FormFilter from "../Components/Home/FormFilter";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
// import { MdExpandMore, MdDone } from "react-icons/md";

import Footer from "../Components/Footer";
const Blogs = () => {
    return (
    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image " />
				<div className="message myMessage ">          
                BLOGS
				</div>
		</div>

        <FormFilter />

        <div class="container">
            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

          
            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>


            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

            
            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>



            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>



            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>



            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>



            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>



            <div class="Div1">
                <div class="resourceContent">
                <img src={image1} alt="background" className="resoourceImg " />
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri  </p>
                <p className="readmore">Read More ...</p>
                </div>
            </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;
