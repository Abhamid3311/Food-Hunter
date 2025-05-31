import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    isLoading: false,
    user: null,
    isError: false,
  },
};

export const login = createAsyncThunk("Auth/login", async (email) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/users/login/${email}`,
    {
      credentials: "include",
    }
  );
  const data = await res.json();

  return data?.data;
});
export const logout = createAsyncThunk("Auth/logout", async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );
  const data = await res.json();

  return data?.data;
});
export const getMe = createAsyncThunk("Auth/getMe", async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/users/me`, {
    credentials: "include",
  });
  const data = await res.json();

  return data?.data;
});
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.auth.user = action.payload),
        (state.auth.isLoading = false),
        (state.auth.isError = false);
    },
  },
  extraReducers: (builder) => {
    builder
      // login reducer
      .addCase(login.pending, (state) => {
        (state.auth.isLoading = true),
          (state.auth.user = null),
          (state.auth.isError = false);
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.auth.isLoading = false),
          (state.auth.user = action.payload),
          (state.auth.isError = false);
      })
      .addCase(login.rejected, (state) => {
        (state.auth.isLoading = false),
          (state.auth.user = null),
          (state.auth.isError = false);
      })
      // get me redcuer
      .addCase(getMe.pending, (state) => {
        (state.auth.isLoading = true),
          (state.auth.user = null),
          (state.auth.isError = false);
      })
      .addCase(getMe.fulfilled, (state, action) => {
        (state.auth.isLoading = false),
          (state.auth.user = action.payload),
          (state.auth.isError = false);
      })
      .addCase(getMe.rejected, (state) => {
        (state.auth.isLoading = false),
          (state.auth.user = null),
          (state.auth.isError = false);
      })
      // logout reducer
      .addCase(logout.pending, (state) => {
        (state.auth.isLoading = true),
          (state.auth.user = null),
          (state.auth.isError = false);
      })
      .addCase(logout.fulfilled, (state) => {
        (state.auth.isLoading = false), (state.auth.user = null);
      })
      .addCase(logout.rejected, (state) => {
        (state.auth.isLoading = false),
          (state.auth.user = null),
          (state.auth.isError = true);
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
