import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import HomeGameCard from "./HomeGameCard";
import { Link } from "react-router-dom";

const HomeGameCarousel = ({ games, title, linkUrl }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="uppercase font-semibold flex justify-between items-center">
        <h2 className="uppercase font-semibold text-white">{title}</h2>
        <div className="text-sm">
          <Link
            to={linkUrl}
            className="px-4 py-0.5 border border-gray-400 hover:border-white text-gray-300 hover:text-white"
          >
            <span>BROWSE MORE</span>
          </Link>
        </div>
      </div>
      <div className="relative overflow-visible">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-sides-offset": "-35px",
            "--swiper-navigation-top-offset": "25%",
            "--swiper-navigation-size": "28px",
            "--swiper-pagination-bottom": "-32px",
            "--swiper-pagination-bullet-opacity": "0.4",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-width": "15px",
            "--swiper-pagination-bullet-height": "9px",
            "--swiper-pagination-bullet-border-radius": "2px",
            fontWeight: "900",
            userSelect: "none",
          }}
          modules={[Navigation, Pagination]}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          slidesPerGroup={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              navigation: {
                enabled: false,
              },
            },
            480: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              navigation: {
                enabled: false,
              },
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              navigation: {
                enabled: false,
              },
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              navigation: {
                enabled: true,
              },
            },
          }}
          spaceBetween={8}
          className="custom-swiper"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <HomeGameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeGameCarousel;
