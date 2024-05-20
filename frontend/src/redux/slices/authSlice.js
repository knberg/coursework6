import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { guestClient, authClient } from '../../axios.js';


const initialState = {
     isAuth: false,
     user: null,
     loading: false,
     error: null,
};


export const register = createAsyncThunk(
     'auth/register',
     async (userData) => {
          try {
               const response = await guestClient.post('/register', userData);
               return response.data;
          } catch (error) {
               throw new Error('Error during registration');
          }
     }
);

export const login = createAsyncThunk(
     'auth/login',
     async (userData) => {
          try {
               const response = await guestClient.post('/login', userData);
               return response.data;
          } catch (error) {
               throw new Error('Error during login');
          }
     }
);

export const logout = createAsyncThunk(
     'auth/logout', 
     async (_ ) => {
     try {
          await authClient.post('/logout');
          return null;
     } catch (error) {
          throw new Error('Error during logout');
     }
});

const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {
          checkAuth: (state, action) => {
               state.isAuth = true;
               state.user = action.payload.user
               localStorage.setItem('token', action.payload.accessToken);
          }
     },
     extraReducers: (builder) => {
          builder
          .addCase(register.pending, (state) => {
               state.loading = true;
               state.error = null;
          })
          .addCase(register.fulfilled, (state, action) => {
               state.loading = false;
               state.isAuth = true;
               state.user = action.payload.user;
               localStorage.setItem('token', action.payload.accessToken);
          })
          .addCase(register.rejected, (state, action) => {
               state.loading = false;
               state.error = action.error.message;
          })
          .addCase(login.pending, (state) => {
               state.loading = true;
               state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
               state.loading = false;
               state.isAuth = true;
               state.user = action.payload.user;
               localStorage.setItem('token', action.payload.accessToken);
          })
          .addCase(login.rejected, (state, action) => {
               state.loading = false;
               state.error = action.error.message;
          })
          .addCase(logout.pending, (state) => {
               state.loading = true;
               state.error = null;
          })
          .addCase(logout.fulfilled, (state) => {
               state.loading = false;
               state.isAuth = false;
               state.user = null;
               localStorage.removeItem('token');
          })
          .addCase(logout.rejected, (state, action) => {
               state.loading = false;
          })
     }
});

export const { checkAuth } = authSlice.actions;
export default authSlice.reducer;