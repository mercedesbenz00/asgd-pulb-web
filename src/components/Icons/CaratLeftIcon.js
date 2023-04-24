import SvgIcon from "./SvgIcon";

export default function CaratLeftIcon({
  width = "24",
  height = "24",
  color = "#94A3B8",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M16.1602 7.41L11.5802 12L16.1602 16.59L14.7502 18L8.75016 12L14.7502 6L16.1602 7.41Z"
        fill={color}
      />
    </SvgIcon>
  );
}
