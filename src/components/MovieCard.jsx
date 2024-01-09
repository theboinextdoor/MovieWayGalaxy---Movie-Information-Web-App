import { MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const MovieCard = ({ data }) => {
 
  let img = "https://image.tmdb.org/t/p/w500";
 

  return (
    <div className="bg-black shadow-lg cursor-pointer w-[345px] md:w-[39%] h-[449px] sm:w-1/2  lg:w-[228px] xl:w-1/5 border rounded-lg box-border overflow-hidden p-2 mx-auto my-8 border-black">
         <Link to={`/movie/${data.id}`}
         >
      <img
        src={data.poster_path !== null ? (img + data.poster_path) : (<MdOutlineErrorOutline className="text-white"/>)}
        alt="poster"
        className=" w-full h-5/6  md:h-84 lg:h-[356px] xl:h-80 object-cover object-top"
      />
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-full p-4 flex items-center justify-around text-white">
          <h4 
          className=" w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 text-center truncate cursor-pointer"
          >

            
            {data.title}
          </h4>
          <div className="border rounded-full bg-red-600">
            <p className=" p-2 ">{data.vote_average}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
