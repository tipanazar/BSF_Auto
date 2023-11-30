import { Link } from "react-router-dom";

import { Icon } from "../../shared/components/Icon";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header} id="header">
      <Link className={s.headerLogoLink} href="/">
        <Icon className={s.headerLogoLinkIcon} iconId="headerLogo" />
      </Link>
    </header>
  );
};
