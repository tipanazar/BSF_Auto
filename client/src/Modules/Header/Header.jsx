import { Link } from "react-router-dom";

import s from "./header.module.scss";
import { Icon } from "../../shared/components/Icon";

export const Header = () => {
  return (
    <header className={s.header} id="header">
      <Link className={s.headerLogoLink} href="/">
        <Icon className={s.headerLogoLinkIcon} iconId="headerLogo"/>
      </Link>
    </header>
  );
};
