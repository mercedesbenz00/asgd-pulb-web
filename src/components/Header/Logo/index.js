import { useContext } from "react";
import { imgSrcPath } from "utilities/common";
import Label from "components/Label";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import VerticalDivider from "components/VerticalDivider";
import { AppContext } from "contexts/AppContext";

export default function Logo({ logo: Logo, name }) {
  const { labelModule, labelTab } = useContext(AppContext);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "fit-content",
      }}
    >
      {typeof Logo !== "string" ? (
        <Logo />
      ) : (
        <img src={imgSrcPath(Logo)} alt="logo" />
      )}

      <div className="d-flex align-items-center">
        <div className="ms-2" />
        <Label>{name}</Label>
        {!!labelModule && (
          <>
            <div className="ms-2" />
            <VerticalDivider />
            <div className="ms-2" />
            <Label>{labelModule}</Label>
            {!!labelTab && (
              <>
                <div className="ms-3" />
                <ArrowRightIcon />
                <div className="me-3" />
                <Label fontWeight="400">{labelTab}</Label>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
