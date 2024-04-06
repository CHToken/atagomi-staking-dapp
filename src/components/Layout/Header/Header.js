import s from "./Header.module.css";

import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { label: "PORTFOLIO", active: true, url: "/portfolio" },
    { label: "Staking", active: true, url: "/" },
  ];
  const location = useLocation();
  return (
    <div className={s.root}>
      <nav className={s.nav}>
        <div className={s.itemsWrapper}>
          {navLinks.map((link, index) => (
            <Link to={link.url}>
              <div
                className={cn(
                  s.item,
                  location.pathname === link.url && s.active
                )}
                key={index}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
        <div className={s.connectWallet}>CONNECT WALLET</div>
      </nav>
    </div>
  );
};

export default Header;
