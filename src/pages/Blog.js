import React, { useState, useEffect } from "react";
import "../Assets/Styles/photography.css";
import image from "../Assets/Images/photographyMainImage.png";
import Navbar from "../Components/Navbar";
import { MdExpandMore, MdDone } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import avatar from "../Assets/Images/testimonial-image-1.jpeg";
import Footer from "../Components/Footer";
import { Avatar, Button, TextField } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { getBlog } from "../services/api";

const Blog = () => {
  const { blogid } = useParams();
  const [blog, setblog] = useState({});
  let { state } = useLocation();


  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  let userComment = "";
  const clicked = () => {
    setOpen(!open);
  };

  const [commentData, setCommentData] = useState([
    {
      name: "John Doe",
      comment: "This is a comment",
      avatar: avatar,
    },
  ]);

  return (
    <>
      <div>
        <Navbar extraNavId={"id-2"} />
        <div className="text-on-image-container">
          {state!=null?
          <img src={state.image} alt="background" className="bg-image darken" />:
          <img src={image} alt="background" className="bg-image darken" />}
          
        </div>
        {state!=null &&
        <div className="singleBlogContent" style={{ width: "75%" }}>
        <h1 style={{ fontWeight: 600, fontSize: "24px" }}>{state.title}</h1>
        <br></br>
        <p>{state.content}</p>
        </div>
        }

        <Footer />
      </div>
    </>
  );
};

export default Blog;
