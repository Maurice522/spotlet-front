import {
  AccountBox,
  Apple,
  Call,
  Facebook,
  Google,
  LockOutlined,
  MailOutline,
  PermIdentity,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { otpVerify, signIn } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Assets/Styles/Auth.css";
import { useDispatch } from "react-redux";
import { addUser, saveOTP } from "../../redux/slices/userSlice";
import OTPVerify from "./OTPVerify";
import ForgotPassword from "./ForgotPassword";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';


import image1 from "../../Assets/Images/signupinBg.jpeg";
export default function Auth() {

  const state = useLocation();
  // console.log(state);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(
    state.state ? state.state.isSignIn : true
  );
  const [openOTP, setOpenOTP] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenOTP = () => setOpenOTP(true);
  const handleCloseOTP = () => setOpenOTP(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fullName, setFullName] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [checked, setChecked] = useState(false)
  const [present, setPresent] = useState(false)
  const [phnExists, setPhnExists] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    booking_type: "",
    profession: "",
    company: "",
    googleLogin: false,
  });

  var users=[
    {email:"vanshitadev10@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"prasad@xplorenew.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"nipun.walia2018@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"jaiprakash02082001@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"vanshita010@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"vijay.buddi@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"miwol55473@unicsite.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"pefoka9603@tohup.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"nipun@hilodesign.co",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"vanshitaworkacc10@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"sreenivaskap@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"nagesh2834@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"xajej31556@mustbeit.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"durggha@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"shrutika2009@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    {email:"sri2007.n@gmail.com",pass:"$2a$13$RQfgMoAeq957NM7SCs1i3OCxGsPVgrBJj08dYkaZNVEdFY.K/MNlu"},
    ];

  var phones = [
  {mobile:"8699888678"},
  {mobile:"9885641122"},
  {mobile:"9885673999"},
  {mobile:"8744961008"},
  {mobile:"9773539833"},
  {mobile:"8699888677"},
  {mobile:"08008333004"},
  {mobile:"09773539833"},
  {mobile:"9773539865"},
  {mobile:"8773539833"},
  {mobile:"9718115211"},
  {mobile:"8699888670"},
  {mobile:"9866003360"},
  {mobile:"9700021416"},
  {mobile:"9717906855"},
  {mobile:"9876543210"},
  {mobile:"9921651628"},
  {mobile:"8008333004"},
  ] ;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  },[]);


  const onSuccess = (res) => {
    console.log('success:', res);
    setUserEmail(res.profileObj.email)
    { !isSignIn && setFullName({ fname: res.profileObj.givenName, lname: res.profileObj.familyName }) }
    setUserData({ ...userData, googleLogin: true })
  };

  useEffect(() => {
    { isSignIn && setUserData({ ...userData, email: userEmail }) }
    { !isSignIn && setUserData({ ...userData, email: userEmail, firstName: fullName.fname, lastName: fullName.lname }) }
  }, [userEmail, fullName])
  // console.log(userData)
  // console.log(userData.googleLogin)
  // console.log(userData.email)


  const onFailure = (err) => {
    console.log('failed:', err);
  };

  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }



  const [validLength, setValidLength] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [valid, setValid] = useState(true);

  const checkPassword = () => {
    setValidLength(userData.password.length >= 8 ? true : false);
    setUpperCase(userData.password.toLowerCase() !== userData.password);
    setLowerCase(userData.password.toUpperCase() !== userData.password);
    setNumber(/\d/.test(userData.password));
    setSpecialChar(
      /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(userData.password)
    );
  };



  const dispatch = useDispatch();
  const navigate = useNavigate();


  //Handling All Input data function
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });    
  }

  useEffect(()=>{
    console.log("called")
    var notFound = 1;
    
      users.map((user,idx)=>{
        if(user.email==userData.email){
          console.log(user.email, userData.email)
          setPresent(true)
          notFound = 0;
        }
      })

      if(notFound==1){
        setPresent(false);

  
      }
  },[userData.email])

  useEffect(()=>{
    var notFound = 1;
        phones.map((phn,idx)=>{
          if(phn.mobile === userData.mobile){
            setPhnExists(true);
            notFound =0;
          }
        })
        if(notFound==1){
          setPhnExists(false);
        }
  },[userData.mobile])


  const getOTP = async (userData) => {
    if (checked) {
      try {
        const response = await otpVerify(userData);
        toast("OTP sent");
        dispatch(saveOTP(response?.data?.otp));
        handleOpenOTP();
        dispatch(addUser(userData));
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    }
    else {
      toast("Please accept our terms and conditions")
    }
  };


  useEffect(() => {
    checkPassword();
  }, [userData.password])


  //SignIn and SignUp function -
  const handleSubmit = async (e) => {
    !userData?.googleLogin && e.preventDefault();
    (!isSignIn && userData?.googleLogin) && e.preventDefault();
    // console.log(isSignIn, validLength, upperCase, lowerCase, specialChar);

    if (!isSignIn && !(validLength && upperCase && lowerCase && specialChar && number) )  {
      setValid(false);
      return;
    }
    setValid(true);
    
    if(!isSignIn && present){
      toast.error("User already exist!");
      console.log("user found")
      return;
    }

    if (isSignIn) {
      if(!present){
        toast.error("User does not exist!");
        console.log("no user found")
        return;
      }
      try {
        const { data } = await signIn(userData);
        if(data.error){
          toast.error(data.error?.response?.data?.error);
        }else{
          localStorage.setItem("token", data?.token);
          toast.success("Successful login");
          window.location = "/";
        }
      } catch (error) {
        //console.log(error.response.data);
        toast.error(error?.response?.data?.error);
      }
    } else {
      try {
        console.log("signing up");
        if (userData.password.length < 8)
          return toast.error("Password must contain atleast 8 characters");
        if (!isNumeric(userData.mobile) || userData.mobile.length !== 10)
          return toast.error("Invalid Mobile Number");
        
        
        console.log(phnExists);
        if(phnExists){
          toast.error("Mobile Number already exist");
          return ;
        }

        getOTP(userData);
      } catch (error) {
        toast.error(error?.response?.data);
      }
    }
  };

  useEffect(() => {
    if (userData?.googleLogin && userData?.email)
      handleSubmit();
  }, [userData.googleLogin, userData.email])


  return (
    <div
      className="singInMainDiv"
      style={{
        padding: "15%",
        paddingTop: "2%",
        paddingBottom: "1%",
        backgroundImage: { image1 },
      }}
    >
      <div
        className="auth"
        style={{
          flexDirection: isSignIn && "row-reverse",
          position: "relative",
        }}
      >
        <Link to='/'>
          {/* <CloseIcon style={{position:"absolute",right:"3%", top:"3%",color:"black"}}/> */}
          <CloseIcon
            style={
              isSignIn
                ? {
                  position: "absolute",
                  right: "3%",
                  top: "3%",
                  color: "black",
                }
                : {
                  position: "absolute",
                  right: "3%",
                  top: "3%",
                  color: "white",
                }
            }
          />
        </Link>

        <div
          className="auth-detail"
        >
          <div className="auth-input-div">
            {isSignIn ? (
              <div
                className="auth-top"
                style={{ marginTop: "30px", marginBottom: "40px" }}
              >
                <p>
                  Don’t have an account?{" "}
                  <b onClick={() => setIsSignIn(false)} style={{ color: "#ff6767" }}>Sign Up</b>
                </p>
              </div>
            ) : (
              <div className="auth-top">
                <p>
                  Already have an account?{" "}
                  <b onClick={() => setIsSignIn(true)} style={{ color: "#ff6767" }}>Sign In</b>
                </p>
              </div>
            )}
            <h1>{isSignIn ? "Sign in " : "Sign up "}to SpotLet</h1>
            {isSignIn ? <div className="google-login">
              <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
              />
              <div className="line">
                <p className="border-line"></p>
                <p>or</p>
                <p className="border-line"></p>
              </div>
            </div> : <>
              {!userData.googleLogin && <div className="google-login">
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                  buttonText="Sign up with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={false}
                />
                <div className="line">
                  <p className="border-line"></p>
                  <p>or</p>
                  <p className="border-line"></p>
                </div>
              </div>}
            </>}
            <form onSubmit={handleSubmit}>
              {(!isSignIn && !userData.googleLogin) && (
                <div className="horizontal-itm">
                  <div>
                    <label>First Name</label>
                    <br />
                    <input
                      className="authInput"
                      placeholder="First Name"
                      name="firstName"
                      style={{ width: "91%" }}
                      onChange={handleInput}
                      value={userData.firstName}
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PermIdentity />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <br />
                    <input
                      className="authInput"
                      style={{ width: "91%" }}
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleInput}
                      value={userData.lastName}
                      size="small"
                      fullWidth
                    />
                  </div>
                </div>
              )}
              {!userData.googleLogin && <>
                <label>Email</label>
                <br />
                <input
                  className="authInput"
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={userData.email}
                  fullWidth
                  placeholder="Enter your email address"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutline />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
              </>}
              {!isSignIn && (
                <>
                  {userData.googleLogin && <br />}
                  <label>Phone Number</label>
                  <br />
                  <input
                    className="authInput"
                    type="text"
                    name="mobile"
                    onChange={handleInput}
                    value={userData.mobile}
                    fullWidth
                    placeholder="Enter your mobile number"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Call />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <div className="horizontal-itm">
                    <div>
                      <label>Registering as a</label>
                      <br />
                      <Select
                        value={userData.booking_type}
                        onChange={handleInput}
                        name="booking_type"
                        className="dropdownSelect"
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        fullWidth
                        style={{ height: "34px" }}
                        required
                      >
                        {/* <MenuItem value="">None</MenuItem>
						<MenuItem value="individual">Individual</MenuItem>
						<MenuItem value="corporate">Corporate</MenuItem> */}
                        <MenuItem value="individual">Host</MenuItem>
                        <MenuItem value="corporate">Guest</MenuItem>
                      </Select>
                    </div>
                    <div>
                      <label>
                        Profession
                      </label>
                      <input
                        className="authInput"
                        type="text"
                        style={{ width: "91%" }}
                        name={"profession"}
                        onChange={handleInput}
                        value={userData.profession}
                        fullWidth
                        placeholder={"Profession"}
                        size="small"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              <label>Password</label>
              <br />
              <TextField
                className="authInput pass"
                type={!showPassword ? "password" : "text"}
                name="password"
                onChange={handleInput}
                value={userData.password}
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
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />
              <br />
              {valid ? (isSignIn ? "" : <p>Should contain minimum 8 characters</p>) : <p style={{ color: "red" }}>The length of password should be greater than 8 and it should contain an uppercase, a lowercase and a special character</p>}
              {
                !isSignIn &&
                <div style={{ fontSize: "0.8rem" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#ea4235",
                          "&.Mui-checked": {
                            color: "#ea4235",
                          },
                        }}
                        onClick={() => setChecked((prevState) => { return !prevState })}
                      />
                    }
                    label="I agree to the Term and Conditions"
                  />
                  <p style={{ marginTop: "0" }}>By clicking on SignUp you are agreeing to our <a href="/termsofservice" target="#" style={{ color: "#ff6767" }}>terms of services</a> and <a href="/privacypolicy" target="#" style={{ color: "#ff6767" }}>privacy policy</a></p>
                </div>
              }

              <Button
                type="submit"
                fullWidth
                className="auth-btn"
                variant="contained"
                disableElevation
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </Button>
              {isSignIn && <div
                className="auth-top"
                style={{ marginTop: "10px", marginBottom: "40px", display: "block", textAlign: "center" }}>
                <b onClick={() => handleOpen()}>forgot password ?</b>
              </div>}
            </form>
            {/* <p id="swch">Or sign up with</p>
			<div className="diff-auth-type">
			  <IconButton className="auth-icon">
				<Google />
			  </IconButton>
			  <IconButton className="auth-icon" id="facebook">
				<Facebook />
			  </IconButton>
			  <IconButton className="auth-icon">
				<Apple />
			  </IconButton>
			</div> */}
          </div>
        </div>
        <div className="auth-img">
          <img
            src={isSignIn ? "./auth-signin.png" : "./auth-signup.png"}
            alt="image"
          />
        </div>
        <Modal open={open} onClose={handleClose}>
          <ForgotPassword handleClose={handleClose} />
        </Modal>
        <Modal open={openOTP} onClose={handleCloseOTP}>
          <OTPVerify sendOTP={getOTP} isSignUp={true} />
        </Modal>
      </div>
    </div>
  );
}
