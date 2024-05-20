import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authClient, guestClient } from "../../axios";


const initialState = {
    loading: false,
    success: false,
    error: null,
    jobs: [],
    currentJob: null,
};

export const createJob = createAsyncThunk(
    'job/create',
    async (jobData) => {
        try {
             const response = await authClient.post('/jobs', jobData);
             return response.data;
        } catch (error) {
             throw new Error('Error during job creation' + error);
        }
   }
);

export const updateJob = createAsyncThunk(
    'job/update',
    async (jobData) => {
        try {
             const response = await authClient.put(`/jobs/${jobData.id}`, jobData);
             return response.data;
        } catch (error) {
             throw new Error('Error during job update');
        }
   }
);

export const deleteJob = createAsyncThunk(
    'job/delete',
    async (jobId) => {
        try {
             const response = await authClient.delete(`/jobs/${jobId}`);
             return response.data;
        } catch (error) {
             throw new Error('Error during job deletion');
        }
   }
);

export const fetchJobs = createAsyncThunk(
    'job/fetchAll',
    async () => {
        try {
             const response = await guestClient.get('/jobs');
             return response.data;
        } catch (error) {
             throw new Error('Error during job fetching');
        }
   }
);

export const fetchJob = createAsyncThunk(
    'job/fetch',
    async (jobId) => {
        try {
             const response = await guestClient.get(`/jobs/${jobId}`);
             return response.data;
        } catch (error) {
             throw new Error('Error during job fetching');
        }
   }
)


const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(createJob.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })

            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })

            .addCase(fetchJob.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchJob.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.currentJob = action.payload;
            })
            .addCase(fetchJob.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })
    }
});


export default jobSlice.reducer;