import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logo from "../../components/header/Logo";
import IconGroup from "../../components/header/IconGroup";
import NavMenu from "../../components/header/NavMenu";
import MobileMenu from "../../components/header/MobileMenu";
import LanguagChanger from "../../components/header/sub-components/LanguagChanger";

const HeaderTwo = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className="header-area clearfix header-hm9 transparent-bar">
      <div className="container">
        <div className="header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-12">
              {/* language currency changer */}
              <LanguagChanger
                currency={currency}
              />
            </div>
            <div className="col-lg-2 d-none d-lg-block text-center">
              {/* header logo */}
              <Logo
                imageUrl="/assets/img/logo/logo.png"
                logoClass="logo-hm-9"
              />
            </div>
            <div className="col-lg-5 col-md-4 col-12">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header-bottom sticky-bar header-res-padding header-padding-2 ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 d-block d-lg-none">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logo.png" />
            </div>
            <div className="col-6 d-block d-lg-none">
              {/* Icon group */}
              <IconGroup />
            </div>
            <div className="col-xl-12 col-lg-12 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
