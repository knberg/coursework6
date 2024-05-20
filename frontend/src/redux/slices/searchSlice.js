import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { guestClient } from '../../axios';

export const fetchJobs = createAsyncThunk(
    'search/fetchJobs',
    async (_, { getState }) => {

      const state = getState();
      const { query } = state.search;
      const { city, specialty, education, employment } = state.search.jobs.filters;

      const response = await guestClient.get('/search/jobs', {
        params: { query, city, specialty, education, employment }
      });
      return response.data;
    }
);


export const fetchResumes = createAsyncThunk(
  'search/fetchResumes',
  async ({ query, experience, specialty, education, salary }) => {
    const response = await guestClient.get('/search/resumes', {
      params: { query, experience, specialty, education, salary }
    });
    return response.data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchBy: 'jobs',
    query: '',
    jobs: {
      results: [],
      filters: {
        city: '',
        specialty: '',
        education: '',
        employment: '',
      },
    },
    resumes: {
      results: [],
      filters: {
        experience: '',
        specialty: '',
        education: '',
        salary: '',
      },
    },
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setSearchBy(state, action) {
      state.searchBy = action.payload;
    },
    setJobCity(state, action) {
      state.jobs.filters.city = action.payload;
    },
    setJobSpecialty(state, action) {
      state.jobs.filters.specialty = action.payload;
    },
    setJobEducation(state, action) {
      state.jobs.filters.education = action.payload;
    },
    setJobEmployment(state, action) {
      state.jobs.filters.employment = action.payload;
    },
    setResumeSpecialty(state, action) {
      state.resumes.filters.specialty = action.payload;
    },
    setResumeEducation(state, action) {
      state.resumes.filters.education = action.payload;
    },
    setResumeExperience(state, action) {
      state.resumes.filters.experience = action.payload;
    },
    setResumeSalary(state, action) {
      state.resumes.filters.salary = action.payload;
    },
    clear(state) {
      state.query = '';
      state.jobs.filters = {
        city: '',
        specialty: '',
        education: '',
        employment: '',
      };
      state.resumes.filters = {
        experience: '',
        specialty: '',
        education: '',
        salary: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.results = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchResumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResumes.fulfilled, (state, action) => {
        state.loading = false;
        state.resumes.results = action.payload;
      })
      .addCase(fetchResumes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { 
  setQuery, 
  setSearchBy, 
  setJobCity, 
  setJobSpecialty, 
  setJobEducation, 
  setJobEmployment, 
  setResumeSpecialty, 
  setResumeEducation, 
  setResumeExperience, 
  setResumeSalary 
} = searchSlice.actions;

export default searchSlice.reducer;
