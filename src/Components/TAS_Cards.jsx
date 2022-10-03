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
				boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.5)",
			}}>
			<div>{data.icon}</div>
			<h3>{data.title}</h3>
			<div
				style={{
					textAlign: "center",
				}}>
				{data.info}
			</div>
		</div>
	);
};

export default TAS_Cards;
