import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies);
    if(!movies) return;
    
    const {title,overview,id} = movies[6];

  return (
    <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
            <VideoBackground movieId={id} />
        </div>
        <div className="relative z-10">
            <VideoTitle title={title} description={overview} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-5"></div>
    </div>
  )
}

export default MainContainer