import { Icon } from "../../shared/components/Icon";

import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <address className={s.linksWrapper}>
        <a className={s.socialLink} href="https://instagram.com/bsf.auto?utm_source=qr">
          <Icon className={s.socialIcon} iconId="instagram" />
        </a>
        <a className={s.socialLink} href="https://t.me/Danil_lobanov7">
          <Icon className={s.socialIcon} iconId="telegram" />
        </a>
        <a className={s.socialLink} href="https://wa.me/+380669811870">
          <Icon className={s.socialIcon} iconId="whatsapp" />
        </a>
        {/* <a className={s.socialLink} href="">
          <Icon className={s.socialIcon} iconId="messenger" />
        </a>
        <a className={s.socialLink} href="">
          <Icon className={s.socialIcon} iconId="facebook" />
        </a> */}
      </address>
      <a className={s.scrollUpButton} href="#header">
        <Icon className={s.scrollUpIcon} iconId="dropdownIndicator" style={{transform: "rotate(180deg)"}} />
      </a>
    </footer>
  );
};
