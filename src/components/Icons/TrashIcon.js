import SvgIcon from "./SvgIcon";

export default function TrashIcon({
  width = "20",
  height = "20",
  color = "#323232",
}) {
  return (
    <SvgIcon width={width} height={height} color={color}>
      <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" />
    </SvgIcon>
  );
}
