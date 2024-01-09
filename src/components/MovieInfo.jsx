import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMovieDetails } from "../store/movieSlice";
import PageNotFound from "./PageNotFound";

const MovieInfo = () => {
  const img = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchAsyncMovieDetails(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {
      movieDetails.poster_path === null ? (
        <PageNotFound />
      ) : (
        <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 flex flex-col p-4 md:flex-row-reverse min-h-full">
          <div className="flex-1 md:mt-6 md:p-4 p-10">
            <img
              src={img + movieDetails.poster_path}
              alt="movie-poster"
              className=""
            />
          </div>
          <div className="section-left flex-1 md:mt-6 md:p-4 sm:p-10">
            <div className="movie-title text-white flex flex-col gap-3 ">
              <h1 className="text-4xl ">Title - {movieDetails.title}</h1>
              <h1>{movieDetails.overview}</h1>
              <h1>Release date - {movieDetails.release_date}</h1>
              <h1>Original-language - {movieDetails.original_language}</h1>
              <h1>Adult- {movieDetails.adult ? "True" : "False"}</h1>
              <h1>Popularity - {movieDetails.popularity}</h1>
              <h1>Runtime -{movieDetails.runtime} min</h1>
              <h1>Rating - {movieDetails.vote_average}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
{
  /*  */
}
