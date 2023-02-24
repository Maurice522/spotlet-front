import React, { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";
import UserInbox from "../Components/Chats/UserInbox";
import Navbar from "../Components/Navbar";
import "../Assets/Styles/Chats/Messages.css";
import {
  SearchOutlined,
  Send,
  SentimentSatisfiedOutlined,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/base";
import MessageThread from "../Components/Chats/MessageThread";
import propertyImg from "../Assets/Images/side-section-image.jpeg";
import { Avatar, Button } from "@mui/material";
import { toast } from "react-toastify";
import { contactList, getBookingDetail, getLocation, messsageRoom, sendMessage } from "../services/api";
import { useSelector } from "react-redux";
import { selectUser_id } from "../redux/slices/userSlice";
import  io  from "socket.io-client";

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const[sendBtnDisable,setSendBtnDisable]=useState(false)
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [friend, setFriend] = useState(null);
  const [showPicker, setPicker] = useState(false);
  const [locationData, setLocationData] = useState({});
  const scrollRef = useRef();
  const user_id = useSelector(selectUser_id);
  const[receiverName,setReceiverName]=useState("")
  // console.log("locationData",locationData)

  // const socket = useRef();
  const [propertyOwner, setPropertyOwner] = useState({});
  const [bookingDetail, setBookingDetail] = useState({});
  const bookingId = currentChat?.bookingId;
  const locationId = currentChat?.locationId;
  // console.log("bookingDetail",bookingDetail)
  const socket = io.connect("http://localhost:7000");
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  let endTime =
    (Number(bookingDetail?.time?.substr(0, 2)) +
      Number(bookingDetail?.duration_in_hours)) %
    24;
  let ampm = bookingDetail?.time?.substr(6, 7);
  if (endTime > 12) {
    endTime = endTime % 12;
    if (endTime < 10) {
      endTime = "0" + endTime;
    }
    ampm = ampm == "pm" ? "am" : "pm";
  }
  let mm = bookingDetail?.date?.split("-")[1]
  const month = toMonthName(mm);
  const date_of_booking =
    bookingDetail?.date?.split("-")[0] +
    "th " +
    month +
    " " +
    bookingDetail?.date?.split("-")[2];
  // useEffect(() => {
  //   // socket.current = io.connect("https://spotlet.onrender.com/");
  //   // socket.current = io.connect("http://localhost:7000");
  //   socket.current.on("getMessage", (data) => {
  //     //console.log(data);
  //     setArrivalMessage({
  //       sender: data.senderId,
  //       message: data.message,
  //       conversationId: currentChat?.id,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);
  useEffect(() => {
    
    socket.on("receive_message", (data) => {
      // console.log("receive data",data);
      setArrivalMessage({
        sender: data.senderId,
        message: data.message,
        conversationId: currentChat?.id,
        createdAt: Date.now(),
      });
    });
  }, [socket]);
  
  useEffect(() => {
    arrivalMessage && currentChat &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   user_id && socket.current.emit("addUser", user_id);
  // }, [user_id]);

  useEffect(() => {
    currentChat && getLocation(locationId).then(res => setLocationData(res.data))
      .catch(err => console.log(err))
  }, [locationId])

  //get booking detail
  useEffect(() => {
    currentChat && getBookingDetail(currentChat?.bookingId, { locationId })
      .then(res => setBookingDetail(res.data))
      .catch(err => console.log(err))
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendBtnDisable(true)
    try {
      if (newMessage === ""){toast.error("Can not be empty"); setSendBtnDisable(false)}
      if (newMessage !== "") {
        const form = {
          senderId: user_id,
          message: newMessage,
          conversationId: currentChat._id,
        };
        const receiverId = currentChat.members.find(
          (member) => member !== user_id
        );
        // socket.current.emit("sendMessage", {
        //   senderId: user_id,
        //   receiverId,
        //   message: newMessage,
        //   room:currentChat.bookingId
        // });
        socket.emit("sendMessage", {
          senderId: user_id,
          receiverId,
          message: newMessage,
          room:currentChat.bookingId
        });

        await sendMessage(form);
        setMessages([...messages, form]);
        setNewMessage("");
        setSendBtnDisable(false)
      }
     
    } catch (error) {
      // toast.error(error.response.data);
      console.log("err",error)
      setSendBtnDisable(false)
    }
  };

  useEffect(() => {
    user_id &&
      contactList(user_id)
        .then((response) => {
          setConversations(response.data);
          // console.log("first getting data",response.data);
        })
        .catch((error) => {
          toast.error(error.response.data);
        });
  }, [user_id]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);
  //console.log(messages);

  useEffect(() => {
    const friendId = currentChat?.members.find((m) => m != user_id);
    setFriend(currentChat?.users[friendId]);
  }, [currentChat]);

  useEffect(() => {
    user_id &&
      messsageRoom(currentChat?._id)
        .then((res) => setMessages(res.data))
        .catch((error) => toast.error(error.response.data));
  }, [currentChat]);


//CREATE ROOM
const createRoom=(conversation)=>{
  let receiverId=conversation?.members.find(
    (member) => member !== user_id
  )
  // console.log("something",(Object.values(conversation.users[0]).filter((oj)=>{return oj._id===receiverId}))[0])

  let receiverData=conversation?.users[0][receiverId]
  let receiverName=receiverData?.personalInfo?.fullName
setReceiverName(receiverName)

  setCurrentChat(conversation)
  socket.emit("join_room", conversation.bookingId);
  // console.log("conversation",conversation)

  // console.log("all conv",conversations)

}


  return (
    <div>
      <Navbar extraNavId={"id-2"} />
      {/* Sidebar */}
      {/* Main Chat box */}
      {/* Right property Info */}
      <div className="messages">
        <div className="chat-inbox">
          {conversations.length > 0 ? (
            conversations.map((conversation, key) => {
              return (
                <div onClick={() => {createRoom(conversation)}} key={key}>
                  <UserInbox conversation={conversation} />
                </div>
              );
            })
          ) : (
            <h2 style={{ textAlign: "center", marginTop: "80%" }}>
              No users...
            </h2>
          )}
        </div>
        <div className="main-chat">
          {currentChat ? (
            <div className="chat-sec">
              <div className="chat-head">
                <img src={locationData?.imagesData?.at(0)?.image} alt="profile" />
                <div>
                  <h5>{receiverName?receiverName:currentChat?.locationId}</h5>
                  <p>{friend?.personalInfo.fullName}</p>
                </div>
                {/* <SearchOutlined className="searchIcon" /> */}
              </div>
              <div className="convo-main">
                <div>
                  {messages?.map((message, index) => {
                    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
                    return (
                      <div key={index}>
                        <MessageThread
                          message={message}
                          own={message.senderId === user_id}
                          id={index}
                        />
                      </div>
                    );
                  })}
                  <div className="bottom-chat" ref={scrollRef}>
                    {" "}
                  </div>
                </div>
              </div>
              <div className="send-msg">
                {showPicker && (
                  <ClickAwayListener onClickAway={() => setPicker(false)}>
                    <div>
                      <Picker
                        title="Pick your emoji…"
                        emoji="point_up"
                        onEmojiClick={(e, emojiObj) =>
                          setNewMessage((prev) => prev + emojiObj.emoji)
                        }
                        pickerStyle={{
                          position: "absolute",
                          zIndex: "200",
                          bottom: "63px",
                        }}
                      />
                    </div>
                  </ClickAwayListener>
                )}
                <SentimentSatisfiedOutlined
                  sx={{ color: "white", marginLeft: "11px", cursor: "pointer" }}
                  onClick={() => setPicker((prev) => !prev)}
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    placeholder="Send a Message ..."
                  />
                  <button disabled={sendBtnDisable} type="submit">Send</button>
                </form>
              </div>
            </div>
          ) : (
            <div className="no-chat">
              <h4>Your Messages</h4>
            </div>
          )}
        </div>

        <div className="chat-propery-info">
          {
            currentChat ? (
              <>
                <img src={locationData?.imagesData?.at(0)?.image} alt="property-img" />
                <div>
                  <h2>{locationId}</h2>
                  <h4>{locationData?.property_address?.address}</h4>
                  <h5>₹ {bookingDetail?.total_amt}</h5>
                  <h4>Reserved Date</h4>
                  <h5>{date_of_booking}</h5>
                  <h4>Reserved Time</h4>
                  <h5>{bookingDetail?.time +
                    " - " +
                    endTime +
                    bookingDetail?.time?.substr(2, 4) +
                    ampm}</h5>
                  <h4>Attendies</h4>
                  <h5>{bookingDetail?.attendies} people</h5>
                </div>
              </>
            ) : (
              <div className="no-chat">
                <h4>Your Location</h4>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
