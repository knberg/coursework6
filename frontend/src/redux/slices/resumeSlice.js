import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authClient, guestClient } from "../../axios";


const initialState = {
    loading: false,
    success: false,
    error: null,
    resumes: [],
    currentResume: null,
};

export const createResume = createAsyncThunk(
    'resume/create',
    async (resumeData) => {
        try {
             const response = await authClient.post('/resume', resumeData);
             return response.data;
        } catch (error) {
             throw new Error('Error during resume creation' + error);
        }
   }
);

export const updateResume = createAsyncThunk(
    'resume/update',
    async (resumeData) => {
        try {
             const response = await authClient.put(`/resumes/${resumeData.id}`, resumeData);
             return response.data;
        } catch (error) {
             throw new Error('Error during resume update');
        }
   }
);

export const deleteResume = createAsyncThunk(
    'resume/delete',
    async (resumeId) => {
        try {
             const response = await authClient.delete(`/resumes/${resumeId}`);
             return response.data;
        } catch (error) {
             throw new Error('Error during resume deletion');
        }
   }
);

export const fetchResumes = createAsyncThunk(
    'resume/fetchAll',
    async () => {
        try {
             const response = await guestClient.get('/resumes');
             return response.data;
        } catch (error) {
             throw new Error('Error during resume fetching');
        }
   }
);

export const fetchResume = createAsyncThunk(
    'resume/fetch',
    async (resumeId) => {
        try {
             const response = await guestClient.get(`/resumes/${resumeId}`);
             return response.data;
        } catch (error) {
             throw new Error('Error during resume fetching');
        }
   }
)


const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(createResume.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(createResume.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(createResume.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })

            .addCase(fetchResumes.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchResumes.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.resumes = action.payload;
            })
            .addCase(fetchResumes.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })

            .addCase(fetchResume.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchResume.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.currentResume = action.payload;
            })
            .addCase(fetchResume.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })
    }
});


export default resumeSlice.reducer;