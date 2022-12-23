import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/Styles/Home/formFilter.css";
import Select from "react-select";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { selectCities } from "../../redux/slices/locationSlice";
import { getCities, getLocTypes } from "../../services/api";
// import { selectCities } from "../../redux/slices/locationSlice";

const FormFilter = ({
  fullScreen,
  homepage,
  searchEvent,
  setSearchEvent,
  searchLocation,
  setSearchLocation,
  searchCity,
  setSearchCity,
}) => {
  const [active, setActive] = useState(false);
  const [event, setEvent] = useState("all");
  const [location, setLocation] = useState("all");
  const [city, setCity] = useState("all");
  const [dropdownCity, setDropdownCity] = useState();
  const [dropdownLocation, setDropdownLocation] = useState();
  // const citiesOption = useSelector(selectCities);

  const navigate = useNavigate();

  const changeEvent = (e) => {
    setEvent(e.value);
    !homepage && setSearchEvent(e.value);
    // !homepage && setSearchLocation("all");
    // !homepage && setSearchCity("all");
  };

  const changeLocation = (e) => {
    setLocation(e.value);
    !homepage && setSearchLocation(e.value);
  };

  const changeCity = (e) => {
    setCity(e.value);
    !homepage && setSearchCity(e.value);
  };

  const options = [
    { value: "FilmShooting", label: "Film Shooting" },
    { value: "CorporateBooking", label: "Corporate Booking" },
    { value: "IndividualBooking", label: "Individual Booking" },
  ].sort((a, b) => {
    let fa = a.label.toLowerCase(),
      fb = b.label.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  const filterOptions = {
    Activity: [
      [{ value: "", label: "" }],
      [
        { value: "Film Shoot", label: "Film Shoot" },
        { value: "Web Series Shoot", label: "Web Series Shoot" },
        { value: "Ad Film Shoot", label: "Ad Film Shoot" },
        { value: "Music Album Shoot", label: "Music Album Shoot" },
        { value: "Green Screen", label: "Green Screen" },
        { value: "Photoshoot", label: "Photoshoot" },
      ].sort((a, b) => {
        let fa = a.label.toLowerCase(),
          fb = b.label.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      }),
      [
        { value: "Party", label: "Party" },
        { value: "Product Release / Demo", label: "Product Release / Demo" },
        { value: "Awards Ceremony", label: "Awards Ceremony" },
        { value: "Conference", label: "Conference" },
      ].sort((a, b) => {
        let fa = a.label.toLowerCase(),
          fb = b.label.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      }),
      [
        { value: "Birthday Party", label: "Birthday Party" },
        {
          value: "Family / Friends OutlinedFlag",
          label: "Family / Friends OutlinedFlag",
        },
        {
          value: "Conference / Counselling",
          label: "Conference / Counselling",
        },
      ].sort((a, b) => {
        let fa = a.label.toLowerCase(),
          fb = b.label.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      }),
    ],

    // Location: [
    //   [{ value: "", label: "" }],
    //   [
    //     { value: "Rich house", label: "Rich house" },
    //     { value: "Police station", label: "Police station" },
    //     { value: "Manduva House", label: "Manduva House" },
    //     { value: "Industry", label: "Industry" },
    //     { value: "Farmland", label: "Farmland" },
    //     { value: "Farmhouse", label: "Farmhouse" },
    //     { value: "Wooden house", label: "Wooden house" },
    //     { value: "Forest", label: "Forest" },
    //     { value: "Lakes", label: "Lakes" },
    //     { value: "Hotel", label: "Hotel" },
    //     { value: "School", label: "School" },
    //     { value: "College", label: "College" },
    //     { value: "Corporate Office", label: "Corporate Office" },
    //     { value: "Factory", label: "Factory" },
    //     { value: "Apartment", label: "Apartment" },
    //     { value: "Apartment Parking", label: "Apartment Parking" },
    //     { value: "Movie Theatres", label: "Movie Theatres" },
    //     { value: "TV Stations", label: "TV Stations" },
    //     { value: "Studio Floors", label: "Studio Floors" },
    //     { value: "Village atmosphere", label: "Village atmosphere" },
    //     { value: "BT roads (open roads)", label: "BT roads (open roads)" },
    //     { value: "Hospital", label: "Hospital" },
    //     { value: "Civil Court", label: "Civil Court" },
    //     { value: "Sports auditoriums", label: "Sports auditoriums" },
    //     { value: "Event auditoriums", label: "Event auditoriums" },
    //     { value: "Pubs", label: "Pubs" },
    //     { value: "Restaurants", label: "Restaurants" },
    //     { value: "Dhaba", label: "Dhaba" },
    //     { value: "Jail", label: "Jail" },
    //     { value: "Railway station", label: "Railway station" },
    //     { value: "Bus Stand", label: "Bus Stand" },
    //     { value: "Shopping Malls", label: "Shopping Malls" },
    //     { value: "Gated Community", label: "Gated Community" },
    //     { value: "Shooting floors", label: "Shooting floors" },
    //   ].sort((a, b) => {
    //     let fa = a.label.toLowerCase(),
    //       fb = b.label.toLowerCase();

    //     if (fa < fb) {
    //       return -1;
    //     }
    //     if (fa > fb) {
    //       return 1;
    //     }
    //     return 0;
    //   }),
    //   [
    //     { value: "Resorts", label: "Resorts" },
    //     { value: "Weekend Farming", label: "Weekend Farming" },
    //     { value: "Farm house", label: "Farm house" },
    //     { value: "Wooden house", label: "Wooden house" },
    //     { value: "Forest Stay", label: "Forest Stay" },
    //     { value: "Lake Stay", label: "Lake Stay" },
    //     { value: "Hotel Stay", label: "Hotel Stay" },
    //     { value: "Convention Centres", label: "Convention Centres" },
    //     { value: "Banquet Halls", label: "Banquet Halls" },
    //     { value: "Pubs", label: "Pubs" },
    //     { value: "Restaurants", label: "Restaurants" },
    //   ].sort((a, b) => {
    //     let fa = a.label.toLowerCase(),
    //       fb = b.label.toLowerCase();

    //     if (fa < fb) {
    //       return -1;
    //     }
    //     if (fa > fb) {
    //       return 1;
    //     }
    //     return 0;
    //   }),

    //   [
    //     { value: "Resorts", label: "Resorts" },
    //     { value: "Weekend Farming", label: "Weekend Farming" },
    //     { value: "Farm house", label: "Farm house" },
    //     { value: "Wooden house", label: "Wooden house" },
    //     { value: "Forest Stay", label: "Forest Stay" },
    //     { value: "Lake Stay", label: "Lake Stay" },
    //     { value: "Hotel Stay", label: "Hotel Stay" },
    //     { value: "Convention Centres", label: "Convention Centres" },
    //     { value: "Banquet Halls", label: "Banquet Halls" },
    //     { value: "Restaurants", label: "Restaurants" },
    //   ].sort((a, b) => {
    //     let fa = a.label.toLowerCase(),
    //       fb = b.label.toLowerCase();

    //     if (fa < fb) {
    //       return -1;
    //     }
    //     if (fa > fb) {
    //       return 1;
    //     }
    //     return 0;
    //   }),
    // ],
  };


  useEffect(() => {
    const fetchData = async () => {
      const cities = await getCities();
      const loctypes = await getLocTypes();
      setDropdownCity(cities.data)
      setDropdownLocation(loctypes.data)
    }
    fetchData();
  }, [])

  // useEffect(() => {
  //   let newCity = [...city];
  //   citiesOption.forEach((item) => {
  //     newCity.push({ value: item, label: item });
  //   });
  //   setCity(newCity);
  // }, []);

  return (
    <div
      id="form-wrapper"
      style={
        fullScreen === true
          ? {
            width: "78.7vw",
            borderRadius: "12px",
            marginTop: "10px",
            // boxShadow:
          }
          : {}
      }
    >
      <form
        id="form"
        style={
          fullScreen === true
            ? {
              width: "99%",
              borderRadius: "12px",
            }
            : {}
        }
        onMouseEnter={() => {
          setActive(true);
        }}
        onClick={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setActive(false);
        }}
      >
        <div>
          <label
            htmlFor="what"
            className={active === true ? "focus-label" : "form-filter-label"}
          >
            Event
          </label>
          <Select
            id="what"
            name="what"
            options={options.sort((a, b) => a.label - b.label)}
            defaultValue={searchEvent}
            className={active === true ? "focus-select" : "form-filter-select"}
            onChange={changeEvent}
          ></Select>
          {
            !homepage &&
            <p
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                setSearchEvent('all')
                setSearchLocation('all')
                setSearchCity('all')
                // window.location.reload(true)
              }}>
              Clear
            </p>
          }
        </div>
        <div>
          <label
            htmlFor="which"
            className={active === true ? "focus-label" : "form-filter-label"}
          >
            Activity
          </label>
          <Select
            id="which"
            name="which"
            options={
              event == "FilmShooting"
                ? filterOptions.Activity[1]
                : event == "CorporateBooking"
                  ? filterOptions.Activity[2]
                  : filterOptions.Activity[3]
            }
            defaultValue=""
            isDisabled={event === "all" ? true : false}
            className={active === true ? "focus-select" : "form-filter-select"}
          ></Select>
          {event === "all" && (
            <p style={{ fontSize: "15px", color: "grey" }}>
              Please select event first
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="where"
            className={active === true ? "focus-label" : "form-filter-label"}
          >
            Location
          </label>
          <Select
            id="where"
            name="where"
            options={dropdownLocation}
            defaultValue={searchLocation}
            isDisabled={event === "all" ? true : false}
            className={active === true ? "focus-select" : "form-filter-select"}
            onChange={changeLocation}
          ></Select>
          {event === "all" && (
            <p style={{ fontSize: "15px", color: "grey" }}>
              Please select event first
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="where"
            className={active === true ? "focus-label" : "form-filter-label"}
          >
            City
          </label>
          <Select
            id="when"
            name="when"
            options={dropdownCity}
            defaultValue={searchCity}
            // isDisabled={event === "all" ? true : false}
            className={active === true ? "focus-select" : "form-filter-select"}
            onChange={changeCity}
          ></Select>
          {/* {event === "all" && (
            <p style={{ fontSize: "15px", color: "grey" }}>
              Please select event first
            </p>
          )} */}
        </div>

        <Link
          to={`/search/${event}/${location}/${city}`}
          style={{
            textDecoration: "none",
          }}
        >
          <div id="submit">Search</div>
        </Link>
      </form>
    </div>
  );
};

export default FormFilter;
