import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  _id: null,
  user_verfied: false,
};
if (localStorage.getItem("user")) {
  initialState = JSON.parse(localStorage.getItem("user"));
}
export const UserInfo = createSlice({
  name: "UserInfo",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    Logout: (state, action) => {
      state._id = null;
      state.user_verfied = false;
      localStorage.removeItem("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails, Logout } = UserInfo.actions;

export default UserInfo.reducer;
