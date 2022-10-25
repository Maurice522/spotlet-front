import React from "react";
import "../../Assets/Styles/Home/host.css";
import { Link } from "react-router-dom";

const Host = ({ title, buttonContent,link}) => {
	return (
		<div className="host-bg">
			<div>
				<div className="host-header">{title}</div>
				<div>Have a unique property which you want to list</div>
				<div>Then why wait</div>
				<Link to={link} >
				<div className="list-btn">{buttonContent}</div>
				</Link>
			</div>
		</div>
	);
};

export default Host;
