import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieURL from "../Apis/movieURL"
import { APIKey } from "../Apis/movieAPIKey"
import axios from 'axios';



export const fetchAsyncMovies = createAsyncThunk("movie/fetchAsyncMovies",
    async (path) => {
        try {
            const response = await movieURL.get(path + APIKey)
            // const data = await response.data;
            return response.data || []
        } catch (error) {
            console.log(error)
            throw new Error;
        }
    }
)

export const fetchAsyncMovieDetails = createAsyncThunk('movie/fetchAsyncMovieDetails',
    async (id) => {
        try {

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ab1b3e1e356cfdb1afec0c0960b0da35`)
            // const data = await response.data;
            return response.data || [];
        } catch (error) {
            console.log(error)
            throw new Error;
        }
    }
)



const initialState = {
    movies: {},
    movieDetails: {},
    loading: false,
    error: null,
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state) => {
            console.log("fetchAsyncMovies Status Pending")
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                console.log("fetchAsyncMovies Status Fullfilled")
                state.loading = false;
                state.movies = action.payload
            })
            .addCase(fetchAsyncMovies.rejected, (state, action) => {
                console.log("fetchAsyncMovies Status Failed")
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data"
            })
            .addCase(fetchAsyncMovieDetails.pending, (state) => {
                console.log("fetchAsyncMovieDetails Status Pending")
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAsyncMovieDetails.fulfilled, (state, action) => {
                console.log("fetchAsyncMovieDetails Status Fullfilled")
                state.loading = false;
                state.movieDetails = action.payload
            })
            .addCase(fetchAsyncMovieDetails.rejected, (state, action) => {
                console.log(" fetchAsyncMovieDetails Status Failed")
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data"
            })
    }
})

export const movieSliceAction = movieSlice.actions;
export default movieSlice;
