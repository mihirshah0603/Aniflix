import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";

const initialState = {
  movies: [],
  generesLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("aniflix/genres", async () => {
  try {
    const response = await axios.get(
      `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
    );
    return response.data.genres;
  } catch (error) {
    throw error;
  }
});

const arrayOfMovieData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) moviesGenres.push(name.name);
    });
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name || movie.original_title,
        image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 2),
      });
    }
  });
};

const getMovieData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
    try {
      const response = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
      arrayOfMovieData(response.data.results, moviesArray, genres);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk("aniflix/trending", async ({ type }, myThunk) => {
  try {
    const { aniflix: { genres } } = myThunk.getState();
    return getMovieData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`, genres, true);
  } catch (error) {
    throw error;
  }
});

const AniflixSlice = createSlice({
  name: "Aniflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.generesLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    aniflix: AniflixSlice.reducer,
  },
});
