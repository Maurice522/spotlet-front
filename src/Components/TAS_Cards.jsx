import React from "react";

const TAS_Cards = ({ data }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "5px",
				alignItems: "center",
				padding: "8px 3px",
				border: "1px solid #FFFFFF",
				// boxShadow: "1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)",
				boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
			}}>
			<div style={{
				color:"#ff6767",
				}}>{data.icon}</div>
			<h3 style={{color:"#808080",}}>{data.title}</h3>
			<div
				style={{
					textAlign: "center",
					padding:"4%",
				}}>
				{data.info}
			</div>
		</div>
	);
};

export default TAS_Cards;
