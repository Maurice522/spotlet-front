import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: null,
  location_id: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => { 
      state.locationData = action.payload;
    },
    addLocationId: (state, action) => {
      state.location_id = action.payload;
    },
  },
});

export const { addLocation, addLocationId } = locationSlice.actions;
export const selectLocationData = (state) => state.location.locationData;
export const selectLocationId = (state) => state.location.location_id;
export default locationSlice.reducer;
