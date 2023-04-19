/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";

export default function Breadcrumb({ data = [] }) {
  let history = useHistory();
  const RenderCrumb = () => {
    return data?.map((item, i) => {
      let className = item?.link ? "breadcrumb-item" : "breadcrumb-item active";

      if (i === 0) {
        className += " fw-bold";
      }

      return (
        <li className={className} key={i}>
          <a
            onClick={(e) => {
              e.preventDefault();
              if (item?.link) {
                history.push(item.link);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {item?.title}
          </a>
        </li>
      );
    });
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <RenderCrumb />
      </ol>
    </nav>
  );
}
