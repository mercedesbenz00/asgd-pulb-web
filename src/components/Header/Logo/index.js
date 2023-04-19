import { imgSrcPath } from "utilities/common";
import Label from "components/Label";

export default function Logo({ logo: Logo, name }) {
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

      <div className="ms-2" />
      <Label>{name}</Label>
    </div>
  );
}
