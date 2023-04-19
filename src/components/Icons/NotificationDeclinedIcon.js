import SvgIcon from "./SvgIcon";

export default function NotificationDeclinedIcon({
  width = "24",
  height = "24",
  color = "#FB4E4E",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M12.73 0H5.27L0 5.27V12.73L5.27 18H12.73L18 12.73V5.27L12.73 0ZM14 12.74L12.74 14L9 10.26L5.26 14L4 12.74L7.74 9L4 5.26L5.26 4L9 7.74L12.74 4L14 5.26L10.26 9L14 12.74Z"
        fill={color}
      />
    </SvgIcon>
  );
}
