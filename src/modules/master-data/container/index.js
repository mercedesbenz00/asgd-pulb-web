import { useState, useEffect, useContext } from "react";
import { AppContext } from "contexts/AppContext";
import Tab from "components/Tab";
import FeedingLine from "../components/FeedingLine";

const MasterData = () => {
  const { setLabelTab, setLabelModule } = useContext(AppContext);

  const [dataTab] = useState([
    {
      label: "Feeding Line",
      component: <FeedingLine />,
    },
    {
      label: "Pulp Information",
      component: <></>,
    },
  ]);

  useEffect(() => {
    setLabelModule("Master Data");
    setLabelTab("Feeding Line");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Tab data={dataTab} />;
};

export default MasterData;
