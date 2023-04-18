import SvgIcon from "./SvgIcon";

export default function DeleteIcon({
  width = "10",
  height = "11",
  color = "red",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M9.66537 1.77337L8.72536 0.833374L4.9987 4.56004L1.27203 0.833374L0.332031 1.77337L4.0587 5.50004L0.332031 9.22671L1.27203 10.1667L4.9987 6.44004L8.72536 10.1667L9.66537 9.22671L5.9387 5.50004L9.66537 1.77337Z"
        fill={color}
      />
    </SvgIcon>
  );
}
