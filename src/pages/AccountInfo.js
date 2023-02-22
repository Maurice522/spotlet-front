import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Assets/Styles/accountsinfo.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserData,
  addUser,
  saveOTP,
  selectUser_id,
  updateUser,
} from "../redux/slices/userSlice";
import {
  deleteRequest,
  updatePassword,
  updateUserInfo,
  uploadPics,
  otpUpdateProfile,
} from "../services/api";
import { toast } from "react-toastify";
import { MenuItem, Select, Modal } from "@mui/material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { set } from "date-fns";
import OTPVerify from "./Auth/OTPVerify";

const AccountInfo = (extraNavId) => {
  const [section, showSection] = useState("Profile");
  const [openOTP, setOpenOTP] = useState(false);
  const handleOpenOTP = () => setOpenOTP(true);
  const handleCloseOTP = () => setOpenOTP(false);
  const [initialMobile, setInitialMobile] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);
  const [openDeact, setOpenDeact] = useState(false);
  const handleOpenDeact = () => setOpenDeact(true);
  const handleCloseDeact = () => setOpenDeact(false);
  const { personalInfo } = useSelector(selectUserData);
  const user_id = useSelector(selectUser_id);
  const dispatch = useDispatch();
  const handlesection = (e) => {
    showSection(e);
  };

  useEffect(() => {
    setInitialMobile(personalInfo.mobile);
  }, []);

  const [validLength, setValidLength] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [number, setNumber] = useState(false);
  const [valid, setValid] = useState(true);

  const checkPassword = () => {
    setValidLength(userCredential.newPassword.length >= 8 ? true : false);
    setUpperCase(
      userCredential.newPassword.toLowerCase() !== userCredential.newPassword
    );
    setLowerCase(
      userCredential.newPassword.toUpperCase() !== userCredential.newPassword
    );
    setSpecialChar(
      /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(userCredential.newPassword)
    );
    setNumber(/\d/.test(userCredential.newPassword));
  };

  const [show, setShow] = useState({
    showNewPassword: false,
    showConfirmNewPassword: false,
  });

  //for image
  const [selectedFile, setSelectedFile] = useState();

  //user data update
  const [updateUserData, setUpdateUserData] = useState({
    firstName: personalInfo?.fullName.split(" ").slice(0, -1).join(" "),
    lastName: personalInfo?.fullName.split(" ").slice(1).join(" "),
    email: personalInfo?.email,
    mobile: personalInfo?.mobile,
    [personalInfo?.booking_type === "corporate" ? "company" : "profession"]:
      personalInfo?.booking_type === "corporate"
        ? personalInfo?.company
        : personalInfo?.profession,
    booking_type: personalInfo?.booking_type,
    profile_pic: personalInfo?.profile_pic,
  });

  //User Password update
  const [userCredential, setUserCredential] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const getOTP = async (userData) => {
    try {
      const response = await otpUpdateProfile(userData);
      toast.success("OTP sent");
      dispatch(saveOTP(response.data.otp));
      dispatch(addUser(userData));
      handleOpenOTP();
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    setUpdateUserData({ ...updateUserData, [e.target.name]: e.target.value });
  };

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("pic", e.target.files[0]);
    try {
      const response = await uploadPics(formData);
      setUpdateUserData({ ...updateUserData, profile_pic: response.data.url });
      return toast.success(response.data.message);
    } catch (error) {
      return toast.error(error.response.data);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let updateData = {
      fullName: updateUserData.firstName + " " + updateUserData.lastName,
      email: updateUserData.email,
      mobile: updateUserData.mobile,
      booking_type: updateUserData.booking_type,
      [updateUserData.booking_type === "corporate" ? "company" : "profession"]:
        updateUserData.booking_type === "corporate"
          ? updateUserData.company
          : updateUserData.profession,
      profile_pic: updateUserData.profile_pic,
    };
    if (initialMobile != updateData.mobile) {
      if (updateData.mobile > 9999999999 || updateData.mobile < 999999999) {
        toast.error("Enter Valid Mobile Number");
        return;
      }
      await getOTP(updateData);
      return;
    }
    dispatch(updateUser(updateData));

    try {
      const response = await updateUserInfo(user_id, updateData);

      toast.success("Information Updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  //handle update passowrd
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
      checkPassword();
      console.log(!(validLength && upperCase && lowerCase && specialChar && number));
      if (!(validLength && upperCase && lowerCase && specialChar && number)) {
        setValid(false);
        return;
      }
      setValid(true);
      if (userCredential.newPassword !== userCredential.confirmNewPassword)
        toast.error("new password and confirm password are not same");
      try {
        const response = await updatePassword(user_id, userCredential);
        toast.success("password updated..");
      } catch (error) {
        // console.log(error);
        toast.error(error.response.data);
      }
      setOpenSuccess(true);
  };

  //Deactivate Account
  const handleDeactivate = async () => {
      try {
        const response = await deleteRequest(user_id);
        toast.success(response.data);
      } catch (error) {
        toast.error(error.response.data);
      }
  };
  return (
    <>
      <div className="accounts">
        <Navbar extraNavId={"id-2"} />
        <div className="profcomp">
          <nav className={"nav-menu active"}>
            <div className="nav-menu-items">
              <div>
                <button
                  onClick={() => handlesection("Profile")}
                  className={
                    section === "Profile" ? "nav-text sel" : "nav-text"
                  }
                >
                  Profile
                </button>

                <hr />
              </div>
              <div>
                <button
                  onClick={() => handlesection("Security")}
                  className={
                    section === "Security" ? "nav-text sel" : "nav-text"
                  }
                >
                  Security
                </button>

                <hr />
              </div>
              {/* <div>
                <button
                  onClick={() => handlesection("Payments")}
                  className={
                    section === "Payments" ? "nav-text sel" : "nav-text"
                  }
                >
                  Payments
                </button>

                <hr />
              </div> */}
            </div>
          </nav>
          {/* Profile Section  */}
          {section === "Profile" ? (
            <div className="profr">
              <form onSubmit={handleSubmit}>
                <div className="r1">
                  <img
                    className="accimg"
                    src={
                      updateUserData.profile_pic
                        ? updateUserData.profile_pic
                        : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1660161134~exp=1660161734~hmac=805a827742ed799bfe534923869c5a6c5766070dc2a0e06cb14de86ac6c73743"
                    }
                    alt="Avatar"
                    height="100px"
                    width="100px"
                  />
                  <b
                    className="accbut"
                    onClick={() => document.getElementById("getFile").click()}
                  >
                    Edit Photo
                  </b>
                  <input
                    accept="image/*"
                    type="file"
                    id="getFile"
                    style={{ display: "none" }}
                    onChange={onSelectFile}
                  />
                </div>
                <div className="r2">
                  <label>
                    <h2>First Name</h2>
                    <input
                      className="acc-input"
                      type="text"
                      size="50"
                      name="firstName"
                      value={updateUserData.firstName}
                      onChange={handleChange}
                      required
                      disabled
                    />
                  </label>
                  <label>
                    <h2>Last Name</h2>
                    <input
                      className="acc-input"
                      type="text"
                      size="50"
                      name="lastName"
                      value={updateUserData.lastName}
                      onChange={handleChange}
                      required
                      disabled
                    />
                  </label>
                </div>
                <div className="r2">
                  <label>
                    <h2>Email</h2>
                    <input
                      className="acc-input"
                      type="text"
                      size="50"
                      name="email"
                      value={updateUserData.email}
                      required
                      disabled
                    />
                  </label>
                  <label>
                    <h2>Phone No</h2>
                    <input
                      className="acc-input"
                      type="text"
                      size="50"
                      name="mobile"
                      value={updateUserData.mobile}
                      onChange={handleChange}
                      required
                      disabled
                    />
                  </label>
                </div>
                <div className="r2">
                  <label>
                    <h2>Booking as a</h2>
                    <Select
                      value={updateUserData.booking_type}
                      onChange={handleChange}
                      className="select-updt"
                      name="booking_type"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{ height: "2.8em" }}
                      required
                    >
                      <MenuItem value="individual">Individual</MenuItem>
                      <MenuItem value="corporate">Corporate</MenuItem>
                    </Select>
                  </label>
                  <label>
                    <h2>
                      {" "}
                      {updateUserData.booking_type === "corporate"
                        ? "Company Name"
                        : "Profession"}
                    </h2>
                    <input
                      className="acc-input"
                      type="text"
                      size="50"
                      name={
                        updateUserData.booking_type === "corporate"
                          ? "company"
                          : "profession"
                      }
                      value={
                        updateUserData.booking_type === "corporate"
                          ? updateUserData.company
                          : updateUserData.profession
                      }
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="r2">
                  <button type="submit" className="applyChangeAcc accbut">
                    Apply Changes
                  </button>
                </div>
              </form>
              <Modal open={openOTP} onClose={handleCloseOTP}>
                {/* {console.log(updateData)} */}
                <OTPVerify
                  sendOTP={getOTP}
                  isSignUp={false}
                  updateUserData={updateUserData}
                />
              </Modal>
            </div>
          ) : (
            ""
          )}

          {/* Security Section  */}
          {section === "Security" ? (
            <div className="profr">
              <form onSubmit={handleUpdatePassword}>
                <div className="r1 changePassword">
                  <h1>Change Password</h1>
                </div>
                <div className="r2 r2Password">
                  <label>
                    <h2>Current Password</h2>
                    <TextField
                      type={!show.showNewPassword ? "password" : "text"}
                      name="currentPassword"
                      onChange={(e) =>
                        setUserCredential({
                          ...userCredential,
                          currentPassword: e.target.value,
                        })
                      }
                      value={userCredential.currentPassword}
                      fullWidth
                      placeholder="Enter password"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShow({
                                  ...show,
                                  showNewPassword: !show.showNewPassword,
                                })
                              }
                              edge="end"
                            >
                              {!show.showNewPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </label>
                </div>
                <div className="r2 r2Password">
                  <label>
                    <h2>New Password</h2>
                    <TextField
                      type={!show.showNewPassword ? "password" : "text"}
                      name="confirmPassword"
                      onChange={(e) =>
                        setUserCredential({
                          ...userCredential,
                          newPassword: e.target.value,
                        })
                      }
                      value={userCredential.newPassword}
                      fullWidth
                      placeholder="Enter password"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShow({
                                  ...show,
                                  showNewPassword: !show.showNewPassword,
                                })
                              }
                              edge="end"
                            >
                              {!show.showNewPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </label>
                </div>
                <div className="r2 r2Password">
                  <label>
                    <h2>Confirm Password</h2>
                    <TextField
                      type={!show.showNewPassword ? "password" : "text"}
                      name="confirmPassword"
                      onChange={(e) =>
                        setUserCredential({
                          ...userCredential,
                          confirmNewPassword: e.target.value,
                        })
                      }
                      value={userCredential.confirmNewPassword}
                      fullWidth
                      placeholder="Enter password"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShow({
                                  ...show,
                                  showNewPassword: !show.showNewPassword,
                                })
                              }
                              edge="end"
                            >
                              {!show.showNewPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </label>
                </div>
                <div className="r2 r2Password">
                  <button type="submit" className="accbut" onClick={() => setOpen(true)}>
                    Update Password
                  </button>
                </div>
                <Modal open={open} onClose={handleClose}>
                  <div className="listing-modal">
                    <h3>Do you really want to change your password?</h3>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Button
                        className="auth-btn"
                        onClick={(e) => {
                          handleUpdatePassword(e);
                          handleClose();
                        }}
                      >
                        Yes
                      </Button>
                      <Button
                        className="auth-btn"
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                </Modal>
                <Modal open={openSuccess} onClose={handleCloseSuccess}>
                  <div className="listing-modal">
                    <h3>Your Password has been updated!</h3>
                    <Button
                      className="auth-btn"
                      onClick={() => {
                        handleCloseSuccess();
                      }}
                    >
                      Ok
                    </Button>
                  </div>
                </Modal>
              </form>
              <div className="r1de r2Password deactivateAccount">
                Deactivate Your Account:
                <button
                  className="accbut deactivateBtn"
                  onClick={() => setOpenDeact(true)}
                >
                  Deactivate Account
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <Modal open={openDeact} onClose={handleCloseDeact}>
            <div className="listing-modal">
              <h3>Do you really want to Deactivate your account?</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button
                  className="auth-btn"
                  onClick={() => {
                    handleDeactivate();
                    handleCloseDeact();
                  }}
                >
                  Yes
                </Button>
                <Button
                  className="auth-btn"
                  onClick={() => {
                    handleCloseDeact();
                  }}
                >
                  No
                </Button>
              </div>
            </div>
          </Modal>

          {/* Payments Section  */}
          {section === "Payments" ? (
            <div className="profr">
              <h1 className="paymentH1">Payments</h1>
              <br />
              <Accordion>
                <AccordionSummary
                  sx={{ height: 100 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h1 className="cardsH1">Saved Cards</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 18 }}>
                          ICICI Credit Card
                        </Typography>
                        <Typography variant="h6" component="div">
                          **** **** **** 6666
                          <br />
                          Saket Mundra
                        </Typography>
                        <Typography>
                          <h2 style={{ marginTop: "2%", color: "#f26767" }}>
                            CVV
                          </h2>
                          <input
                            style={{ width: "100px", height: "28px" }}
                            type="text"
                          />
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button size="small" className="accbut paynowBtn">
                          Pay Now
                        </button>
                      </CardActions>
                    </Card>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ height: 100 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <h1 className="cardsH1">Credit/Debit Cards</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  <Typography>
                    <div className="accprofr">
                      <form>
                        <div className="r2">
                          <label>
                            <h2>Card Number</h2>
                            <input
                              className="acc-input"
                              type="text"
                              size="50"
                            />
                          </label>
                          <label>
                            <h2>Name on the Card</h2>
                            <input
                              className="acc-input"
                              type="text"
                              size="50"
                            />
                          </label>
                        </div>
                        <div className="r2">
                          <label>
                            <h2>Valid Thru (MM/YY)</h2>
                            <input
                              className="acc-input"
                              type="text"
                              size="50"
                            />
                          </label>
                          <label>
                            <h2>CVV</h2>
                            <input
                              className="acc-input"
                              type="text"
                              size="50"
                            />
                          </label>
                        </div>
                        <div className="r2 r2Password">
                          <button className="accbut paynowBtnCredit">
                            Pay Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ height: 100 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>
                    <h1 className="cardsH1">UPI</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                  }}
                >
                  <Typography>
                    <div className="accprofr">
                      <form>
                        <div style={{ marginBottom: "12px" }}>
                          <label>
                            <h2>UPI ID</h2>
                            <input
                              className="acc-input"
                              type="text"
                              size="50"
                            />
                          </label>
                        </div>
                        <button
                          className="accbut"
                          style={{ marginTop: "2%", width: " 200px" }}
                        >
                          Pay Now
                        </button>
                      </form>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
