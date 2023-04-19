import cn from "classnames";
import React from "react";

export default function Accordian({ data }) {
  const [activeRow, setActiveRow] = React.useState([0]);

  const onClickAction = (index) => {
    if (activeRow.indexOf(index) === -1) {
      setActiveRow((curr) => {
        return [...curr, index];
      });
    } else {
      setActiveRow((curr) => {
        return curr.filter((item) => item !== index);
      });
    }
  };

  const renderAccordianList = () => {
    return data.map((row, index) => {
      return (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={cn("accordion-button", {
                collapsed: activeRow.indexOf(index) === -1,
              })}
              type="button"
              onClick={() => onClickAction(index)}
            >
              <h6>
                {index + 1}. {row?.question}
              </h6>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={cn("accordion-collapse collapse", {
              show: activeRow.indexOf(index) !== -1,
            })}
          >
            <div className="accordion-body pt-0 pb-3">{row?.answer}</div>
          </div>
        </div>
      );
    });
  };

  return <div className="accordion">{renderAccordianList()}</div>;
}
