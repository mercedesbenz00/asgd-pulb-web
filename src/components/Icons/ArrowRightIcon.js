import SvgIcon from "./SvgIcon";

export default function ArrowRightIcon({
  width = "9",
  height = "14",
  color = "#013686",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M0.621094 12.4204L1.80109 13.6004L8.40109 7.00039L1.80109 0.400391L0.621094 1.58039L6.04109 7.00039L0.621094 12.4204Z"
        fill={color}
      />
    </SvgIcon>
  );
}
