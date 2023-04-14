import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logo from "../../components/header/Logo";
import IconGroup from "../../components/header/IconGroup";
import NavMenu from "../../components/header/NavMenu";
import MobileMenu from "../../components/header/MobileMenu";
import LanguagChanger from "../../components/header/sub-components/LanguagChanger";


const HeaderThree = () => {
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
    <header className="header-area clearfix header-hm8">
      <div className="header-top-area header-padding-2 d-lg-block d-none">
        <div className="container-fluid">
          <div className="header-top-wap">
            {/* language currency changer */}
            <LanguagChanger currency={currency} />
            {/* Icon group */}
            <IconGroup />
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
            <div className="col-xl-12 col-lg-12 col-6">
              <div className="center-menu-logo text-start text-lg-center">
                {/* header logo */}
                <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
              </div>
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



export default HeaderThree;
