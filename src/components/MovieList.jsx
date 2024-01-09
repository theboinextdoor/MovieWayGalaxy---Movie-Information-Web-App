import MovieCard from "./MovieCard";
import PageNotFound from "./PageNotFound";
import { useSelector } from "react-redux";


const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  console.log("Movies: ", movies);
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black flex flex-wrap md:p-8 gap-6">
      {movies.movies &&
      movies.movies.results &&
      movies.movies.results.length !== 0 ? (
        movies.movies.results.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default MovieList;
