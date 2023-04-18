import SvgIcon from "./SvgIcon";

export default function CrossIcon({
  width = "24",
  height = "24",
  color = "#231815",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        fill={color}
      />
    </SvgIcon>
  );
}
