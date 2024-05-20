import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { guestClient } from '../../axios';

export const fetchResults = createAsyncThunk(
    'searchJobs/fetchResults',
    async ({ query, city, specialty, education, employment }) => {
        const response = await guestClient.get('/search/jobs', {
            params: { query, city, specialty, education, employment }
        });
        return response.data;
    }
);

const searchJobsSlice = createSlice({
  name: 'searchJobs',
  initialState: {
    results: [],
    filters: {
      query: '',
      city: '',
      specialty: '',
      education: '',
      employment: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
        state.filters.query = action.payload;
    },
    setSpecialty(state, action) {
        state.filters.specialty = action.payload;
    },
    setEducation(state, action) {
        state.filters.education = action.payload;
    },
    setEmployment(state, action) {
        state.filters.employment = action.payload;
    },
    restoreFilters(state) {
        state.filters.query = '';
        state.filters.city = '';
        state.filters.specialty = '';
        state.filters.education = '';
        state.filters.employment = '';
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.results = action.payload;
      })
      .addCase(fetchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
});

export const { setQuery, setSpecialty, setEducation, setEmployment } = searchJobsSlice.actions;
export default searchJobsSlice.reducer;
