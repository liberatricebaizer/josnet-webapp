import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { server } from "../../server";
import {
  getAllEventsShopFailed,
  getAllEventsShopRequest,
  getAllEventsShopSuccess,
} from "../reducers/event";

// Create event
export const createEvent = createAsyncThunk(
  "events/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/event/create-event`, data);
      return response.data.event;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllEventsShop = (shopId) => async (dispatch) => {
  try {
    dispatch(getAllEventsShopRequest());

    if (!shopId) {
      throw new Error("Shop ID is required"); // Handle missing shop ID
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_DOMIN}/event/get-all-events/${shopId}`
    );

    dispatch(getAllEventsShopSuccess(data.events));
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    dispatch(getAllEventsShopFailed(errorMessage));
  }
};

// Delete event of a shop
export const deleteEvent = createAsyncThunk(
  "events/delete",
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_DOMIN}/event/delete-shop-event/${eventId}`,
        {
          withCredentials: true,
        }
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Get all events
export const getAllEvents = createAsyncThunk(
  "events/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/event/get-all-events`);
      return response.data.events;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Slice
const eventSlice = createSlice({
  name: "events",
  initialState: {
    isLoading: false,
    events: [],
    message: null,
    error: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create event
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events.push(action.payload); // Add the new event to the list
        state.message = "Event created successfully.";
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get all events of a shop
      .addCase(getAllEventsShop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEventsShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload; // Update the events list
      })
      .addCase(getAllEventsShop.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete event
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload; // Set success message
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get all events
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload; // Update the events list
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearErrors } = eventSlice.actions;
export default eventSlice.reducer;
