import SvgIcon from "./SvgIcon";

export default function CaratRightIcon({
  width = "24",
  height = "24",
  color = "#94A3B8",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M7.83984 7.41L12.4198 12L7.83984 16.59L9.24984 18L15.2498 12L9.24984 6L7.83984 7.41Z"
        fill={color}
      />
    </SvgIcon>
  );
}
