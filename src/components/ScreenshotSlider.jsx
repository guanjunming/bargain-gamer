import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { useState } from "react";
import imgPlaceholder from "../assets/image_not_available.png";

const ScreenshotSlider = ({ gameName, screenshots }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className="w-full bg-gray-900 pb-1">
      <Swiper
        style={{
          "--swiper-navigation-color": "#d5d7d8",
          "--swiper-navigation-size": "2rem",
          fontWeight: 900,
          userSelect: "none",
        }}
        modules={[Navigation, Thumbs, EffectFade, Autoplay]}
        centeredSlides={true}
        loop={screenshots.length > 1}
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          slideThumbActiveClass: "active-thumbnail-frame",
        }}
        spaceBetween={10}
        className="overflow-hidden mb-1"
      >
        {screenshots.length > 0 ? (
          screenshots.map((screenshot, index) => (
            <SwiperSlide key={screenshot.id}>
              <img
                src={screenshot.image}
                alt={`${gameName} Screenshot ${index + 1}`}
                className="w-full h-full object-cover aspect-video"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img
              src={imgPlaceholder}
              alt="Image not available"
              className="w-full h-full object-cover bg-gray-300"
            />
          </SwiperSlide>
        )}
      </Swiper>

      <Swiper
        modules={[Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={5}
        watchSlidesProgress={true}
      >
        {screenshots.length > 0
          ? screenshots.map((screenshot, index) => (
              <SwiperSlide
                key={screenshot.id}
                className="cursor-pointer border-2 border-transparent"
              >
                <img
                  src={screenshot.image}
                  alt={`${gameName} Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover aspect-video"
                />
              </SwiperSlide>
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgPlaceholder}
                  alt="Image not available"
                  className="w-full h-full object-cover bg-gray-300"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default ScreenshotSlider;
