import { useEffect, useContext } from "react";
import { persistor } from "store";
import { useKeycloak } from "@react-keycloak/web";
import { useHistory } from "react-router-dom";
import { AppContext } from "contexts/AppContext";
import Label from "components/Label";
import { HOME_ROUTE } from "modules/home";

const OperatorDashboard = () => {
  const { setLabelTab, setLabelModule } = useContext(AppContext);

  const { keycloak } = useKeycloak();

  const history = useHistory();

  useEffect(() => {
    setLabelModule("Operator Dashboard");
    setLabelTab("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      <div className="d-flex justify-content-between">
        <Label>Operator Dashboard Page</Label>
        <a
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onlogout();
          }}
          href="true"
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default OperatorDashboard;
