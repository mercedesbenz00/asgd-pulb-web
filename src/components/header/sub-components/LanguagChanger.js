import { useTranslation } from "react-i18next";

const LanguagChanger = () => {
  const { i18n } = useTranslation();
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
  };


  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          {i18n.resolvedLanguage === "en"
            ? "English"
            : i18n.resolvedLanguage === "zh"
            ? "Chinese"
            : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={e => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="zh" onClick={e => changeLanguageTrigger(e)}>
                Chinese
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

LanguagChanger.propTypes = {
};

export default LanguagChanger;
