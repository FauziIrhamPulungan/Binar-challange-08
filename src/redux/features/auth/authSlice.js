import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../Firebase";

let dataLocal = false;
const dataLocalStr = localStorage.getItem("data");
if (dataLocalStr) dataLocal = JSON.parse(dataLocalStr);

const initialState = {
  login: dataLocal,
  Inputlogin: !!dataLocal,
  setInputlogin: true,
  show: false,
  loading: false,
};

export const getLogin = createAsyncThunk(
  "login/getLogin",
  async ({ emailInput, passwordInput }) => {
    if (!emailInput || !passwordInput) throw alert("masukin input yang bener");
    const data = await logInWithEmailAndPassword(emailInput, passwordInput);
    if (!data) throw new Error("gada data");
    return data;
  }
);

export const getRegist = createAsyncThunk(
  "login/getRegist",
  async ({ nameInput, EmailregistInput, PasswordregistdInput }) => {
    if (!nameInput || !EmailregistInput || !PasswordregistdInput)
      throw alert("masukin input yang benar");

    const data = await registerWithEmailAndPassword(
      nameInput,
      EmailregistInput,
      PasswordregistdInput
    );
    if (!data) throw new Error("gada data");

    return {
      user: {
        email: data.user.email,
      },
    };
  }
);

export const getOauth = createAsyncThunk("login/getOauth", async () => {
  const data = await signInWithGoogle();

  return {
    user: {
      name: data.user.displayName,
      email: data.user.email,
      photoURL: data.user.photoURL,
    },
  };
});

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.Inputlogin = false;
    },
  },
  extraReducers: {
    // login
    [getLogin.pending]: (state) => {
      state.loading = true;
    },
    [getLogin.fulfilled]: (state, { payload }) => {
      state.login = payload;
      state.Inputlogin = true;
      localStorage.setItem("data", JSON.stringify(payload));
    },

    [getLogin.rejected]: (state, { payload }) => {
      console.log(payload);
    },

    // regist
    [getRegist.pending]: (state) => {
      state.loading = true;
    },
    [getRegist.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.login = payload;
      state.Inputlogin = true;
      localStorage.setItem("data", JSON.stringify(payload));
    },

    [getRegist.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },

    // oauth
    [getOauth.pending]: (state) => {
      console.log("pending");
      state.loading = true;
    },
    [getOauth.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.login = payload;
      state.Inputlogin = true;
      localStorage.setItem("data", JSON.stringify(payload));
    },
    [getOauth.rejected]: (state) => {
      console.log("rejected");
      state.loading = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
