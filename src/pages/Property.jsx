import React, { useState } from "react";
import BookingForm from "../Components/Details/BookingForm";
import Carousel from "../Components/Details/Carousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { MdExpandMore, MdDone } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PropertyInfo from "../Components/PropertyInfo";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import { getAllLocations, getLocation, getUserData } from "../services/api";
import { useNavigate } from "react-router-dom";
import GoogleMap from "../Components/GoogleMap";
import axios from "axios";
import ImageGrid from "../Components/Details/ImageGrid";
import Gallery from "../Components/Listing/Gallery";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { selectUserData, selectUser_id } from "../redux/slices/userSlice";

const Property = ({
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  event,
  setEvent,
  setV1,
  setV2,
  setV3,
  setV4,
  setV5,
  setV6,
  setTotPrice,
  tot_price,
}) => {
  const [locationData, setLocationData] = useState({});
  const [propertyItems, setPropertyItems] = useState([]);
  const [galleryOn, setGalleryOn] = useState(false);
  const [images, setImages] = useState(locationData?.imagesData);
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);
  const [cord, setCord] = useState({
    lat: 0,
    lng: 0,
  });
  const GEO_API = "b531f1d229f547d09b4c7c3207885471";

  useEffect(() => {
    getAllLocations()
      .then((res) => setPropertyItems(res.data.locations))
      .catch((err) => console.log(err));
  }, []);
  
  useEffect(() => {
    getLocation(window.location.pathname.substring(10))
      .then((res) => setLocationData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(locationData);

  useEffect(() => {
    setImages(locationData?.imagesData);
  }, [locationData]);


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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    const fetchFav = async () => {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const user_jwt = jwtDecode(jwt);
        const { data } = await getUserData(user_jwt._id);
        setFavorites(data.favourites);
        // console.log(favorites);
      }
    };
    fetchFav();
  }, []);

  const locationItem = (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: "20px",
          gap: "5px",
        }}
      >
        <p style={{ lineHeight: "24px", fontWeight: "500" }}>Address:</p>
        <div style={{ lineHeight: "24px" }}>
          {locationData?.property_address?.area + " , "}
          {locationData?.property_address?.city}
          <br />
          {locationData?.property_address?.state + " , "}
          {locationData?.property_address?.pincode}
          <br />
          {locationData?.property_address?.country}
          <br />
        </div>
      </div>
      <div className="property--map">
        {cord.lat !== 0 && <GoogleMap lat={cord.lat} lng={cord.lng} />}
      </div>
    </div>
  );

  const hostInfo = (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className="host-info">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {locationData?.contact_det?.img ? (
            <img
              className="user-dp"
              src={locationData?.contact_det?.img}
              alt="profile"
            />
          ) : (
            <Avatar />
          )}
          <div
            style={{
              lineHeight: "24px",
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            <div>{locationData?.contact_det?.name}</div>
          </div>
        </div>
        <Button
          style={{
            height: "fit-content",
            border: "2px solid #ff5f5f",
            background: "#f26767",
            borderRadius: "5px",
            marginRight: "5%",
            padding: "4px 8px",
            cursor: "pointer",
            color: "white",
            textTransform: "capitalize",
          }}
          onClick={() => {
            if (!userData) {
              toast.error("You need to login first", 1000);
              return;
            }
            console.log(`${window.location.pathname.split("/")[0]}/messages/${locationData?.property_desc?.user_id}`);
            window.location = `http://localhost:3000/messages/${locationData?.property_desc?.user_id}`;
          }}
        >
          Message the host
        </Button>
      </div>
      <div
        style={{
          marginTop: "2%",
          width: "90%",
          textAlign: "justify",
          padding: "10px",
          paddingLeft: "5.5%",
          lineHeight: "24px",
        }}
      >
        Description of the host ipsum dolor sit amet, consectetur adipiscing
        elit. Nam hendrerit nisi sed sollicitu din pellentesque. Nunc posuere
        purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
        volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
        fringilla consectetur id nec massa. Aliquam erat volutpat.
      </div>
    </div>
  );

  // const propertyItems = [
  // 	[
  // 		{
  // 			image: img1,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "1",
  // 		},
  // 		{
  // 			image: img2,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "2",
  // 		},
  // 		{
  // 			image: img3,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "3",
  // 		},
  // 		{
  // 			image: img1,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "1",
  // 		},
  // 	],
  // 	[
  // 		{
  // 			image: img3,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "3",
  // 		},
  // 		{
  // 			image: img1,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "1",
  // 		},
  // 		{
  // 			image: img1,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "1",
  // 		},
  // 		{
  // 			image: img2,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "2",
  // 		},
  // 	],
  // 	[
  // 		{
  // 			image: img2,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "2",
  // 		},
  // 		{
  // 			image: img3,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "3",
  // 		},
  // 		{
  // 			image: img1,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "1",
  // 		},
  // 		{
  // 			image: img1,
  // 			name: "Name of Property",
  // 			location: "Location of Property",
  // 			price: "Price",
  // 			rating: "1",
  // 		},
  // 	],
  // ];

  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const similarProperties = (
    <div className="properties" style={{ gap: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <AiOutlineLeft
          size="32px"
          onClick={() => {
            setIndex((prev) => (prev === 0 ? 2 : prev - 1));
            setFavorites((prev) =>
              prev.map((item) => (item === 0 ? 2 : item - 1))
            );
          }}
        />
      </div>
      <div className="similar-properties">
        {propertyItems.map((item, index) => {
          return (
            <PropertyInfo
              item={item}
              index={index}
              favorites={favorites}
              setFavorites={setFavorites}
              key={index}
              rating={true}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <AiOutlineRight
          size="32px"
          onClick={() => {
            setIndex((prev) => (prev + 1) % 3);
            setFavorites((prev) => prev.map((item) => (item + 1) % 3));
          }}
        />
      </div>
    </div>
  );

  const dosDonts = (
    <div className="dos">
      <div>
        {locationData?.do_and_dont?.do_s?.map((val, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 20fr",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MdDone color="#ff4d4d" size={24} />
            <div>{val}</div>
          </div>
        ))}
      </div>
      <div>
        {locationData?.do_and_dont?.dont_s?.map((val, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 20fr",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ImCross color="#ff4d4d" size={12} />
            <div>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const mostlyBookedFor = [
    "Ad Film Shooting",
    "Birthday Parties",
    "Friends Outings",
    "Web Series Shoot",
    "Music Album Shoot",
  ];

  const cancellationPolicies = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  const [expanded, setExpanded] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const accordion = [
    {
      expanded: expanded[0],
      title: "Description of the property",
      info: locationData?.property_desc?.property_info,
      type: "text",
    },
    {
      expanded: expanded[1],
      title: "Amenities",
      info: locationData?.amenities,
      type: "list",
      columns: true,
    },
    {
      expanded: expanded[2],
      title: "Rules of the host",
      info: locationData?.rules,
      type: "list",
    },
    {
      expanded: expanded[3],
      title: "Unique Features",
      info: locationData?.features,
      type: "list",
    },
    {
      expanded: expanded[4],
      title: "Timings",
      info: [
        `Monday:           ${
          locationData?.timings?.monday?.open
            ? locationData?.timings?.monday?.isSetHours
              ? locationData?.timings?.monday?.time?.start +
                "-" +
                locationData?.timings?.monday?.time?.end
              : "All Day"
            : "Close"
        }`,
        `Tuesday:          ${
          locationData?.timings?.tuesday?.open
            ? locationData?.timings?.tuesday?.isSetHours
              ? locationData?.timings?.tuesday?.time?.start +
                "-" +
                locationData?.timings?.tuesday?.time?.end
              : "All Day"
            : "Close"
        }`,
        `Wednesday:        ${
          locationData?.timings?.wednesday?.open
            ? locationData?.timings?.wednesday?.isSetHours
              ? locationData?.timings?.wednesday?.time?.start +
                "-" +
                locationData?.timings?.wednesday?.time?.end
              : "All Day"
            : "Close"
        }`,
        `Thursday:        ${
          locationData?.timings?.thursday?.open
            ? locationData?.timings?.thursday?.isSetHours
              ? locationData?.timings?.thursday?.time?.start +
                "-" +
                locationData?.timings?.thursday?.time?.end
              : "All Day"
            : "Close"
        }`,
        `Friday:           ${
          locationData?.timings?.friday?.open
            ? locationData?.timings?.friday?.isSetHours
              ? locationData?.timings?.friday?.time?.start +
                "-" +
                locationData?.timings?.friday?.time?.end
              : "All Day"
            : "Close"
        }`,
        `Saturday:         ${
          locationData?.timings?.saturday?.open
            ? locationData?.timings?.saturday?.isSetHours
              ? locationData?.timings?.saturday?.time?.start +
                "-" +
                locationData?.timings?.saturday?.time?.end
              : "All Day"
            : "Close"
        }`,
        `Sunday:           ${
          locationData?.timings?.sunday?.open
            ? locationData?.timings?.sunday?.isSetHours
              ? locationData?.timings?.sunday?.time?.start +
                "-" +
                locationData?.timings?.sunday?.time?.end
              : "All Day"
            : "Close"
        }`,
      ],
      type: "list",
    },
    {
      expanded: expanded[5],
      title: "Location",
      info: locationItem,
      type: "html",
    },
    {
      expanded: expanded[6],
      title: "Do's & Don'ts",
      info: dosDonts,
      type: "html",
    },
    {
      expanded: expanded[7],
      title: "Mostly Booked For",
      info: mostlyBookedFor,
      type: "list",
      columns: true,
    },
    {
      expanded: expanded[8],
      title: "About the host",
      info: hostInfo,
      type: "html",
    },
    {
      expanded: expanded[9],
      title: "Cancellation Policy",
      info: cancellationPolicies,
      type: "list",
    },
  ];

  return (
    <>
      <Navbar extraNavId="id-2" />
      {galleryOn ? (
        <Gallery
          images={images}
          closeGallery={() => {
            setGalleryOn(false);
            scrollToTop();
          }}
        />
      ) : (
        <>
          {locationData && (
            <ImageGrid
              images={images}
              openGallery={() => setGalleryOn(true)}
              locationData={locationData}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
          <BookingForm
            v1={v1}
            v2={v2}
            v3={v3}
            v4={v4}
            v5={v5}
            v6={v6}
            event={event}
            setEvent={setEvent}
            setV1={setV1}
            setV2={setV2}
            setV3={setV3}
            setV4={setV4}
            setV5={setV5}
            AccordionSummary
            setV6={setV6}
            locationData={locationData}
            setTotPrice={setTotPrice}
            tot_price={tot_price}
          />

          <div
            style={{
              width: "80vw",
              margin: "30px auto 50px",
            }}
          >
            {accordion.map((item, index) => (
              <Accordion
                key={index}
                expanded={item.expanded}
                onChange={() =>
                  setExpanded((prev) =>
                    prev.map((exp, i) => (i === index ? !exp : exp))
                  )
                }
              >
                <AccordionSummary
                  sx={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    padding: "10px",
                    marginLeft: "8px",
                  }}
                  expandIcon={<MdExpandMore size="31px" color="black" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingBottom: "30px",
                  }}
                >
                  {item?.type === "list" ? (
                    item?.columns === true ? (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "10px",
                        }}
                      >
                        {item?.info?.map((val, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              lineHeight: "32px",
                            }}
                          >
                            <GoPrimitiveDot color="#ff4d4d" size={16} />
                            <div>{val}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {item?.info?.map((val, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              lineHeight: "32px",
                            }}
                          >
                            <GoPrimitiveDot color="#ff4d4d" />
                            <div>{val}</div>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    item.info
                  )}
                </AccordionDetails>
              </Accordion>
            ))}

            <div
              style={{
                marginTop: "50px",
                width: "100%",
              }}
            >
              <div className="properties--main">Similar Properties</div>
              {similarProperties}
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Property;
