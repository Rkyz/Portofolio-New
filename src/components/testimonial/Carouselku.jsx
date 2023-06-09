import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { CardTitle, CardText } from "reactstrap";

import { EffectCoverflow, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Carousel.css";

export default function App() {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  const toggleActiveCard = (index) => {
    setActiveCardIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const isCardActive = (index) => {
    return activeCardIndex === index;
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        mousewheel={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card">
              <div className="-swiper-card-body">
                <div className={`swiper-card-content ${isCardActive(index) ? "active" : ""}`}>
                  <CardTitle tag="h5">Card {index + 1}</CardTitle>
                  <CardText>This is the content of Card {index + 1}.</CardText>
                  {isCardActive(index) ? (
                    <button className="btn-close" onClick={() => toggleActiveCard(index)}>
                      +
                    </button>
                  ) : (
                    <button className="btn-open" onClick={() => toggleActiveCard(index)}>
                      -
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
