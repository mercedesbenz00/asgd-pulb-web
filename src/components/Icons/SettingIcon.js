import SvgIcon from "./SvgIcon";

export default function SettingIcon({
  width = "80",
  height = "80",
  color = "#1A395C",
}) {
  return (
    <SvgIcon width={width} height={height}>
      <g clipPath="url(#clip0_155_126)">
        <path
          d="M40.0013 33.3332C35.4046 33.3332 31.668 29.5932 31.668 24.9998C31.668 20.4065 35.4046 16.6665 40.0013 16.6665C44.598 16.6665 48.3346 20.4065 48.3346 24.9998C48.3346 29.5932 44.598 33.3332 40.0013 33.3332ZM40.0013 19.9998C37.2446 19.9998 35.0013 22.2432 35.0013 24.9998C35.0013 27.7565 37.2446 29.9998 40.0013 29.9998C42.758 29.9998 45.0013 27.7565 45.0013 24.9998C45.0013 22.2432 42.758 19.9998 40.0013 19.9998Z"
          fill={color}
        />
        <path
          d="M43.0511 50H36.9444C35.0977 50 33.5644 48.6 33.3844 46.7433L32.8844 41.6367C31.6477 41.0867 30.4711 40.3933 29.3711 39.56L24.7777 41.6667C23.0911 42.4467 21.1111 41.8 20.1911 40.1733L17.1411 34.8033C16.2277 33.2 16.6611 31.1733 18.1411 30.0833L22.2177 27.1067C22.1344 26.47 22.0677 25.75 22.0677 25C22.0677 24.25 22.1344 23.53 22.2177 22.89L18.1444 19.9167C16.6611 18.8267 16.2277 16.8 17.1411 15.1967L20.1911 9.82667C21.1111 8.2 23.0877 7.55667 24.7777 8.33333L29.3711 10.44C30.4711 9.60667 31.6477 8.91333 32.8844 8.36333L33.3844 3.25667C33.5644 1.4 35.0977 0 36.9444 0H43.0511C44.8977 0 46.4311 1.4 46.6111 3.25667L47.1111 8.36333C48.3477 8.91333 49.5244 9.60667 50.6244 10.44L55.2177 8.33333C56.9077 7.56 58.8877 8.2 59.8044 9.82667L62.8544 15.1967C63.7644 16.8 63.3344 18.83 61.8511 19.9167L57.7744 22.8933C57.8577 23.53 57.9244 24.2533 57.9244 25.0033C57.9244 25.7533 57.8577 26.4733 57.7744 27.1133L61.8477 30.0867C63.3311 31.1767 63.7644 33.2033 62.8544 34.81L59.8044 40.18C58.8844 41.8033 56.9044 42.45 55.2177 41.6733L50.6244 39.5667C49.5244 40.4 48.3477 41.0933 47.1111 41.6433L46.6111 46.75C46.4311 48.6 44.8977 50 43.0511 50ZM29.6111 35.9533C29.9977 35.9533 30.3844 36.09 30.6911 36.3533C32.0077 37.4733 33.4644 38.3333 35.0211 38.9133C35.6211 39.1333 36.0377 39.6767 36.1011 40.3133L36.7044 46.4233C36.7177 46.56 36.8211 46.6667 36.9444 46.6667H43.0511C43.1744 46.6667 43.2777 46.56 43.2911 46.42L43.8944 40.31C43.9611 39.6767 44.3777 39.13 44.9744 38.91C46.5311 38.33 47.9877 37.47 49.3044 36.35C49.7944 35.93 50.4911 35.84 51.0777 36.1033L56.6044 38.6367L59.9577 33.1567C60.0311 33.0267 59.9977 32.86 59.8811 32.7733L54.9944 29.2033C54.4844 28.83 54.2311 28.2 54.3344 27.5767C54.4544 26.8733 54.5944 25.94 54.5944 25C54.5944 24.06 54.4544 23.1267 54.3344 22.4233C54.2311 21.8 54.4844 21.17 54.9944 20.7967L59.8844 17.2267C59.9977 17.14 60.0311 16.9733 59.9577 16.8433L56.9077 11.4733L51.0777 13.9C50.4844 14.1667 49.7911 14.07 49.3044 13.6533C47.9877 12.53 46.5311 11.6667 44.9744 11.09C44.3744 10.87 43.9577 10.3267 43.8944 9.69L43.2911 3.58C43.2777 3.44 43.1744 3.33333 43.0511 3.33333H36.9444C36.8211 3.33333 36.7177 3.44 36.7044 3.58L36.1011 9.69C36.0344 10.3233 35.6177 10.87 35.0211 11.09C33.4644 11.6667 32.0077 12.53 30.6911 13.65C30.2044 14.07 29.5111 14.1667 28.9177 13.8967L23.3911 11.3633L20.0377 16.8433C19.9644 16.9733 19.9977 17.14 20.1144 17.2267L25.0011 20.7967C25.5111 21.17 25.7644 21.8 25.6611 22.4233C25.5411 23.1267 25.4011 24.06 25.4011 25C25.4011 25.94 25.5411 26.8733 25.6611 27.5767C25.7644 28.2 25.5111 28.83 25.0011 29.2033L20.1111 32.7767C19.9977 32.86 19.9644 33.0267 20.0377 33.1567L23.0877 38.5267L28.9177 36.1C29.1377 36.0033 29.3744 35.9533 29.6111 35.9533Z"
          fill={color}
        />
        <path
          d="M15.0013 63.3332C10.4046 63.3332 6.66797 59.5932 6.66797 54.9998C6.66797 50.4065 10.4046 46.6665 15.0013 46.6665C19.598 46.6665 23.3346 50.4065 23.3346 54.9998C23.3346 59.5932 19.598 63.3332 15.0013 63.3332ZM15.0013 49.9998C12.2446 49.9998 10.0013 52.2432 10.0013 54.9998C10.0013 57.7565 12.2446 59.9998 15.0013 59.9998C17.758 59.9998 20.0013 57.7565 20.0013 54.9998C20.0013 52.2432 17.758 49.9998 15.0013 49.9998Z"
          fill={color}
        />
        <path
          d="M28.3333 79.9999C27.4133 79.9999 26.6667 79.2532 26.6667 78.3332V74.9998C26.6667 72.2432 24.4233 69.9998 21.6667 69.9998H8.33333C5.57667 69.9998 3.33333 72.2432 3.33333 74.9998V78.3332C3.33333 79.2532 2.58667 79.9999 1.66667 79.9999C0.746667 79.9999 0 79.2532 0 78.3332V74.9998C0 70.4065 3.73667 66.6665 8.33333 66.6665H21.6667C26.2633 66.6665 30 70.4065 30 74.9998V78.3332C30 79.2532 29.2533 79.9999 28.3333 79.9999Z"
          fill={color}
        />
        <path
          d="M65.0013 63.3332C60.4046 63.3332 56.668 59.5932 56.668 54.9998C56.668 50.4065 60.4046 46.6665 65.0013 46.6665C69.598 46.6665 73.3346 50.4065 73.3346 54.9998C73.3346 59.5932 69.598 63.3332 65.0013 63.3332ZM65.0013 49.9998C62.2446 49.9998 60.0013 52.2432 60.0013 54.9998C60.0013 57.7565 62.2446 59.9998 65.0013 59.9998C67.758 59.9998 70.0013 57.7565 70.0013 54.9998C70.0013 52.2432 67.758 49.9998 65.0013 49.9998Z"
          fill={color}
        />
        <path
          d="M78.3333 79.9999C77.4133 79.9999 76.6667 79.2532 76.6667 78.3332V74.9998C76.6667 72.2432 74.4233 69.9998 71.6667 69.9998H58.3333C55.5767 69.9998 53.3333 72.2432 53.3333 74.9998V78.3332C53.3333 79.2532 52.5867 79.9999 51.6667 79.9999C50.7467 79.9999 50 79.2532 50 78.3332V74.9998C50 70.4065 53.7367 66.6665 58.3333 66.6665H71.6667C76.2633 66.6665 80 70.4065 80 74.9998V78.3332C80 79.2532 79.2533 79.9999 78.3333 79.9999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_155_126">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
