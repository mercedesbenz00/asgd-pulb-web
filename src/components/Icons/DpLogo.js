import SvgIcon from "./SvgIcon";

export default function DpLogo({ width = "33", height = "36" }) {
  return (
    <SvgIcon width={width} height={height}>
      <path
        d="M30.9038 21.1114L33 10.2228H23.2535C19.0631 10.2228 18.4198 14.6657 18.4198 14.6657L14.3127 36C19.3388 36 19.4581 32 19.4581 32L20.656 25.7771H25.8325C30.4321 25.7771 30.9038 21.1114 30.9038 21.1114ZM25.061 20.7317H21.7062L22.4577 16.828C22.4577 16.828 22.6816 15.2682 24.1556 15.2682H27.5819L26.8458 19.0921C26.8458 19.0921 26.678 20.7317 25.061 20.7317Z"
        fill="url(#paint0_linear_3529_25120)"
      />
      <path
        d="M18.7116 0C13.6806 0 13.5613 4.00001 13.5613 4.00001L12.3633 10.2229H7.18692C2.5799 10.2229 2.09616 14.8996 2.09616 14.8996L0 25.7882H9.76619C13.9714 25.7882 14.6029 21.3426 14.6029 21.3426L18.7116 0ZM8.86129 20.7318H5.43499L6.17167 16.9051C6.17167 16.9051 6.33906 15.2545 7.9684 15.2545H11.3158L10.5622 19.1692C10.5622 19.1692 10.3403 20.7318 8.86129 20.7318Z"
        fill="url(#paint1_linear_3529_25120)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3529_25120"
          x1="0"
          y1="17.9996"
          x2="32.9994"
          y2="17.9996"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="2.02456e-07" stopColor="#FACF05" />
          <stop offset="0.9999" stopColor="#EF4135" />
          <stop offset="1" stopColor="#002D62" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3529_25120"
          x1="0"
          y1="17.9996"
          x2="32.9994"
          y2="17.9996"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="2.02456e-07" stopColor="#FACF05" />
          <stop offset="0.9999" stopColor="#EF4135" />
          <stop offset="1" stopColor="#002D62" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
