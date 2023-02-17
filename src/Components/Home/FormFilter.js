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

useEffect(()=>{
if(searchEvent!=="all"){
  changeEvent({value:searchEvent})
}
},[])

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
  };

  function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
      element = element.label.charAt(0).toUpperCase() + element.label.slice(1).toLowerCase();
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }


  useEffect(() => {
    const fetchData = async () => {
      const cities = await getCities();
      const loctypes = await getLocTypes();
      console.log(cities.data)
      let cityData = removeDuplicates(cities.data)
      let cData = [];
      cityData.forEach(element => {
        cData.push({
          value: element,
          label: element
        });
      });
      setDropdownCity(cData)
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
