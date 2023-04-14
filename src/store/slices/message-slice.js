import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  errorMessage: "",
  showAlert: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    setErrorMessage: (state, action) => {
      return { errorMessage: action.payload };
    },
    setShowAlert: (state, action) => {
      console.log("setShowAlert", action.payload);
      state.showAlert = action.payload;
    },
    clearMessage: () => {
      return { errorMessage: "", message: "" };
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setErrorMessage, setMessage, clearMessage, setShowAlert } =
  actions;
export default reducer;
