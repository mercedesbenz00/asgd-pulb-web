import SvgIcon from "./SvgIcon";

export default function ArrowBack({ width = "16", height = "16" }) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
        fill="#323232"
      />
    </SvgIcon>
  );
}
