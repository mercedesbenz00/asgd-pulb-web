import SvgIcon from "./SvgIcon";

export default function GridViewIcon({
  width = "24",
  height = "24",
  color = "#FFFFFF",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <g clipPath="url(#clip0_1_5620)">
        <path
          d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_5620">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
