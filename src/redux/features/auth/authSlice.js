import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  async ({ passwordInput, emailInput }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: emailInput,
      password: passwordInput,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      "https://notflixtv.herokuapp.com/api/v1/users/login",
      requestOptions
    );
    const data = await response.json();
    return data;
  }
);

export const getRegist = createAsyncThunk(
  "login/getRegist",
  async ({
    FirstnameInput,
    LastnameInput,
    EmailregistInput,
    PasswordregistdInput,
    PasswordconfirmationInput,
  }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: FirstnameInput,
      last_name: LastnameInput,
      email: EmailregistInput,
      password: PasswordregistdInput,
      password_confirmation: PasswordconfirmationInput,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://notflixtv.herokuapp.com/api/v1/users",
      requestOptions
    );
    const data = await response.json();
    return data;
  }
);

export const getOauth = createAsyncThunk("login/getOauth", async (data) => {
  return data;
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
      state.loading = false;
      state.login = payload;
      if (payload.status === true) {
        state.show = false;
        state.Inputlogin = true;
        localStorage.setItem("data", JSON.stringify(payload));
        localStorage.setItem("token", JSON.stringify(payload.data.token));
      }
      state.emailInput = undefined;
      state.passwordInput = undefined;
    },
    [getLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },

    // regist
    [getRegist.pending]: (state) => {
      state.loading = true;
    },
    [getRegist.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.login = payload;
      if (payload.status === true) {
        state.show = false;
        state.Inputlogin = true;
        localStorage.setItem("data", JSON.stringify(payload));
        localStorage.setItem("token", JSON.stringify(payload.data.token));
      }
      state.FirstnameInput = undefined;
      state.LastnameInput = undefined;
      state.EmailregistInput = undefined;
      state.PasswordregistdInput = undefined;
      state.PasswordconfirmationInput = undefined;
    },

    [getRegist.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },

    // oauth
    [getOauth.pending]: (state) => {
      state.loading = true;
    },
    [getOauth.fulfilled]: (state, { payload }) => {
      const data = { first_name: "Google", last_name: "user" };
      state.loading = false;
      state.login = { data };
      if (!!payload.credential === true) {
        state.show = false;
        state.Inputlogin = true;
        localStorage.setItem("token", JSON.stringify(payload.credential));
        localStorage.setItem("data", JSON.stringify({ data }));
      }
    },
    [getOauth.rejected]: (state) => {
      state.loading = false;
      // state.user = payload;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
