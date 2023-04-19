import SvgIcon from "./SvgIcon";

export default function ArrowDownIcon({
  width = "24",
  height = "24",
  color = "#1A395C",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
        fill={color}
      />
    </SvgIcon>
  );
}
