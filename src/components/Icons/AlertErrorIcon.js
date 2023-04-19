import SvgIcon from "./SvgIcon";

export default function AlertErrorIcon({
  width = "24",
  height = "24",
  color = "#FB4E4E",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M11.3438 15H13.3438V17H11.3438V15ZM11.3438 7H13.3438V13H11.3438V7ZM12.3337 2C6.81375 2 2.34375 6.48 2.34375 12C2.34375 17.52 6.81375 22 12.3337 22C17.8638 22 22.3438 17.52 22.3438 12C22.3438 6.48 17.8638 2 12.3337 2ZM12.3438 20C7.92375 20 4.34375 16.42 4.34375 12C4.34375 7.58 7.92375 4 12.3438 4C16.7638 4 20.3438 7.58 20.3438 12C20.3438 16.42 16.7638 20 12.3438 20Z"
        fill={color}
      />
    </SvgIcon>
  );
}
