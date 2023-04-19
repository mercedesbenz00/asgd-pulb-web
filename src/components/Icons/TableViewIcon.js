import SvgIcon from "./SvgIcon";

export default function TableViewIcon({
  width = "24",
  height = "24",
  color = "#FFFFFF",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <g clipPath="url(#clip0_1_5627)">
        <path
          d="M19 7H9C7.9 7 7 7.9 7 9V19C7 20.1 7.9 21 9 21H19C20.1 21 21 20.1 21 19V9C21 7.9 20.1 7 19 7ZM19 9V11H9V9H19ZM13 15V13H15V15H13ZM15 17V19H13V17H15ZM11 15H9V13H11V15ZM17 13H19V15H17V13ZM9 17H11V19H9V17ZM17 19V17H19V19H17ZM6 17H5C3.9 17 3 16.1 3 15V5C3 3.9 3.9 3 5 3H15C16.1 3 17 3.9 17 5V6H15V5H5V15H6V17Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_5627">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
