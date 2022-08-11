import React from "react";
import "../../Assets/Styles/Home/host.css";

const Host = ({ title, buttonContent }) => {
	return (
		<div className="host-bg">
			<div>
				<div className="host-header">{title}</div>
				<div>Have a unique property which you want to list</div>
				<div>Then why wait</div>
				<div className="list-btn">{buttonContent}</div>
			</div>
		</div>
	);
};

export default Host;
