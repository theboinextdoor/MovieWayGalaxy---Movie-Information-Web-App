import React, { useEffect, useRef, useState } from "react";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { fetchAsyncMovies } from "../store/movieSlice";


let requiredPath = "/discover/movie?sort_by=popularity.desc"


const Nav = () => {
  const mySearch = useRef(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentURL, setCurrentURL] = useState(requiredPath)


  const menu = [
    { name: "Popular" },
    { name: "Theatre" },
    { name: "Kids" },
    { name: "Comedie" },
    { name: "Drama" },
  ];

  const getURLPath = (movieName) => {
    if(movieName === "Popular"){
      console.log("Popular Button Clicked ")
      requiredPath = "/discover/movie?sort_by=popularity.desc"
    }
    if(movieName === "Theatre"){
      console.log("Theatre Button Clicked ")
      requiredPath = "/discover/movie?include_adult=false&include_video=true&language=en-US&page=2&sort_by=popularity.desc"
    }
    if(movieName === "Kids"){
      console.log("Kids Button Clicked ")
      requiredPath = "/discover/movie/?certification_country=US&certification.lte=G&sort_by=popularity.desc"
    }
    if(movieName === "Comedie"){
      console.log("Comedie Button Clicked ")
      requiredPath = "/discover/movie/?with_genres=35&with_cast=23659&sort_by=revenue.desc"
    }
    if(movieName=== "Drama"){
      console.log("Drama Button Clicked ")
      requiredPath = "/discover/movie/?with_genres=18&primary_release_year=2023"
    }

    setCurrentURL(requiredPath);
  }

  const handleClickEvent = () => {
    console.log("Button Clicked")
    requiredPath = `/search/movie?query=${mySearch.current.value}`
    setCurrentURL(requiredPath)
    console.log("Updated Path: ", requiredPath);
    mySearch.current.value = ""
  }

  useEffect(() => {
    dispatch(fetchAsyncMovies(currentURL))
  } , [dispatch, currentURL])

 

  return (
    <header className="p-4">
      {/* logo */}
      <div className="container flex justify-between items-center">
        <div className=" md:mr-10">
          <Link to="/">
            <BiSolidCameraMovie className="w-8 md:w-12 ml-1 h-20 md:h-12 hover:text-red-700" />
          </Link>
        </div>

        {/* Input Field */}
        <div className="flex justify-between items-center mr-[82px]">
          <input
            type="text"
            placeholder="Enter the Movie"
            className="p-1 mr-2 ml-10 md:ml-1 rounded-md border outline-none lg:w-96"
            ref={mySearch}
          />
          <button 
            className="text-red-500 p-1 hover:text-white"
            onClick={handleClickEvent}
            >
            <FaSearch />
          </button>
        </div>

        {/* Menu */}
        <div
          className="md:hidden text-white mr-6 text-3xl cursor-pointer right-2 z-20 sticky"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
        <ul
          className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen pt-10 z-10 ${
            !open ? "right-[-100%] " : "right-0"
          }`}
        >
          {menu.map((menu, index) => (
            <li
              key={index}
              className="md:inline-block  md:ml-10 ml-5 md:my-0 my-5  border-b-2 border-transparent hover:border-white duration-300"
            >
              <Link
                to="/movie-listing"
                className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3"
                
                onClick={() => getURLPath(menu.name)}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;

//  -> Hamburger button
//   -> Close button
//   -> App icon
