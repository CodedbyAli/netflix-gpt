import { useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  if (!nowPlayingMovies || !popularMovies || !topRatedMovies) return;
  return (
    <>
      {/* Images container */}
      <div className="bg-[#141414] w-full">
        {/* Now Playing Movies */}
        <div className="max-w-[90rem] mx-auto py-6 h-screen">
          <h3 className="relative -top-48 text-white text-xl font-bold z-10">
            Now Playing
          </h3>
          <div className="flex gap-4 -mt-44 relative">
            <Swiper
              slidesPerView={9}
              spaceBetween={15}
              // mousewheel={false}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              modules={[Navigation]}
              className="showBannerSwiper -my-[10px]"
            >
              {nowPlayingMovies &&
                nowPlayingMovies.map((movie) => (
                  <SwiperSlide key={movie.id} className="flex-none">
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev-custom absolute p-1 cursor-pointer shadow rounded-full top-[40%] m-2 bg-white/50 z-50 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>

            <div className="swiper-button-next-custom absolute p-1 cursor-pointer shadow rounded-full top-[40%] m-2 z-50 bg-white/50 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          {/* Popular Movies */}
          <h3 className="text-white text-xl font-bold mb-4 mt-12">
            Popular Movies for You
          </h3>
          <div className="flex gap-4 relative">
            <Swiper
              slidesPerView={9}
              spaceBetween={15}
              // mousewheel={false}
              modules={[Navigation]}
              className="showBannerSwiper -my-[10px]"
              navigation={{
                nextEl: ".swiper-second-button-next-custom",
                prevEl: ".swiper-second-button-prev-custom",
              }}
            >
              {popularMovies &&
                popularMovies.map((movie) => (
                  <SwiperSlide key={movie.id} className="flex-none">
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-second-button-prev-custom absolute p-1 cursor-pointer shadow rounded-full top-[40%] m-2 bg-white/50 z-50 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>

            <div className="swiper-second-button-next-custom absolute p-1 cursor-pointer shadow rounded-full top-[40%] m-2 z-50 bg-white/50 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          {/* Top Rated Movies */}
          <h3 className="text-white text-xl font-bold mb-4 mt-12">
            Top Rated Movies for You
          </h3>
          <div className="flex gap-4 relative">
            <Swiper
              slidesPerView={9}
              spaceBetween={15}
              // mousewheel={false}
              modules={[Navigation]}
              className="showBannerSwiper -my-[10px]"
              navigation={{
                nextEl: ".swiper-third-button-next-custom",
                prevEl: ".swiper-third-button-prev-custom",
              }}
            >
              {topRatedMovies &&
                topRatedMovies.map((movie) => (
                  <SwiperSlide key={movie.id} className="flex-none">
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-third-button-prev-custom absolute p-1 cursor-pointer shadow rounded-full top-[40%] m-2 bg-white/50 z-50 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>

            <div className="swiper-third-button-next-custom absolute p-1 cursor-pointer shadow rounded-full top-[40%] m-2 z-50 bg-white/50 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
