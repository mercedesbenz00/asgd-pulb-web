const Label = ({
  children,
  fontWeight = "600",
  fontSize = "16px",
  textAlign = "center",
  color = "#0F172A",
}) => {
  return (
    <div
      style={{
        fontWeight,
        fontSize,
        textAlign,
        color,
      }}
    >
      {children}
    </div>
  );
};

export default Label;