import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    const trailer = useSelector(store => store.movies.movieTrailer);
    useMovieTrailer(movieId);

  return (
    <>
        {/* Aspect ratio container */}
        <div className="w-full h-full aspect-video">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    </>
  )
}

export default VideoBackground