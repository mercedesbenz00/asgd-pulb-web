import { useTranslation } from "react-i18next";

const MobileLangCurrChange = () => {
  const { i18n } = useTranslation();
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="mobile-menu-middle">
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Language </span>
        <select
          value={i18n.resolvedLanguage}
          onChange={changeLanguageTrigger}
        >
          <option value="en">English</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default MobileLangCurrChange;
