import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: JSON.parse(localStorage.getItem("locationData")),
  location_id: JSON.parse(localStorage.getItem("locationId")),
  citiesOption: JSON.parse(localStorage.getItem("citiesOption")) || [],
  locationTypeOptions: JSON.parse(
    localStorage.getItem("locationTypeOptions")
  ) || [
    { value: "Add New", label: "Add New Location to List" },
    { value: "Apartment Parking", label: "Apartment Parking" },
    { value: "Banquet Halls", label: "Banquet Halls" },
    { value: "Beach House", label: "Beach House" },
    { value: "BT roads (open roads)", label: "BT roads (open roads)" },
    { value: "Bus Stand", label: "Bus Stand" },
    { value: "Civil Court", label: "Civil Court" },
    { value: "College", label: "College" },
    { value: "Convention Centres", label: "Convention Centres" },
    { value: "Corporate Office", label: "Corporate Office" },
    { value: "Dhaba", label: " Dhaba" },
    { value: "Event auditoriums", label: "Event auditoriums" },
    { value: "Factory", label: "Factory" },
    { value: "Farmhouse", label: " Farmhouse" },
    { value: "Farmland", label: "Farmland" },
    { value: "Forest", label: "Forest" },
    { value: "Forest Stay", label: "Forest Stay" },
    { value: "Gated Community", label: "Gated Community" },
    { value: "Hospital", label: "Hospital" },
    { value: "Hotel", label: "Hotel" },
    { value: "Hotel Stay", label: "Hotel Stay" },
    { value: "Industry", label: "Industry" },
    { value: "Jail", label: "Jail" },
    { value: "Lake House", label: "Lake House" },
    { value: "Lake Stay", label: "Lake Stay" },
    { value: "Lakes", label: "Lakes" },
    { value: "Manduva House", label: "Manduva House" },
    { value: "Movie Theatres", label: "Movie Theatres" },
    { value: "Police station", label: "Police station" },
    { value: "Pubs", label: "Pubs" },
    { value: "Railway station", label: "Railway station" },
    { value: "Resorts", label: "Resorts" },
    { value: "Restaurants", label: "Restaurants" },
    { value: "Rich house", label: "Rich house" },
    { value: "School", label: "School" },
    { value: "Shooting floors", label: "Shooting floors" },
    { value: "Shopping Malls", label: "Shopping Malls" },
    { value: "Sports auditoriums", label: "Sports auditoriums" },
    { value: "Studio Floors", label: "Studio Floors" },
    { value: "TV Stations", label: "TV Stations" },
    { value: "Village atmosphere", label: "Village atmosphere" },
    { value: "Weekend Farming", label: "Weekend Farming" },
    { value: "Wooden house", label: "Wooden house" },
  ],
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.locationData = action.payload;
      localStorage.setItem("locationData", JSON.stringify(state.locationData));
    },
    addLocationId: (state, action) => {
      state.location_id = action.payload;
      localStorage.setItem("locationId", JSON.stringify(state.location_id));
    },
    addCity: (state, action) => {
      state.citiesOption = [
        ...new Set([...state.citiesOption, action.payload]),
      ];
      localStorage.setItem("citiesOption", JSON.stringify(state.citiesOption));
    },
    addLocationType: (state, action) => {
      state.locationTypeOptions = [
        ...new Set([
          ...state.locationTypeOptions,
          { value: action.payload, label: action.payload },
        ]),
      ];
      localStorage.setItem(
        "locationTypeOptions",
        JSON.stringify(state.locationTypeOptions)
      );
    },
  },
});

export const { addLocation, addLocationId, addCity, addLocationType } =
  locationSlice.actions;
export const selectLocationData = (state) => state.location.locationData;
export const selectLocationId = (state) => state.location.location_id;
export const selectCities = (state) => state.location.citiesOption;
export const selectLocationTypeOptions = (state) =>
  state.location.locationTypeOptions;
export default locationSlice.reducer;
