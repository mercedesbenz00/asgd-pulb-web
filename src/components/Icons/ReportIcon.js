import SvgIcon from "./SvgIcon";

export default function ReportIcon({
  width = "80",
  height = "80",
  color = "#1A395C",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <g clipPath="url(#clip0_3401_21218)">
        <path
          d="M68.3333 0H11.6667C5.23328 0 0 5.23328 0 11.6667V68.3334C0 74.7667 5.23328 80 11.6667 80H68.3334C74.7667 80 80 74.7667 80 68.3333V11.6667C80 5.23328 74.7667 0 68.3333 0ZM76.6667 68.3333C76.6667 72.9266 72.9267 76.6666 68.3334 76.6666H11.6667C7.07344 76.6666 3.33344 72.9266 3.33344 68.3333V11.6667C3.33344 7.07344 7.07344 3.33344 11.6667 3.33344H68.3334C72.9267 3.33344 76.6667 7.07344 76.6667 11.6667V68.3333Z"
          fill={color}
        />
        <path d="M27.5556 65.9444H19V36H27.5556V65.9444Z" fill={color} />
        <path d="M44.5556 65.7778H36V23H44.5556V65.7778Z" fill={color} />
        <path
          d="M61.7821 65.7781H53.2266V48.667H61.7821V65.7781Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3401_21218">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
