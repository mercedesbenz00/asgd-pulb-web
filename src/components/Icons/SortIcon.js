import SvgIcon from "./SvgIcon";

export default function SortIcon({
  width = "24",
  height = "24",
  color = "#FFFFFF",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z"
        fill={color}
      />
    </SvgIcon>
  );
}
