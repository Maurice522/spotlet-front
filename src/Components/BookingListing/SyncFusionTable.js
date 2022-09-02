import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const SyncfusionTable = ({ UsersData, UsersGrid }) => {
	return <DataGrid rows={UsersData} columns={UsersGrid} pageSize={7} />;
};

export default SyncfusionTable;
