import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CardElement } from "../../shared/components/CardElement/CardElement";

import s from "./secondPart.module.scss";

export const SecondPart = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.firstTitle}>Етапи покупки з нами</p>
      <ul className={s.cardsList}>
        <li className={s.cardsListItem}>
          <CardElement
            title="1й крок"
            svg={"buySteps_1"}
            description="Згідно з вашими вимогами збираються пропозиції з аукціонів"
          />
        </li>
        <li className={s.cardsListItem}>
          <CardElement
            title="2й крок"
            svg={"message"}
            description="Прозорий розрахунок кожного етапу до отримання готового автомобіля"
          />
        </li>
        <li className={s.cardsListItem}>
          <CardElement
            title="3й крок"
            svg={"buySteps_3"}
            description="Укладення договору"
          />
        </li>
        <li className={s.cardsListItem}>
          <CardElement
            title="4й крок"
            svg={"buySteps_4"}
            description="Перевірка та покупка автомобіля на аукціоні"
          />
        </li>
        <li className={s.cardsListItem}>
          <CardElement
            title="5й крок"
            svg={"buySteps_5"}
            description="Доставка в Україну, Польщу, ремонт, постановка авто на номери"
          />
        </li>
        <li className={s.cardsListItem}>
          <CardElement
            title="6й крок"
            svg={"buySteps_6"}
            description="Ви насолоджуетесь своїм авто"
          />
        </li>
      </ul>
      <p className={s.secondTitle}>Наша компанія гарантує</p>
      <div className={s.swiperWrapper}>
        <Swiper
          className={s.swiper}
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            700: {
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
          <SwiperSlide>
            <CardElement
              title="ВІДКРИТІСТЬ"
              description="Наші спеціалісти відповідають на Ваші питання 24/7."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardElement
              title="НАЙКРАЩУ ЦІНУ НА АВТО"
              description="Ми не купуємо перше авто, яке знайшли. Чітко розуміємо бюджет. Гарантуємо, що розрахункова ціна без ремонту не буде вище фактичної."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardElement
              title="ЯКІСНУ ПЕРЕВІРКУ"
              description="Ми перевіряємо історію обслуговування авто, історію продажів, історію ДТП."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardElement
              title="ПРОЗОРІСТЬ"
              description="Всі платежі сплачуються поетапно за фактом виконання робіт."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
