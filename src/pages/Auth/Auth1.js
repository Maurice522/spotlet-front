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
	IconButton,
	InputAdornment,
	MenuItem,
	Modal,
	Select,
	TextField,
} from "@mui/material";

import React, { useState } from "react";
import { otpVerify, signIn } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Assets/Styles/Auth.css";
import { useDispatch } from "react-redux";
import { addUser, saveOTP } from "../../redux/slices/userSlice";
import OTPVerify from "./OTPVerify";
import ForgotPassword from "./ForgotPassword";
import image1 from "../../Assets/Images/signupinBg.jpeg";
export default function Auth() {
	const state = useLocation();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignIn, setIsSignIn] = useState(state.state.isSignIn);
	const [openOTP, setOpenOTP] = useState(false);
	const [open, setOpen] = useState(false);
	const handleOpenOTP = () => setOpenOTP(true);
	const handleCloseOTP = () => setOpenOTP(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [fullname, setFullName] = useState({
		fname: "",
		lname: "",
	});
	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		mobile: "",
		email: "",
		password: "",
		booking_type: "",
		profession: "",
		company: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//Handling All Input data function
	const handleInput = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const getOTP = async (userData) => {
		try {
			const response = await otpVerify(userData);
			toast("OTP sent");
			dispatch(saveOTP(response.data.otp));
			dispatch(addUser(userData));
			handleOpenOTP();
		} catch (error) {
			toast.error(error.response.data.error);
		}
	};

	//SignIn and SignUp function -
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignIn) {
          try {
            const { data } = await signIn(userData);
            
            localStorage.setItem("token", data.token);
            toast("Successful login");
            window.location = "/";
          } catch (error) {
            //console.log(error.response.data);
            toast.error(error.response.data.error);
          }
        } else {
          try {
            if (userData.password.length < 8)
              return toast.error("Passwod must contain atleast 8 characters");
            getOTP(userData);
          } catch (error) {
            toast.error(error.response.data);
          }
        }
      };

	return (
		<div
			className="singInMainDiv"
			style={{
				padding: "15%",
				paddingTop: "2%",
				paddingBottom: "1%",
				backgroundImage:{image1},		
			}}>
			<div
				className="auth"
				style={{ flexDirection: isSignIn && "row-reverse" ,backgroundColor:"white"}}>
				<div
					className="auth-detail"
					style={isSignIn ? { paddingRight: "8%" } : { paddingLeft: "6%" }}>
					<div>
						{isSignIn ? (
							<div
								className="auth-top"
								style={{ marginTop: "30px", marginBottom: "40px" }}>
								<p>
									Don???t have an account?{" "}
									<b onClick={() => setIsSignIn(false)}>Sign Up</b>
								</p>
								<b
									onClick={() => handleOpen()}
									style={{
										marginRight: "-10%",
										width: "fit content",
									}}>
									Forgot Password
								</b>
							</div>
						) : (
							<div className="auth-top">
								<p>
									Already have an account?{" "}
									<b onClick={() => setIsSignIn(true)}>Sign In</b>
								</p>
							</div>
						)}
						<h1>{isSignIn ? "Sign in " : "Sign up "}to SpotLet</h1>
						<form onSubmit={handleSubmit}>
							{!isSignIn && (
								<div className="horizontal-itm">
									<div>
										<label>First Name</label>
										<br />
										<input
											placeholder="First Name"
											className="authInput"
											style={{width:"90%"}}
											name="firstName"
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
											placeholder="Last Name"
											name="lastName"
											className="authInput"
											style={{width:"90%"}}
											onChange={handleInput}
											value={userData.lastName}
											size="small"
											fullWidth
										/>
									</div>
								</div>
							)}
							<label>Email</label>
							<br />
							<input
								type="email"
								name="email"
								className="TextFiledAuth authInput"
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
							{!isSignIn && (
								<>
									<label>Phone Number</label>
									<br />
									<input
										type="text"
										name="mobile"
										className="authInput"
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
											<label>Booking as a</label>
											<br />
											<select
												value={userData.booking_type}
												onChange={handleInput}
												name="booking_type"
												className="dropdownSelect"
												displayEmpty
												inputProps={{ "aria-label": "Without label" }}
												fullWidth
												style={{height:"35px"}}
												required>
												<option value="individual">Individual</option>
												<option value="corporate">Corporate</option>
											</select>
										</div>
										<div>
											<label>
												{userData.booking_type === "corporate"
													? "Company Name"
													: "Profession"}
											</label>
											<input
												type="text"
											className="authInput"
												name={
													userData.booking_type === "corporate"
														? "company"
														: "profession"
												}
												onChange={handleInput}
												value={
													userData.booking_type === "corporate"
														? userData.company
														: userData.profession
												}
												fullWidth
												placeholder={
													userData.booking_type === "corporate"
														? "Company Name"
														: "Profession"
												}
												size="small"
												required
											/>
										</div>
									</div>
								</>
							)}
							<label>Password</label>
							<br />
							<input
								type={!showPassword ? "password" : "text"}
								name="password"
								className="authInput"
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
												edge="end">
												{!showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
								required
							/>
							<br />
							<p>Should contain minimum 8 characters</p>
							<Button
								type="submit"
								fullWidth
								className={!isSignIn ? "signin-btn" : "auth-btn"}
								variant="contained"
								disableElevation>
								{isSignIn ? "Sign In" : "SignUp"}
							</Button>
						</form>
						{/* {isSignIn && (
							<div>
								<p id="swch">Or sign up with</p>
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
								</div>
							</div>
						)} */}
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
					<OTPVerify sendOTP={getOTP} />
				</Modal>
			</div>
			{/* {!isSignIn && (
				<div
					style={{
						textAlign: "center",
						width: "100%",
						margin: "1px auto",
						textTransform: "capitalize",
					}}>
					<p id="swch">Or sign up with</p>
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
					</div>
				</div>
			)} */}
		</div>
	);
}
