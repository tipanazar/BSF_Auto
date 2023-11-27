import { Icon } from "../../shared/components/Icon";
import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <address>
        <Icon className={s.socialIcon} iconId="instagram" />
        <Icon className={s.socialIcon} iconId="facebook" />
        <Icon className={s.socialIcon} iconId="telegram" />
        <Icon className={s.socialIcon} iconId="whatsapp" />
        <Icon className={s.socialIcon} iconId="messenger" />
      </address>
      {/* <Icon className={s.scrollUpIcon} iconId="dropdownIndicator" /> */}
    </div>
  );
};
