import { Link } from "react-router-dom";

import logo from "../../images/header_logo.png";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Link className={s.headerLogoLink} href="/">
        <img className={s.headerLogo} src={logo} alt="logo" />
      </Link>
    </header>
  );
};
