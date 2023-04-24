import { useState, useEffect, useContext } from "react";
import { AppContext } from "contexts/AppContext";
import Tab from "components/Tab";

const Dashboard = () => {
  const { setLabelTab, setLabelModule } = useContext(AppContext);

  const [dataTab] = useState([
    {
      label: "Live Pulp Feeding Arrangements",
      component: <></>,
    },
    {
      label: "Data View",
      component: <></>,
    },
  ]);

  useEffect(() => {
    setLabelModule("Dashboard");
    setLabelTab("Live Pulp Feeding Arrangements");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Tab data={dataTab} />;
};

export default Dashboard;
