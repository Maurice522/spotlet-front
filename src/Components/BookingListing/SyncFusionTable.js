import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const SyncfusionTable = ({ UsersData, UsersGrid }) => {
	return (
		<DataGrid
			rows={UsersData}
			columns={UsersGrid}
			pageSize={5}
			rowsPerPageOptions={[5]}
			sx={{
				headerAlign: "center",
			}}
		/>
	);
};

export default SyncfusionTable;
