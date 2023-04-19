import SvgIcon from "./SvgIcon";

export default function DownloadIcon({
  width = "14",
  height = "17",
  color = "black",
}) {
  return (
    <SvgIcon width={width} height={height}>
   <path xmlns="http://www.w3.org/2000/svg" d="M14 6H10V0H4V6H0L7 13L14 6ZM6 8V2H8V8H9.17L7 10.17L4.83 8H6ZM0 15H14V17H0V15Z" fill="#1A395C"/>
    </SvgIcon>
  );
}
