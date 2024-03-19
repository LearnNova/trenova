import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload.data.user;
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.data.user)
      );

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime);
    },
    setTecherCredentials: (state, action) => {
      state.userInfo = action.payload.data.teacher;
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.data.teacher)
      );

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime);
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout, setTecherCredentials } =
  authSlice.actions;

export default authSlice.reducer;
