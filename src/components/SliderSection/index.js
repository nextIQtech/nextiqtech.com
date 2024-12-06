import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageSlider = () => {
  const images = [
    "next-iq/images/slider-img.jpg",
    "next-iq/images/slider-img.jpg",
    "next-iq/images/slider-img.jpg",
  ];

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Explore Our Gallery
      </h1>
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg shadow-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
