import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.movies.trailerVideo);

    const movieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json();
        const filteredData = json.results.filter((video) => video.type == 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        !trailer && movieTrailer();
    },[]);

};

export default useMovieTrailer