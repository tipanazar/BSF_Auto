import { Link } from "react-router-dom";
import s from "./firstPart.module.scss";

export const FirstPart = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.headersWrapper}>
        <h1 className={s.mainTitle}>BSF Auto</h1>
        <h2 className={s.secondTitle}>BidShipFixAuto</h2>
      </div>
      <p className={s.description}>
        Пропонуємо своїм клієнтам сервіс з покупки, доставки та ремонту
        автомобілів, мотоциклів, квадроциклів з США та Канади. Допомагаємо з
        пошуком та вибором для вас авто під ключ.
      </p>
      <Link className={s.linkToForm} href="#form">
        НАДІСЛАТИ ЗАПИТ
      </Link>
      <h3 className={s.thirdTitle}>Автомобілі з США в Польщу та Україну</h3>
    </div>
  );
};
