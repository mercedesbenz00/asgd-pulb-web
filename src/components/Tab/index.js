import { useContext } from "react";
import { AppContext } from "contexts/AppContext";
import Loader from "components/Loader";
import Label from "components/Label";
import TabIndicatorIcon from "components/Icons/TabIndicatorIcon";

const Tab = ({ data, disabled = false, isLoading = false }) => {
  const { labelTab, setLabelTab } = useContext(AppContext);

  return (
    <div style={!!disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}>
      <ul className="nav nav-tabs">
        {data.map(({ label }, index) => (
          <li className="nav-item me-2" key={index}>
            <a
              href={`#content${index}`}
              className={`nav-link ps-0  ${labelTab === label && "active"}`}
              style={{
                backgroundColor: labelTab === label ? "#FFFFFF" : "#E6EBF3",
              }}
              data-toggle="tab"
              onClick={() => setLabelTab(label)}
            >
              <div className="d-flex">
                {labelTab === label && <TabIndicatorIcon />}
                <div className="ms-3" />
                <Label color={labelTab === label ? "#0F172A" : "#013686"}>
                  {label}
                </Label>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div
        className="border bg-white shadow-sm p-3"
        style={{ minHeight: "40rem" }}
      >
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {data.map(({ label, component }, index) => (
                <div
                  className={`tab-pane fade ${
                    labelTab === label && "show active"
                  }`}
                  id={`content${index}`}
                  key={label}
                >
                  {component}
                </div>
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Tab;
