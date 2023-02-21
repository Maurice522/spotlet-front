import React, { useState, useEffect } from "react";
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
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/getBlogs").then((response) => {
      const data2 = response.data;
      setData(data2);
      console.log(data2);
    });
  }, [setData]);
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
          <div className="message myMessage " style={{ color: "#ea4235" }}>
            BLOGS
          </div>
        </div>

        <div class="Blog_container">
          {data.map((e) => (
            <>
              <div class="Blog_container_div">
                <Link
                  to={{
                    pathname: "/blog/" + e.id,
                  }}
                >
                  <div className="Blog_containerImage">
                    <img
                      src={e.image?e.image:image1}
                      alt="background"
                      className="blog_image "
                      onClick={() => readMore(e)}
                    />
                  </div>
                  <h3
                    className="blog_heading"
                    style={{ color: "black" }}
                    onClick={() => readMore(e)}
                  >
                    {e.title}
                  </h3>
                  <p className="blog_heading" style={{ color: "black" }}>
                    {e.subheading}
                  </p>
                  <p className="blog_heading" style={{ color: "black" }}>
                    {e.content}
                  </p>
                  <p className="blog_readMore" onClick={() => readMore(e)}>
                    Read More ...
                  </p>
                </Link>
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
