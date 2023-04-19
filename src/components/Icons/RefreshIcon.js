import SvgIcon from "./SvgIcon";

export default function RefreshIcon({
  width = "24",
  height = "24",
  color = "#1A395C",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M17.6517 6.35C16.2017 4.9 14.2117 4 12.0017 4C7.58172 4 4.01172 7.58 4.01172 12C4.01172 16.42 7.58172 20 12.0017 20C15.7317 20 18.8417 17.45 19.7317 14H17.6517C16.8317 16.33 14.6117 18 12.0017 18C8.69172 18 6.00172 15.31 6.00172 12C6.00172 8.69 8.69172 6 12.0017 6C13.6617 6 15.1417 6.69 16.2217 7.78L13.0017 11H20.0017V4L17.6517 6.35Z"
        fill={color}
      />
    </SvgIcon>
  );
}
