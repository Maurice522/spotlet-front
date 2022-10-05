import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: JSON.parse(localStorage.getItem('locationData')),
  location_id: JSON.parse(localStorage.getItem('locationId')),
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => { 
      state.locationData = action.payload;
      localStorage.setItem('locationData', JSON.stringify(state.locationData));
    },
    addLocationId: (state, action) => {
      state.location_id = action.payload;
      localStorage.setItem('locationId', JSON.stringify(state.location_id));
    },
  },
});

export const { addLocation, addLocationId } = locationSlice.actions;
export const selectLocationData = (state) => state.location.locationData;
export const selectLocationId = (state) => state.location.location_id;
export default locationSlice.reducer;
