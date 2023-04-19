import React from "react";
import { useSelector } from "react-redux";
import { persistor } from "store";
import Header from "../components/Header";
import LogoIcon from "../components/Icons/LogoIcon";
import { useKeycloak } from "@react-keycloak/web";
import { IntlProvider, FormattedMessage } from "react-intl";
import { enMessages } from "i18n/langs";
import messages from "i18n/messages";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "modules/login";

export function AppLayout({ children }) {
  const history = useHistory();

  const { keycloak } = useKeycloak();

  const userInfo = useSelector((state) => {
    return state?.Auth?.userInfo || {};
  });

  const onlogout = () => {
    if (process.env.REACT_APP_BYPASS_KEYCLOAK === "true") {
      persistor.purge();
      history.push(LOGIN_ROUTE);
    } else {
      persistor.pause();
      persistor.flush().then(() => {
        return persistor
          .purge()
          .then(() => {
            return keycloak?.logout({
              redirectUri: `${process.env.REACT_APP_PUBLIC_URL}/logout`,
            });
          })
          .catch((err) => console.error(err));
      });
    }
  };

  return (
    <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
      <Header
        businessName={<FormattedMessage {...messages.APPLICATION_NAME} />}
        logo={LogoIcon}
        logoutAction={onlogout}
        userInfo={userInfo}
      />
      <main
        style={{
          backgroundColor: "#EDF1F5",
          top: "64px",
          position: "relative",
        }}
      >
        <div className="container-lg p-4 mt-20">{children}</div>
      </main>
    </IntlProvider>
  );
}
