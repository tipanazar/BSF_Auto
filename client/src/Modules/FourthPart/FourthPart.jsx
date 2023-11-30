import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { CarExampleCard } from "../../shared/components/CarExampleCard/CarExampleCard";
import { carsExamplesData } from "../../shared/dataArrays";

import s from "./fourthPart.module.scss";

export const FourthPart = () => {
  const swiperMarkup = carsExamplesData.map((item, idx) => (
    <SwiperSlide key={idx}>
      <CarExampleCard
        img={item.img}
        carName={item.carName}
        fuelType={item.parameters.fuelType}
        year={item.parameters.year}
        drive={item.parameters.drive}
        mileage={item.parameters.mileage}
        gearbox={item.parameters.gearbox}
        engineDisplacement={item.parameters.engineDisplacement}
        finalBid={item.price.finalBid}
        inUkraine={item.price.inUkraine}
        inPoland={item.price.inPoland}
        linkOnCar={item.linkOnCar}
      />
    </SwiperSlide>
  ));
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Доставлені авто під ключ</p>
      <Swiper
        className={s.swiper}
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={{
          890: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {swiperMarkup}
      </Swiper>
    </div>
  );
};
