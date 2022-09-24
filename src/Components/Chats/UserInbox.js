import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../Assets/Styles/Chats/UserInbox.css";
import { selectUser_id } from "../../redux/slices/userSlice";
import { getLocation } from "../../services/api";

function UserInbox({ conversation }) {
  const [user, setUser] = useState(null);
  const [locationData, setLocationData] = useState({});
  const user_id = useSelector(selectUser_id);
  const locationId = conversation?.locationId;
  // const {state, dispatch} = useContext(UserContext);
  // const [online, setOnline] = useState(null);
  useEffect(() => {
    getLocation(locationId).then(res => setLocationData(res.data))
    .catch(err => console.log(err))
  }, [locationId])
  console.log(locationData);
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
        <img src={locationData?.images?.at(0)} alt="profile" />
      <div>
        <h6>{locationId} </h6>
      </div>
    </div>
  );
}

export default UserInbox;
