import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SyncfusionTable = ({ UsersData, UsersGrid }) => {
	return UsersData ? (
		<DataGrid rows={UsersData} columns={UsersGrid} pageSize={7} />
	) : (
		<div
			style={{
				width: "100%",
				margin: "5px auto",
			}}>
			<div>No listed property</div>
			<Link to="/listing">
				<Button variant="contained" color="primary">
					List one now
				</Button>
			</Link>
		</div>
	);
};

export default SyncfusionTable;
