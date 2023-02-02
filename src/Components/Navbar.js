import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHome,
} from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Avatar, Button, TextField } from "@mui/material";
import "../Assets/Styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { selectUserData, selectUser_id } from "../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { updateNotificationStatus } from "../services/api";
import { NotificationImportant, Notifications } from "@mui/icons-material";
import { BsFillBellFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaSearch, FaUserAlt } from "react-icons/fa";

const Navbar = ({ extraNavId }) => {
  const user = useSelector(selectUserData);
  const user_id = useSelector(selectUser_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    handleClose();
    localStorage.clear();
    window.location = "/";
  };

  const [flag, setFlag] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotification = async () => {
    try {
      await updateNotificationStatus({ user_id });
      window.location.reload(true);
      window.location = "/notifications";
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    // console.log(user);
    setNotifications(user?.notifications);
    setFlag(user?.notificationFlag);
    // console.log(notifications);
  }, [user]);

  // const [NotificationEl, setNotificationEl] = useState(null);
  // const clickHandler = (event) => {
  // 	setNotificationEl(event.currentTarget);
  // };
  // const closeHandler = () => {
  // 	setNotificationEl(null);
  // };
  const acntset = () => {
    handleClose();
    console.log("clicked");
    navigate("/account");
  };
  let firstName = user?.personalInfo?.fullName
    .split(" ")
    .slice(0, -1)
    .join(" ");
  let profilePic = user?.personalInfo?.profile_pic;
  return (
    <div className="nav" id={extraNavId}>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <div className="nav-logo">
          <img src={require(`../Assets/Images/logo.png`)} alt="logo" />
        </div>
      </Link>
      <div className={`nav-search ${extraNavId !== "" ? "blacken" : ""}`}>
        <AiOutlineSearch size="20px" />
        {/* <TextField
					label="Search"
					variant="standard"
					size="small"
					// className="nav-search-input"
				/> */}
        <input
          type="text"
          placeholder="Search"
          className={`nav-search-input ${extraNavId !== "" ? "blacken" : "whiten"
            }`}
        />
      </div>
      <div className="nav-items">
        {console.log(user)}
        {user?.personalInfo ? (
          <div
            style={{
              display: "flex",
              jusitfyContent: "space-around",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* <div onClick={Boolean(NotificationEl) === false ? clickHandler : closeHandler} style={{cursor: "pointer"}}>
							<div>Notifications</div>
						</div>
						<Menu
							id="simple-menu-nav"
							style={{ minWidth: "30%" }}
							anchorEl={NotificationEl}
							keepMounted
							open={Boolean(NotificationEl)}
							onClose={closeHandler}
							getContentAnchorEl={null}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ horizontal: "center" }}
						>
							{
								notifications?.map((notification) => (
									notification.admin ?
										(
											<MenuItem
												style={{
													cursor: "context-menu"
												}}
											>
												{notification?.content} - {notification.date}
											</MenuItem>
										) : (

											<MenuItem
												// component={Link}
												// to={notification?.link}
											>
												{notification?.content} - {notification.date}
											</MenuItem>
										)
								)
								)
							}
						</Menu> */}
            {/* {console.log(flag)} */}
            <a>
              <div
                onClick={handleNotification}
                style={{ cursor: "pointer", position: "relative" }}
              >
                Notifications
                {flag && (
                  <div
                    style={{
                      height: "12px",
                      width: "12px",
                      backgroundColor: "orange",
                      borderRadius: "100%",
                      position: "absolute",
                      top: "-10px",
                      right: "-5px",
                    }}
                  />
                )}
              </div>
            </a>
            <Link to="/messages" onClick={() => window.scrollTo(0, 0)}>
              <div>Messages</div>
            </Link>
            <Link
              to="/bookinglist/:booking"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div>Bookings</div>
            </Link>
            <Link to="/favorite" onClick={() => window.scrollTo(0, 0)}>
              <div>Favourites</div>
            </Link>
            <Link to="/listing" onClick={() => window.scrollTo(0, 0)}>
              <div>List Your Space</div>
            </Link>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={Boolean(anchorEl) === false ? handleClick : handleClose}
            >
              {profilePic ? (
                <img className="user-dp" src={profilePic} alt="profile" />
              ) : (
                <Avatar />
              )}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ horizontal: "center" }}
            >
              <MenuItem>Hi, {firstName}</MenuItem>
              <MenuItem onClick={acntset}>Account Settings</MenuItem>
              <MenuItem
                onClick={() => (window.location = "/bookinglist/:listing")}
              >
                Listings
              </MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              jusitfyContent: "space-around",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              onClick={() => {
                toast.error("Please sign in first");
                navigate("/signin");
              }}
            >
              List your Space
            </div>
            <Link to={"/signin"} state={{ isSignIn: true }}>
              Sign In
            </Link>
            <Link to={"/signin"} state={{ isSignIn: false }}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
      <div className="nav-items-resp">
        {user ? (
          <div>
            <Link to="/listing">
              <FaSearch size="15px" color="#ff6767" />
              <div>List Space</div>
            </Link>
            <Link to="/bookinglist/:booking">
              <BsFillBookmarkFill size="15px" color="#ff6767" />
              <div>Bookings</div>
            </Link>
            <Link to="/">
              <AiFillHome size="15px" color="#ff6767" />
              <div>Home</div>
            </Link>
            {/* <Link to="/favorite">
              <AiOutlineHeart size="15px" color="#ff6767" />
              <div>Favorites</div>
            </Link> */}
            <Link to="/notifications">
              <BsFillBellFill size="15px" color="#ff6767" />
              <div>Notifications</div>
            </Link>
            <button
              onClick={Boolean(anchorEl) === false ? handleClick : handleClose}
            >
              <FaUserAlt size="15px" color="#ff6767" />
              <div>Account</div>
            </button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ horizontal: "center" }}
            >
              <MenuItem>Hi, {firstName}</MenuItem>
              <MenuItem onClick={() => navigate("/bookinglist/:listing", true)}>
                Listings
              </MenuItem>
              <MenuItem onClick={() => navigate("/favorite", true)}>
                Favourites
              </MenuItem>
              <MenuItem onClick={() => navigate("/messages", true)}>
                Messages
              </MenuItem>
              <MenuItem onClick={acntset}>Account Settings</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="navbar_mobile">
            <div
              className="navbar_links"
              onClick={() => toast.error("Please sign in first")}
            >
              List Space
            </div>
            <Link
              className="navbar_links"
              to={"/signin"}
              state={{ isSignIn: true }}
            >
              Sign In
            </Link>
            <Link
              className="navbar_links"
              to={"/signin"}
              state={{ isSignIn: false }}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
