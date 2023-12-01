import s from "./firstPart.module.scss";

export const FirstPart = () => {
  return (
    <div className={s.parentWrapper}>
      <div className={s.wrapper}>
        <div className={s.headersWrapper}>
          <h1 className={s.mainTitle}>BSF Auto</h1>
          <h2 className={s.secondTitle}>BidShipFixAuto</h2>
        </div>
        <h3 className={`${s.thirdTitle} ${s.thirdTitleDesktop}`}>
          Автомобілі з США в Польщу та Україну
        </h3>
        <p className={s.description}>
          Пропонуємо своїм клієнтам сервіс з покупки, доставки та ремонту
          автомобілів, мотоциклів, квадроциклів з США та Канади. Допомагаємо з
          пошуком та вибором для вас авто під ключ.
        </p>
        <a className={s.linkToForm} href="#thirdPartForm">
          НАДІСЛАТИ ЗАПИТ
        </a>
        <h3 className={`${s.thirdTitle} ${s.thirdTitleMobile}`}>
          Автомобілі з США в Польщу та Україну
        </h3>
      </div>
    </div>
  );
};
