export default function SvgIcon({
  width = "24",
  height = "24",
  color = "none",
  minX = 0,
  minY = 0,
  children,
  viewBox = null,
  ...rest
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={!viewBox ? `${minX} ${minY} ${width} ${height}` : viewBox}
      fill={color}
      {...rest}
    >
      {children}
    </svg>
  );
}
