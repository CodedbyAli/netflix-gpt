import { IMAGE_URL } from "../utils/constants"
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MovieList = ({title, movies}) => {
  return (
    <>
        <h3 className="text-white text-xl font-bold mb-4 mt-8">{title}</h3>
        <div className="flex">
        <Swiper
            slidesPerView={Math.min(movies.length, 8)} //Adjust slide preview dynamically
            spaceBetween={15}
            modules={[Navigation]}
            className="showBannerSwiper -my-[10px]"
        >
            {movies.map((movie)=>(
                <SwiperSlide key={movie.id} className="flex-none">
                    <img
                        src={`${IMAGE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg"
                    />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </>
  )
}

export default MovieList