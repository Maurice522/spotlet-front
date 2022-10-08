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
				boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
			}}>
<<<<<<< HEAD
			<div style={{
				color:"#ff6767",
				}}>{data.icon}</div>
			<h3 style={{color:"#808080",}}>{data.title}</h3>
			<div
				style={{
					textAlign: "center",
					padding:"4%",
=======
			{data.icon && (
				<div
					style={{
						color: "#ff6767",
					}}>
					{data.icon}
				</div>
			)}
			<h3 style={{ color: "#ff6767" }}>{data.title}</h3>
			<div
				style={{
					textAlign: "center",
					padding: "2%",
>>>>>>> e999b51c6647a95f23dcdb9b2fc7aed2eddf6e84
				}}>
				{data.info}
			</div>
		</div>
	);
};

export default TAS_Cards;
