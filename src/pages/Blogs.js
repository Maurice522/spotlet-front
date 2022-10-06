import React, { useState, useEffect } from "react";
import "../Assets/Styles/blogs.css";
import image from "../Assets/Images/blogs.png";
import FormFilter from "../Components/Home/FormFilter";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
// import { MdExpandMore, MdDone } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Blogs = () => {
    const readMore = (e) => {
        console.log(e.id);
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/getBlogs")
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

                <FormFilter />

                <div class="container">
                    {data.map((e) => (
                        <>
                            <div class="Div1">
                                <div class="resourceContent">
                                    <img src={image1} alt="background" className="resoourceImg " />
                                    <h3>{e.title}</h3>
                                    <p>{e.content}</p>
                                    <Link to={{pathname:"/blogs/blog",state:{id:e.id}}}>
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
