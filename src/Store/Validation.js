import { createSlice } from "@reduxjs/toolkit";

const defaultState = { headerItems: false, id: [], userIsLoggedIn: null };

const validSlice = createSlice({
  name: "validation",
  initialState: defaultState,
  reducers: {
    // login(state) {
    //   state.headerItems = true;
    // },
    emailData(state, action) {
      const newId = action.payload;
      console.log(action.payload);
      // const emailSlice = emailData[0].email.slice(0, -10);
      // const emailSlice = newId[0].email.slice(0, -10);

      // console.log(emailSlice);
      localStorage.setItem("email", newId.emailIds);
      state.id.push({
        email: newId.emailIds,
      });
    },

    loginHandler(state, action) {
      const tokenId = action.payload;
      // console.log(tokenId.token);
      localStorage.setItem("token", tokenId.token);
      const initialToken = localStorage.getItem("token");
      console.log(initialToken);
      state.userIsLoggedIn = !!initialToken;
    },
    logoutHandler(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");

      const initialToken = localStorage.getItem("token");
      state.userIsLoggedIn = !!initialToken;
      console.log(state.userIsLoggedIn);
    },
  },
});

export const validActions = validSlice.actions;

export default validSlice.reducer;
