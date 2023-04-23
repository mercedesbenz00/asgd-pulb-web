import SvgIcon from "./SvgIcon";

export default function TabIndicatorIcon({
  width = "4",
  height = "23",
  color = "#013686",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M0 0.564453C1.06087 0.564453 2.07828 0.930912 2.82843 1.58321C3.57857 2.23551 4 3.12022 4 4.04271V18.8253C4 19.7478 3.57857 20.6325 2.82843 21.2848C2.07828 21.9371 1.06087 22.3036 0 22.3036H0V0.564453Z"
        fill={color}
      />
    </SvgIcon>
  );
}
