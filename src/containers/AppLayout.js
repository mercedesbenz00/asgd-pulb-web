import { useState, useContext } from "react";
import { persistor } from "store";
import Header from "components/Header";
import LogoIcon from "components/Icons/LogoIcon";
import { useKeycloak } from "@react-keycloak/web";
import { IntlProvider, FormattedMessage } from "react-intl";
import { enMessages } from "i18n/langs";
import messages from "i18n/messages";
import { useHistory } from "react-router-dom";
import { HOME_ROUTE } from "modules/home";
import SideBarMenu from "components/SideBarMenu";
import { AppContext } from "contexts/AppContext";
import { USERS_ROLES_ENUM, MODULE_LIST } from "utilities/constants";

export function AppLayout({ children }) {
  const { keycloak } = useKeycloak();

  const history = useHistory();

  const { userInfo, userModules, userRole, labelModule } =
    useContext(AppContext);

  const [openMenu, setOpenMenu] = useState(false);

  const menuData =
    userRole === USERS_ROLES_ENUM.SYSTEM_ADMIN
      ? MODULE_LIST
      : MODULE_LIST.filter(
          (module) => userModules?.indexOf(module?.key) !== -1
        );

  const onlogout = async () => {
    try {
      if (process.env.REACT_APP_BYPASS_KEYCLOAK === "true") {
        await persistor.purge();
        history.push(HOME_ROUTE);
      } else {
        await keycloak?.logout({
          redirectUri: `${process.env.REACT_APP_PUBLIC_URL}`,
        });
        persistor.pause();
        await persistor.flush();
        await persistor.purge();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSelect = () => {
    setOpenMenu(false);
  };

  return (
    <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
      {labelModule !== "Operator Dashboard" && (
        <Header
          businessName={<FormattedMessage {...messages.APPLICATION_NAME} />}
          logo={LogoIcon}
          logoutAction={onlogout}
          userInfo={userInfo}
          setOpenMenu={setOpenMenu}
        />
      )}

      {openMenu && (
        <SideBarMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          onSelect={onSelect}
          menuData={menuData}
        />
      )}
      <main
        style={{
          backgroundColor: "#EDF1F5",
          top: labelModule !== "Operator Dashboard" ? "5rem" : "1rem",
          position: "relative",
        }}
      >
        <div className="container-lg p-4 mt-20">{children}</div>
      </main>
    </IntlProvider>
  );
}
