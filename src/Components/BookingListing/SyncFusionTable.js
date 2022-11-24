import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SyncfusionTable = ({ UsersData, UsersGrid, content }) => {
  document.getElementsByClassName("MuiDataGrid-cellContent").innerHTML =
    "Details";
  let x = window.matchMedia("(max-width: 576px)");
  return UsersData?.length > 0 ? (
    <DataGrid
      initialState={
        {
          // sorting: {
          // 	sortModel: [
          // 		{ field: 'Date', sort: 'desc' },
          // 		{ field: 'BookingRequest', sort: 'desc' }
          // 	],
          // },
        }
      }
      rows={UsersData}
      columns={UsersGrid}
      pageSize={7}
      sx={{ fontSize: x.matches && "10px" }}
    />
  ) : (
    <div
      style={{
        width: "100%",
        margin: "auto",
        display: "flex",
        placeItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {content == "Notifications" ? (
        <div style={{ fontSize: "2rem" }}>No {content}</div>
      ) : (
        <div style={{ fontSize: "2rem" }}>No {content} property</div>
      )}

      {content == "Notifications" ? (
        ""
      ) : (
        <Link to={content === "Booked" ? "/" : "/listing"}>
          <Button variant="contained" style={{ backgroundColor: "#f26767" }}>
            {content === "Booked" ? "Book" : "List"} one now
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SyncfusionTable;
