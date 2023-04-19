import SvgIcon from "./SvgIcon";

export default function SortIcon({
  width = "16",
  height = "16",
  color = "#323232",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#clip0_77_1416)">
        <path
          opacity="0.4"
          d="M10.6654 6.6665V11.3398H12.6654L9.9987 13.9998L7.33203 11.3398H9.33203V6.6665H10.6654Z"
          fill="#231815"
        />
        <path
          opacity="0.4"
          d="M5.33463 9.3335L5.33464 4.66016L3.33463 4.66016L6.0013 2.00016L8.66797 4.66016L6.66797 4.66016L6.66797 9.3335L5.33463 9.3335Z"
          fill="#231815"
        />
      </g>
    </SvgIcon>
  );
}
