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
  selectUser_id,
  updateUser,
} from "../redux/slices/userSlice";
import { updatePassword, updateUserInfo } from "../services/api";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const AccountInfo = (extraNavId) => {
  const [section, showSection] = useState("Profile");
  const { personalInfo } = useSelector(selectUserData);
  const user_id = useSelector(selectUser_id);
  const dispatch = useDispatch();
  const handlesection = (e) => {
    showSection(e);
  };
  //for image
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();

  //user data update
  const [updateUserData, setUpdateUserData] = useState({
    firstName: personalInfo.fullName.split(" ").slice(0, -1).join(" "),
    lastName: personalInfo.fullName.split(" ").slice(1).join(" "),
    email: personalInfo.email,
    mobile: personalInfo.mobile,
    job: personalInfo.job,
    booking_type: personalInfo.booking_type,
    profile_pic: personalInfo.profile_pic,
  });

  //User Password update
  const [userCredential, setUserCredential] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleChange = (e) => {
    setUpdateUserData({ ...updateUserData, [e.target.name]: e.target.value });
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let updateData = {
      fullName: updateUserData.firstName + " " + updateUserData.lastName,
      email: updateUserData.email,
      mobile: updateUserData.mobile,
      job: updateUserData.job,
      booking_type: updateUserData.booking_type,
      profile_pic: preview ? preview : updateUserData.profile_pic,
    };
    dispatch(updateUser(updateData));

    const serverData = {
      updateData,
      preview, //image file
    };

    try {
      const response = await updateUserInfo(user_id, serverData);

      toast("Information Updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  //handle update passowrd
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (userCredential.newPassword !== userCredential.confirmNewPassword)
      toast.error("new password and confirm password are not same");
    try {
      const response = await updatePassword(user_id, userCredential);
      toast.success("password updated..");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
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
              <div>
                <button
                  onClick={() => handlesection("Payments")}
                  className={
                    section === "Payments" ? "nav-text sel" : "nav-text"
                  }
                >
                  Payments
                </button>

                <hr />
              </div>
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
                      selectedFile
                        ? preview
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
                      className="input"
                      type="text"
                      size="50"
                      name="firstName"
                      value={updateUserData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <h2>Last Name</h2>
                    <input
                      className="input"
                      type="text"
                      size="50"
                      name="lastName"
                      value={updateUserData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="r2">
                  <label>
                    <h2>Email</h2>
                    <input
                      className="input"
                      type="text"
                      size="50"
                      name="email"
                      value={updateUserData.email}
                      required
                    />
                  </label>
                  <label>
                    <h2>Phone No</h2>
                    <input
                      className="input"
                      type="text"
                      size="50"
                      name="mobile"
                      value={updateUserData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="r2">
                  <label>
                    <h2>Who Reserves</h2>
                    <input
                      className="input"
                      type="text"
                      size="50"
                      name="booking_type"
                      value={updateUserData.booking_type}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <h2>Company Name</h2>
                    <input
                      className="input"
                      type="text"
                      size="50"
                      name="job"
                      value={updateUserData.job}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="r2">
                  <button type="submit" className="accbut">
                    Apply Changes
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}

          {/* Security Section  */}
          {section === "Security" ? (
            <div className="profr">
              <form onSubmit={handleUpdatePassword}>
                <div className="r1">
                  <h1>Change Password</h1>
                </div>
                <div className="r2">
                  <label>
                    <h2>Current Password</h2>
                    <input
                      className="input"
                      type="password"
                      size="50"
                      onChange={(e) =>
                        setUserCredential({
                          ...userCredential,
                          currentPassword: e.target.value,
                        })
                      }
                      value={userCredential.currentPassword}
                    />
                  </label>
                </div>
                <div className="r2">
                  <label>
                    <h2>New Password</h2>
                    <input
                      className="input"
                      type="password"
                      size="50"
                      onChange={(e) =>
                        setUserCredential({
                          ...userCredential,
                          newPassword: e.target.value,
                        })
                      }
                      value={userCredential.newPassword}
                    />
                  </label>
                </div>
                <div className="r2">
                  <label>
                    <h2>Confirm Password</h2>
                    <input
                      className="input"
                      type="password"
                      size="50"
                      onChange={(e) =>
                        setUserCredential({
                          ...userCredential,
                          confirmNewPassword: e.target.value,
                        })
                      }
                      value={userCredential.confirmNewPassword}
                    />
                  </label>
                </div>
                <div className="r2">
                  <button type="submit" className="accbut">
                    Update Password
                  </button>
                </div>
              </form>
              <div className="r1de">
                Deactivate Your Account:
                <button className="accbut">Deactivate Account</button>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Payments Section  */}
          {section === "Payments" ? (
            <div className="profr">
              <h1>Payments</h1>
              <br />
              <Accordion>
                <AccordionSummary
                  sx={{ height: 100 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h1>Saved Cards</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 24 }}>
                          ICICI Credit Card
                        </Typography>
                        <Typography variant="h5" component="div">
                          **** **** **** 6666
                          <br />
                          Saket Mundra
                        </Typography>
                        <Typography>
                          <h2>CVV</h2>
                          <input
                            style={{ width: "100px", height: "28px" }}
                            type="text"
                          />
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button size="small" className="accbut">
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
                    <h1>Credit/Debit Cards</h1>
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
                        <div className="r2">
                          <label>
                            <h2>Card Number</h2>
                            <input className="input" type="text" size="50" />
                          </label>
                          <label>
                            <h2>Name on the Card</h2>
                            <input className="input" type="text" size="50" />
                          </label>
                        </div>
                        <div className="r2">
                          <label>
                            <h2>Valid Thru (MM/YY)</h2>
                            <input className="input" type="text" size="50" />
                          </label>
                          <label>
                            <h2>CVV</h2>
                            <input className="input" type="text" size="50" />
                          </label>
                        </div>
                        <div className="r2">
                          <button className="accbut">Pay Now</button>
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
                    <h1>UPI</h1>
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
                            <input className="input" type="text" size="50" />
                          </label>
                        </div>
                        <button className="accbut">Pay Now</button>
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
