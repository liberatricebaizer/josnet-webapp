import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  events: [],
  allEvents: [],
  event: null,
  success: false,
  error: null,
  message: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventCreateRequest: (state) => {
      state.isLoading = true;
    },
    eventCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.event = [...action.payload];
      state.success = true;
    },
    eventCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    // Get all events of shop
    getAllEventsShopRequest: (state) => {
      state.isLoading = true;
    },
    getAllEventsShopSuccess: (state, action) => {
      state.isLoading = false;
      state.events = [...action.payload];
    },
    getAllEventsShopFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete event of a shop
    deleteEventRequest: (state) => {
      state.isLoading = true;
    },
    deleteEventSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteEventFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get all events
    getAllEventsRequest: (state) => {
      state.isLoading = true;
    },
    getAllEventsSuccess: (state, action) => {
      state.isLoading = false;
      state.allEvents = [...action.payload];
    },
    getAllEventsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Export actions and reducer
export const {
  eventCreateRequest,
  eventCreateSuccess,
  eventCreateFail,
  getAllEventsShopRequest,
  getAllEventsShopSuccess,
  getAllEventsShopFailed,
  deleteEventRequest,
  deleteEventSuccess,
  deleteEventFailed,
  getAllEventsRequest,
  getAllEventsSuccess,
  getAllEventsFailed,
  clearErrors,
} = eventSlice.actions;

export default eventSlice.reducer;
