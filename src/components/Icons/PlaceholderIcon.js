import ReactTooltip from "react-tooltip";
import SvgIcon from "./SvgIcon";

export default function PlaceholderIcon({
  width = "64",
  height = "64",
  placeholderText = "Click to Change Application Custom Logo",
}) {
  return (
    <>
      <SvgIcon width={width} height={height} data-tip data-for="placeholderTip">
        <g opacity="0.4">
          <path
            d="M50.6667 13.3333V50.6667H13.3333V13.3333H50.6667ZM50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8ZM37.7067 31.6267L29.7067 41.9467L24 35.04L16 45.3333H48L37.7067 31.6267Z"
            fill="black"
            fillOpacity="0.54"
          />
        </g>
      </SvgIcon>
      <ReactTooltip
        id="placeholderTip"
        place="right"
        type="dark"
        effect="solid"
      >
        {placeholderText}
      </ReactTooltip>
    </>
  );
}