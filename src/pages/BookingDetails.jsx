import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Button, Avatar, Rating, Modal } from "@mui/material";
import "../Assets/Styles/bookingDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUserData } from "../redux/slices/userSlice";
import { useEffect } from "react";
import {
  createConversation,
  deleteBookingReq,
  getLocation,
  getUserData,
  locationUpdate,
} from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GoogleMap from "../Components/GoogleMap";
import axios from "axios";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const BookingDetails = () => {
  let data;
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [booking, setBooking] = useState({});
  // const [ownerData, setOwnerData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [open, setOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const handleopenModal = () => setopenModal(true);
  const handleCloseModal = () => setopenModal(false);
  const [cord, setCord] = useState({
    lat: 0,
    lng: 0,
  });
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const bookingId = window.location.pathname.substr(16);
  // const endTime = (Number(booking?.time?.substr(0, 2)) + Number(booking?.duration_in_hours)) % 24;
  const ownerData = useSelector(selectUserData);

  useEffect(() => {
    userData?.portfolio.map((booking) => {
      if (booking.bookingId === bookingId) setBooking(booking);
    });
  }, [userData]);

  let endTime =
    (Number(booking?.time?.substr(0, 2)) + Number(booking?.duration_in_hours)) %
    24;
  let ampm = booking?.time?.substr(6, 7);
  if (endTime > 12) {
    endTime = endTime % 12;
    if (endTime < 10) {
      endTime = "0" + endTime;
    }
    ampm = ampm == "pm" ? "am" : "pm";
  }
  let mm = booking?.date?.split("-")[1];
  const month = toMonthName(mm);
  const date_of_booking =
    booking?.date?.split("-")[0] +
    "th " +
    month +
    " " +
    booking?.date?.split("-")[2];
  const discount =
    booking?.duration_in_hours === "24"
      ? 0.8
      : booking?.duration_in_hours === "12"
      ? 0.9
      : 1;
  const perHourCost = (
    (booking?.total_amt - 40) /
    booking?.duration_in_hours /
    discount
  )?.toFixed(2);
  const GEO_API = "b531f1d229f547d09b4c7c3207885471";

  useEffect(() => {
    getLocation(booking?.property_id)
      .then((res) => setLocationData(res.data))
      .catch((err) => console.log(err));
  }, [booking]);

  useEffect(() => {
    // Get latitude & longitude from address.
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?city=${locationData?.property_address?.city}&state=${locationData?.property_address?.state}&country=India&lang=en&limit=1&type=city&format=json&apiKey=${GEO_API}`
      )
      .then((response) => {
        //const { lat, lng } = response.results[0].geometry.location;
        //  console.log(response.data.results[0]);
        setCord({
          lat: response.data.results[0].lat,
          lng: response.data.results[0].lon,
        });
      })
      .catch((err) => console.log(err));
  }, [locationData]);

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const confirmDeletion = () => {
    let text = "Do you really want to delete this booking?";
    return window.confirm(text);
  };
  const deleteBooking = async () => {
    setopenModal(true);
    if (open) {
      try {
        if (confirmDeletion()) {
          const newPortfolio = userData.portfolio.filter(
            (p) => p.bookingId !== bookingId
          );
          const newUserData = { ...userData, portfolio: newPortfolio };
          const data = {
            bookingId,
            locationId: booking.property_id,
            user_id: booking.user_id,
          };
          const response = await deleteBookingReq(data);
          dispatch(addUser(newUserData));
          toast.success(response.data);
          window.history.back();
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };
  //message
  //message
  const handleChat = async () => {
    const data = {
      senderId: booking.owner_id,
      receiverId: booking.user_id,
      locationId: booking.property_id,
    };
    await createConversation(bookingId, data);
    window.location = `/messages/${bookingId}`;
  };

  //review
  const handleReview = async () => {
    data = {
      review,
      rating,
    };
    // console.log(booking.property_id);
    setLocationData({
      ...locationData,
      review_and_rating: data,
    });
    const data = {
      locationData,
      location_id: booking.property_id,
    };
    try {
      // console.log("Review Start");
      await locationUpdate(data);
      // console.log("Review Sent");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(booking);
  return (
    <div>
      <Navbar extraNavId="id-2" />
      <div className="below-nav">
        <div className="container">
          <div className="booking-details-header">Booking Details</div>
          <div className="booking-details-body">
            <div className="booking-details-body-left">
              <div className="item-heading">{booking?.property_id}</div>
              <div className="grid-container">
                <div>
                  <div className="item-heading">Reserved Date</div>
                  <div className="item-body">{date_of_booking}</div>
                </div>
                <div>
                  <div className="item-heading">Attendies</div>
                  <div className="item-body">{booking?.attendies} People</div>
                </div>
                <div>
                  <div className="item-heading">Reserved Time</div>
                  <div className="item-body">
                    {booking?.time +
                      " to " +
                      endTime +
                      booking?.time?.substr(2, 4) +
                      ampm}
                  </div>
                </div>
                <div>
                  <div className="item-heading">Duration</div>
                  <div className="item-body">
                    {booking?.duration_in_hours} Hrs
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-details-body-right">
              <div data-attribute-3>
                <div data-attribute-4>Total price (including GST)</div>
                <div data-attribute-4 style={{ textAlign: "right" }}>
                  &nbsp;₹&nbsp;
                  {(perHourCost * booking?.duration_in_hours)?.toFixed(2) ===
                  "NaN"
                    ? 0
                    : (perHourCost * booking?.duration_in_hours)?.toFixed(2)}
                </div>
              </div>
              <div data-attribute-3>
                <div data-attribute-4>Cleaning Fee (including Gst)</div>
                <div data-attribute-4>
                  ₹ {locationData?.pricing?.cleaningFee}
                </div>
              </div>
              <div data-attribute-3>
                <div data-attribute-4>Processing Fee</div>
                <div data-attribute-4 style={{ textAlign: "right" }}>
                  &nbsp;₹&nbsp;
                  {((perHourCost * booking?.duration_in_hours) / 10)?.toFixed(
                    2
                  )}
                </div>
              </div>

              <div data-attribute-3>
                <div data-attribute-1>Total</div>
                <div data-attribute-1>
                  ₹
                  {(perHourCost * booking?.duration_in_hours + 40)?.toFixed(
                    2
                  ) === "NaN"
                    ? 0
                    : (perHourCost * booking?.duration_in_hours + 40)?.toFixed(
                        2
                      )}
                </div>
              </div>

              <Button
                variant="contained"
                sx={{
                  width: "20vw",
                  backgroundColor: "#EA4235",
                  color: "white",
                  borderRadius: "4px",
                  marginTop: "10px",
                }}
                disabled={booking?.payment_status !== "Under Review"}
                onClick={deleteBooking}
              >
                Cancel Booking
              </Button>
            </div>
          </div>
          <Modal open={openModal} onClose={handleCloseModal}>
            <div className="listing-modal">
              <h3>Do you really want to Deactivate your account?</h3>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  className="auth-btn"
                  onClick={() => {
                    handleCloseModal();
                    setOpen(true);
                  }}
                >
                  Yes
                </Button>
                <Button
                  className="auth-btn"
                  onClick={() => {
                    handleCloseModal();
                    setOpen(false);
                  }}
                >
                  No
                </Button>
              </div>
            </div>
          </Modal>
          <div
            style={{
              marginLeft: "auto",
              width: "20vw",
              display: `${
                booking?.payment_status !== "Approved" ? "none" : "block"
              }`,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "20vw",
                backgroundColor: "#EA4235",
                color: "white",
                borderRadius: "4px",
                marginTop: "10px",
              }}
            >
              Payment
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "80%",
            height: "500px",
            margin: "auto",
            display: `${
              booking?.payment_status !== "Approved" ? "none" : "block"
            }`,
          }}
        >
          {cord.lat !== 0 && <GoogleMap lat={cord.lat} lng={cord.lng} />}
        </div>
        <div className="container">
          <div className="booking-details-header">Message</div>
          <div className="user-info">
            {ownerData?.personalInfo?.profile_pic ? (
              <img src={ownerData?.personalInfo?.profile_pic} alt="profile" />
            ) : (
              <Avatar className="user-dp" />
            )}
            <span className="item-heading">
              {ownerData?.personalInfo?.fullName}
            </span>
          </div>
          <div className="booking-details-body">
            <div className="item-heading" style={{ width: "max-content" }}>
              Message to the host:{" "}
            </div>
            <div className="item-info">{booking?.user_data?.message}</div>
            <div>
              <Button
                variant="contained"
                sx={{
                  width: "20vw",
                  backgroundColor: "#EA4235",
                  color: "white",
                  borderRadius: "4px",
                  marginTop: "10px",
                  flexGrow: "1",
                }}
                disabled={booking?.payment_status === "Cancelled"}
                onClick={handleChat}
              >
                Message
              </Button>
            </div>
          </div>
        </div>
        {userData?.portfolio[0]?.payment_status !== "Under Review" && (
          <div div className="container">
            <div className="booking-details-header">Reviews and Rating</div>
            <div className="row1">
              <div className="coll1">
                <h2>
                  Write A review
                  <span style={{ color: "red" }}>*</span>
                </h2>
                <TextareaAutosize
                  className="listingInput text-input"
                  aria-label="minimum height"
                  minRows={6}
                  maxLength={500}
                  name="property_info"
                  onChange={(e) => setReview(e.target.value)}
                  // value={property_desc ? property_desc.property_info : ""}
                  style={{
                    width: 690,
                    fontSize: "16px",
                    lineHeight: "24px",
                    padding: "1%",
                  }}
                  required
                />
              </div>
            </div>
            <div className="row1">
              <div className="coll1">
                <h2>
                  Ratings
                  <span style={{ color: "red" }}>*</span>
                </h2>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
            </div>
            <div className="row1">
              <Button
                variant="contained"
                sx={{
                  width: "20vw",
                  backgroundColor: "#EA4235",
                  color: "white",
                  borderRadius: "4px",
                  marginTop: "10px",
                  flexGrow: "1",
                }}
                disabled={booking?.payment_status === "Cancelled"}
                onClick={handleReview}
              >
                Send Review
              </Button>
            </div>
          </div>
        )}
        <div className="container">
          <div className="booking-details-header">
            Terms and Conditions Agreed
          </div>
          <div className="terms-conditions item-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
            Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
            consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
            sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
            aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
            porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
            massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
            pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
            aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
            venenatis. Donec a dui et dui fringilla consectetur id nec massa.
            Aliquam erat volutpat.
          </div>

          <div className="terms-conditions item-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
            Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
            consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
            sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
            aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
            porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
            massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
            pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
            aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
            venenatis. Donec a dui et dui fringilla consectetur id nec massa.
            Aliquam erat volutpat.
          </div>
          <div className="terms-conditions item-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
            Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
            consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
            sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
            aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
            porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
            massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
            pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
            aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
            venenatis. Donec a dui et dui fringilla consectetur id nec massa.
            Aliquam erat volutpat.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingDetails;
