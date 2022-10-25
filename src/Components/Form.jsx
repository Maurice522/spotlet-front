import React,{useState} from "react";
import "../Assets/Styles/generalForm.css";
import { TextField, Button } from "@mui/material";
import { contactUs } from "../services/api";
import { ToastContainer, toast } from "react-toastify";

//

const Form = ({ labels, heading }) => {
	const [cont, setcont] = useState({
		fullName:"",
		email:"",
		mobile:"",
		message:""
	})
	const handleSubmit=async()=>{
		try {
			console.log(cont);
			await contactUs(cont);
			toast("Form Submitted");
		} catch (error) {
			toast.error(error);
		}
	}
	return (
		<div>
			<h1 className="form-heading">{heading}</h1>
			<form className="general-form" style={{width:"55%",}}>
			<TextField label="Name" onChange={(e)=>setcont({...cont,fullname:e.target.value})} variant="standard" fullWidth />
			<TextField label="Email" onChange={(e)=>setcont({...cont,email:e.target.value})}  variant="standard" fullWidth />
			<TextField label="Phone Number" onChange={(e)=>setcont({...cont,mobile:e.target.value})} variant="standard" fullWidth />
			<TextField label="Message" onChange={(e)=>setcont({...cont,message:e.target.value})} variant="standard" fullWidth />
				
				<span>
					<Button
						variant="contained"
						onClick={()=>handleSubmit()}
						sx={{
							backgroundColor: "#ff6767",
						}}>
						Send
					</Button>
				</span>
			</form>
		</div>
	);
};

export default Form;
