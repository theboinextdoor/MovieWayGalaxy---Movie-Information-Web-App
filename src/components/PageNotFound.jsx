import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="  h-screen flex flex-col items-center justify-center text-white mx-5 md:mx-24 lg:mx-40 xl:mx-96">
      <div className='flex flex-col justify-between items-center '>
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
           404 
         Page Not Found
          </span>{" "}
        </h1>
      <p className="p-2 mb-4">The page you are looking for might be unavailable or does not exist.</p>
      </div>
      <div>
      <Link to="/">
      <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Go to Home
        </button>
      </Link>
      </div>
    </div>
  )
}

export default PageNotFound