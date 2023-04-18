import Label from "components/Label";

export default function UserInfo({ name }) {
  const initialName = !!name ? name.charAt(0).toUpperCase() : "";
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div
        style={{
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          padding: "3px 0",
          background: "#013686",
        }}
      >
        <Label color="#F8FAFC" fontWeight="400">
          {initialName}
        </Label>
      </div>

      <div className="ms-2" />
      <Label>{name}</Label>
    </div>
  );
}
