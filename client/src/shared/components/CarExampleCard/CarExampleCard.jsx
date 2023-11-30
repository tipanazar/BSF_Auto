import { Icon } from "../Icon";
import s from "./carExampleCard.module.scss";

export const CarExampleCard = ({
  img,
  carName,
  fuelType,
  year,
  drive,
  mileage,
  gearbox,
  engineDisplacement,
  finalBid,
  inUkraine,
  inPoland,
}) => {
  return (
    <div className={s.wrapper}>
      <img src={img} alt="Фото авто" className={s.carImage} width={300} />
      <div className={s.secondWrapper}>
        <p className={s.carName}>{carName}</p>
        <ul className={s.parametersList}>
          <li className={s.parametersListItem}>
            <Icon className={s.parametersListItemIcon} iconId="carCard_1" />
            <p className={s.parametersListItemText}>{drive}</p>
          </li>
          <li className={s.parametersListItem}>
            <Icon className={s.parametersListItemIcon} iconId="carCard_2" />
            <p className={s.parametersListItemText}>{fuelType}</p>
          </li>
          <li className={s.parametersListItem}>
            <Icon className={s.parametersListItemIcon} iconId="carCard_3" />
            <p className={s.parametersListItemText}>{mileage}</p>
          </li>
          <li className={s.parametersListItem}>
            <Icon className={s.parametersListItemIcon} iconId="carCard_4" />
            <p className={s.parametersListItemText}>{gearbox}</p>
          </li>
          <li className={s.parametersListItem}>
            <Icon className={s.parametersListItemIcon} iconId="carCard_5" />
            <p className={s.parametersListItemText}>{engineDisplacement}</p>
          </li>
          <li className={s.parametersListItem}>
            <Icon className={s.parametersListItemIcon} iconId="carCard_6" />
            <p className={s.parametersListItemText}>{year}</p>
          </li>
        </ul>
        <ul className={s.priceList}>
          <li className={s.priceListItem}>
            <b>{finalBid}</b>
          </li>
          <li className={s.priceListItem}>&#40;Фін. ставка&#41;</li>
          <li className={s.priceListItem}>
            <b>{inUkraine}</b>
          </li>
          <li className={s.priceListItem}>
            &#40;Вартість під ключ в Україні&#41;
          </li>
          <li className={s.priceListItem}>
            <b>{inPoland}</b>
          </li>
          <li className={s.priceListItem}>
            &#40;Вартість під ключ в Польщі&#41;
          </li>
        </ul>
      </div>
    </div>
  );
};
