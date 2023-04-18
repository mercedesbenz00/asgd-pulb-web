import SvgIcon from "./SvgIcon";

export default function MasterIcon({
  width = "24",
  height = "20",
  color = "#64748B",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.66602C14.1421 6.66602 17.5 5.54673 17.5 4.16602C17.5 2.7853 14.1421 1.66602 10 1.66602C5.85786 1.66602 2.5 2.7853 2.5 4.16602C2.5 5.54673 5.85786 6.66602 10 6.66602Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4.16602V15.8327C2.5 17.216 5.83333 18.3327 10 18.3327C14.1667 18.3327 17.5 17.216 17.5 15.8327V4.16602"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
