import { Swiper, SwiperSlide } from "swiper/react";
import { CarExampleCard } from "../../shared/components/CarExampleCard/CarExampleCard";
import s from "./fourthPart.module.scss";
import { Autoplay, Pagination } from "swiper/modules";

const data = [
  {
    img: "https://cdn.riastatic.com/photosnew/auto/photo/Hyundai_Tucson__523144308f.jpg",
    carName: "Hyundai Tucson Sel",
    parameters: {
      fuelType: "Бензин",
      year: "2018",
      drive: "Передній",
      mileage: "40285mi",
      gearbox: "Автомат",
      type: "SUV",
      // engineDisplacement: "2.0",
    },
    price: {
      finalBid: "6900$",
      inUkraine: "18130$",
      inPoland: "16500$",
    },
  },
  {
    img: "https://cdn2.riastatic.com/photosnew/auto/photo/audi_q5__410391477f.jpg",
    carName: "Audi Q5",
    parameters: {
      fuelType: "Бензин",
      year: "2016",
      drive: "Передній",
      mileage: "63285mi",
      gearbox: "Автомат",
      type: "SUV",
      // engineDisplacement: "2.0",
    },
    price: {
      finalBid: "6900$",
      inUkraine: "18130$",
      inPoland: "16500$",
    },
  },
  {
    img: "https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg",
    carName: "Example",
    parameters: {
      fuelType: "Бензин",
      year: "2016",
      drive: "Передній",
      mileage: "63285mi",
      gearbox: "Автомат",
      type: "SUV",
      // engineDisplacement: "2.0",
    },
    price: {
      finalBid: "6900$",
      inUkraine: "18130$",
      inPoland: "16500$",
    },
  },
];

export const FourthPart = () => {
  const swiperMarkup = data.map((item, idx) => (
    <SwiperSlide key={idx}>
      <CarExampleCard
        img={item.img}
        carName={item.carName}
        fuelType={item.parameters.fuelType}
        year={item.parameters.year}
        drive={item.parameters.drive}
        mileage={item.parameters.mileage}
        gearbox={item.parameters.gearbox}
        type={item.parameters.type}
        finalBid={item.price.finalBid}
        inUkraine={item.price.inUkraine}
        inPoland={item.price.inPoland}
      />
    </SwiperSlide>
  ));
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Приклади</p>
      <Swiper
        className={s.swiper}
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
