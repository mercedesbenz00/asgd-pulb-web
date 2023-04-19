import SvgIcon from "./SvgIcon";

export default function ExpandMore({
  width = "24",
  height = "24",
  color = "#00854F",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <g clipPath="url(#clip0_1_3796)">
        <rect width="24" height="24" rx="4" fill={color} />
        <path
          d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3796">
          <rect width="24" height="24" rx="4" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
