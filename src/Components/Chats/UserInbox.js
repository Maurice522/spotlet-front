import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../Assets/Styles/Chats/UserInbox.css";
import { selectUser_id } from "../../redux/slices/userSlice";

function UserInbox({ conversation }) {
  const [user, setUser] = useState(null);
  const user_id = useSelector(selectUser_id);
  // const {state, dispatch} = useContext(UserContext);
  // const [online, setOnline] = useState(null);
  useEffect(() => {
    const friendUser = async function () {
      const friendId = await conversation.members.find((m) => m !== user_id);
      setUser(conversation.users[friendId]);
    };
    friendUser();
  }, [conversation]);
  return (
    <div className="user-inbox">
      <div className="online"></div>
      {user?.personalInfo.profile_pic ? (
        <img src={user?.personalInfo.profile_pic} alt="profile" />
      ) : (
        <Avatar className="user-dp" />
      )}

      <div>
        <h6>{user?.personalInfo.fullName} </h6>
      </div>
    </div>
  );
}

export default UserInbox;
