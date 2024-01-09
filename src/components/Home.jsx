import { useEffect } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-div flex justify-center items-center h-screen">
      <div className="flex flex-col text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Movie
          </span>{" "}
          Galaxy
        </h1>

        <Link to="/movie-listing">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore My Website
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
