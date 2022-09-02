import React from "react";
import "../../Assets/Styles/Chats/MessageThread.css";

function MessageThread({ message, own }) {
  const messageStyle = {
    messagediv: {
      justifyContent: own ? "flex-end" : "flex-start",
    },
    thread: {
      backgroundColor: own ? "white" : "#e9e9e9",
    },
  };
  return (
    <div className="thread" style={messageStyle.messagediv}>
      <div style={messageStyle.thread}>
        <p>{message.message}</p>
      </div>
    </div>
  );
}

export default MessageThread;
