import { useEffect, useContext } from "react";
import { AppContext } from "contexts/AppContext";
import Tab from "components/Tab";
import FeedingLine from "../components/FeedingLine";
import PulpInfo from "../components/PulpInfo";

const dataTab = [
  {
    label: "Feeding Line",
    component: <FeedingLine />,
  },
  {
    label: "Pulp Information",
    component: <PulpInfo />,
  },
];

const MasterData = () => {
  const { setLabelTab, setLabelModule } = useContext(AppContext);

  useEffect(() => {
    setLabelModule("Master Data");
    setLabelTab("Feeding Line");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Tab data={dataTab} />;
};

export default MasterData;
