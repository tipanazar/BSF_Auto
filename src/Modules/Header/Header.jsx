import { Link } from "react-router-dom";

import { Icon } from "../../shared/components/Icon";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header} id="header">
      <Link className={s.headerLogoLink} href="/">
        <Icon className={s.headerLogoLinkIcon} iconId="headerLogo" />
      </Link>
      <address className={s.headerLinksWrapper}>
        <div className={s.headerLinkWrapper}>
          <Icon className={s.headerLinkIcon} iconId="phone" />
          <p className={s.headerLinkTextBlock}>
            <b className={s.headerLinkTextBold}>Зателефонуйте нам</b>
            <a className={s.headerLink} href="tel:+380669811870">
              +38(066) 98 11 870
            </a>
            <a className={s.headerLink} href="tel:+48452550302">
              +48 452 550 302
            </a>
          </p>
        </div>
        <div className={`${s.headerLinkWrapper} ${s.headerEmailLink}`}>
          <Icon className={s.headerLinkIcon} iconId="message" />
          <p className={s.headerLinkTextBlock}>
            <b className={s.headerLinkTextBold}>Зв'яжіться з нами</b>
            <a className={s.headerLink} href="mailto:bsfauto.pl.ua@gmail.com">
              bsfauto.pl.ua@gmail.com
            </a>
          </p>
        </div>
      </address>
    </header>
  );
};
