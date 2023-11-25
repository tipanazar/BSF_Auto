import { Icon } from "../Icon";
import s from "./cardElement.module.scss";

export const CardElement = ({ title, svg, description }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{title}</p>
      {svg && <Icon className={s.svg} iconId={svg} />}
      <p className={s.description}>{description}</p>
    </div>
  );
};
