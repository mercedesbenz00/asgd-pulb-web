import SvgIcon from "./SvgIcon";

export default function NotificationIcon({
  width = "16",
  height = "20",
  color = "black",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM14 14V9C14 5.93 12.37 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.64 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14ZM12 15H4V9C4 6.52 5.51 4.5 8 4.5C10.49 4.5 12 6.52 12 9V15Z"
        fill={color}
      />
    </SvgIcon>
  );
}
