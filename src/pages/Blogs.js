import React, { useState,useEffect } from "react";
import "../Assets/Styles/blogs.css";
import image from "../Assets/Images/blogs_img1.jpeg";
// import image from "../Assets/Images/blogs_img1.jpeg";
import FormFilter from "../Components/Home/FormFilter";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
// import { MdExpandMore, MdDone } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Pagination } from "@mui/material";


const Blogs = () => {
    const readMore = (e) => {
        console.log(e.id);
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://spotlet.onrender.com/getBlogs")
            .then((response) => {
                const data2 = response.data;
                setData(data2);
                console.log(data);
            })
    }, []);
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


                <div class="container">
                    {data.map((e) => (
                        <>
                            <div class="Div1">
                                <div class="resourceContent">
                                    
                                <Link 
                                to={{
                                    pathname:"/blog/"+e.id
                                }}>
                                    <img src={image1} alt="background" className="resoourceImg " onClick={() => readMore(e)}/>
                                    <h3 style={{color:"black"}} onClick={() => readMore(e)}>{e.title}</h3>
                                    <p style={{color:"black"}}>{e.content}</p>
                                        <p className="readmore" onClick={() => readMore(e)}>Read More ...</p>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ))}

                </div>

                <Footer />
            </div>
        </>
    );
};

export default Blogs;
