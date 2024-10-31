import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/hero/hero_1.jpg";
import heroImg2 from "../assets/hero/hero_2.jpg";
import heroImg3 from "../assets/hero/hero_3.jpg";
import heroImg4 from "../assets/hero/hero_4.jpg";
import heroImg5 from "../assets/hero/hero_5.jpg";
import heroImg6 from "../assets/hero/hero_6.jpg";
import heroImg7 from "../assets/hero/hero_7.jpg";
import heroImg8 from "../assets/hero/hero_8.jpg";
import heroImg9 from "../assets/hero/hero_9.jpg";
import heroImg10 from "../assets/hero/hero_10.jpg";

const HeroBanner = () => {
  const imageClassName = "w-full h-auto aspect-[1.8/1] object-cover bg-center";

  return (
    <section className="flex flex-col-reverse justify-center md:flex-row py-6 px-3.5 md:px-5 items-center gap-8 mb-12">
      <article className="w-full md:w-2/5">
        <div className="flex flex-col">
          <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl text-white text-center md:text-left">
            Your <span className="text-blue-500">Ultimate</span>
          </h2>
          <h2 className="font-bold text-4xl lg:text-5xl text-white text-center md:text-left">
            Game Database
          </h2>
          <p className="md:text-lg ml:text-2xl mt-4 text-center md:text-left text-gray-300">
            Discover your next adventure.
          </p>
          <p className="md:text-lg ml:text-2xl text-center md:text-left text-gray-300">
            Uncover the best deals in gaming.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-4 md:mt-10 lg:mt-14">
          <Link
            to="/games"
            className="px-4 py-3 text-lg text-white font-medium shadow-md text-shadow rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-300 hover:to-blue-600"
          >
            Explore Games
          </Link>
        </div>
      </article>
      <div className="w-full md:w-3/5 card-box-shadow">
        <Swiper
          modules={[EffectFade, Autoplay]}
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={5}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <img src={heroImg1} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg2} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg3} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg4} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg5} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg6} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg7} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg8} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg9} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg10} alt="heroimage" className={imageClassName} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroBanner;
