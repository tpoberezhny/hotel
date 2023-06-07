import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: "../../image/heroSlider/1.jpg",
    btnText: "See Our Rooms",
  },
  {
    title: "Luxury Awaits: Your Perfect Vacation Destination",
    bg: "../../image/heroSlider/2.jpg",
    btnText: "See Our Rooms",
  },
  {
    title: "Your Oasis of Relaxation, Fine Dining, and Comfort",
    bg: "../../image/heroSlider/3.jpg",
    btnText: "See Our Rooms",
  },
];

function HeroSlider() {
  const swiperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "100%",
  };

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"cube"}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide style={swiperStyle} key={index}>
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[5px] mb-5">
                Just Enjoy and relax
              </div>
              <h1 className="lg:text-[45px] text-[30px] tracking-[3px] max-w-[920px] uppercase">
                {title}
              </h1>
              <button className="btn btn-primary mx-auto p-5 rounded-lg mt-8 tracking-[2px]">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="object-cover h-full w-full"
                src={bg}
                alt="Image of the room"
              />
            </div>
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSlider;
