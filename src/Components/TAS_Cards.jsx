import React from "react";

const TAS_Cards = ({ data }) => {
  return (
    <div
      style={{
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
        padding: "13px 3px",
        border: "1px solid #FFFFFF",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.24)",
      }}
    >
      {data.icon && (
        <div
          style={{
            color: "#ff6767",
          }}
        >
          {data.icon}
        </div>
      )}
      <h3 style={{ color: "grey", textAlign: "center" }}>{data.title}</h3>
      <div
        style={{
          textAlign: "justify",
          padding: "3% 7%",
        }}
      >
        {data.info}
      </div>
    </div>
  );
};

export default TAS_Cards;
