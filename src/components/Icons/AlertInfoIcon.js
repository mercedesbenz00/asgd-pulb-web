import SvgIcon from "./SvgIcon";

export default function AlertInfoIcon({
  width = "24",
  height = "24",
  color = "#1D4ED8",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M11.3438 7H13.3438V9H11.3438V7ZM11.3438 11H13.3438V17H11.3438V11ZM12.3438 2C6.82375 2 2.34375 6.48 2.34375 12C2.34375 17.52 6.82375 22 12.3438 22C17.8638 22 22.3438 17.52 22.3438 12C22.3438 6.48 17.8638 2 12.3438 2ZM12.3438 20C7.93375 20 4.34375 16.41 4.34375 12C4.34375 7.59 7.93375 4 12.3438 4C16.7537 4 20.3438 7.59 20.3438 12C20.3438 16.41 16.7537 20 12.3438 20Z"
        fill={color}
      />
    </SvgIcon>
  );
}
