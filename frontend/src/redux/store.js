import { configureStore } from "@reduxjs/toolkit";
import resumeReducer  from "./slices/resumeSlice";
import jobReducer  from "./slices/jobSlice";
import authReducer from './slices/authSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        resume: resumeReducer,
        job: jobReducer,
        search: searchReducer,
    }
});

export default store;