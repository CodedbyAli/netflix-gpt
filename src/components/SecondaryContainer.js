import { useSelector } from "react-redux"
import { IMAGE_URL } from "../utils/constants";

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store?.movies?.popularMovies);
    const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);
    if(!nowPlayingMovies || !popularMovies || !topRatedMovies) return;
  return (
    <>

      {/* Images container */}
      <div className="bg-[#141414] w-[92rem]">
        {/* Now Playing Movies */}
        <h3 className="relative -top-48 text-white text-xl font-bold z-10">
          Now Playing
        </h3>
        <div className="flex gap-4 -mt-44 relative">
          {nowPlayingMovies &&
            nowPlayingMovies.map((movie) => (
              <div key={movie.id} className="flex-none">
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>

        {/* Popular Movies */}
        <h3 className="text-white text-xl font-bold mb-4 mt-12">
          Popular Movies for You
        </h3>
        <div className="flex gap-4">
          {popularMovies &&
            popularMovies.map((movie) => (
              <div key={movie.id} className="flex-none">
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>

        {/* Top Rated Movies */}
        <h3 className="text-white text-xl font-bold mb-4 mt-12">
          Top Rated Movies for You
        </h3>
        <div className="flex gap-4">
          {topRatedMovies &&
            topRatedMovies.map((movie) => (
              <div key={movie.id} className="flex-none">
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>
  </div>
    </>
  )
}

export default SecondaryContainer