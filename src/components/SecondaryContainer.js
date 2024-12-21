import { useSelector } from "react-redux"
import { IMAGE_URL } from "../utils/constants";

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies?.nowPlayingMovies);
    if(!movies) return;
  return (
    <>
  {/* Title on top */}
  <h3 className="relative -top-48 left-4 text-white text-xl font-bold z-10">
    Now Playing
  </h3>

  {/* Images container */}
  <div className="flex gap-4 overflow-x-auto -mt-44 relative">
    {movies &&
      movies.map((movie) => (
        <div key={movie.id} className="flex-none">
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
          />
        </div>
      ))}
  </div>
    </>
  )
}

export default SecondaryContainer