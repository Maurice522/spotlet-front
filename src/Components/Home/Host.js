import React from "react";
import "../../Assets/Styles/Home/host.css";
import { Link } from "react-router-dom";

const Host = ({ title, link }) => {
	return (
		<div className="host-bg">
			<div>
				<div className="host-header">{title}</div>
				<div>Have a unique property which you want to list</div>
				<div>Then why wait</div>
				<Link to={"/host"} onClick={() => window.scrollTo(0, 0)}>
					<div className="list-btn">Host With Us</div>
				</Link>
				<Link to={"/listing"} onClick={() => window.scrollTo(0, 0)}>
					<div className="list-btn">List Your Space</div>
				</Link>
			</div>
		</div>
	);
};

export default Host;
