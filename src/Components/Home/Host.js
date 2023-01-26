import React from "react";
import "../../Assets/Styles/Home/host.css";
import { Link } from "react-router-dom";

const Host = ({ title, link, content }) => {
  return (
    <div className="host-bg">
      <div>
        <div className="host-header">{title}</div>
        <div style={{width: "60%", margin: "auto", fontWeight: "normal"}}>{content ? content : "If you’d like to become a host and list your unique property, we’d be happy to showcase it on our website"}</div>
        <div style={{fontWeight: "normal"}}>{content ? "" : "We invite you to join our growing family"}</div>
        <Link to={"/host"} onClick={() => window.scrollTo(0, 0)}>
          <div className="list-btn">List your Space</div>
        </Link>
      </div>
    </div>
  );
};

export default Host;
