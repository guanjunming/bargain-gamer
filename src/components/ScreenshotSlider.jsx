import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { getGameScreenshots } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const ScreenshotSlider = ({ gameId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  const {
    data: screenshots,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => getGameScreenshots(gameId),
  });

  if (isLoading) return <p>Loading screenshots...</p>;
  if (error) return <p>Error loading screenshots.</p>;

  return (
    <div className="game-screenshots w-full max-w-5xl mx-auto mt-8">
      {/* Main Swiper */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={10}
        slidesPerView={1}
        className="main-swiper mb-4 rounded-lg overflow-hidden shadow-lg"
      >
        {screenshots.map((screenshot) => (
          <SwiperSlide key={screenshot.id}>
            <img
              src={screenshot.image}
              alt="Game screenshot"
              className="w-full h-96 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper} // Ensure Swiper instance is only set if initialized
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        // className="h-1/5"
        watchSlidesProgress={true}
      >
        {screenshots.map((screenshot) => (
          <SwiperSlide
            key={screenshot.id}
            className="rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={screenshot.image}
              alt="Thumbnail"
              className="w-full h-24 object-cover opacity-75 transition-opacity duration-200 hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenshotSlider;
