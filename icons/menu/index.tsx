import * as React from "react";

export const Arrow = ({ color = "#4510F6" }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 5.5L5 0.5L10 5.5H0Z" fill={color} />
  </svg>
);

export const Add = ({ color = "#4510F6" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z"
      fill={color}
    />
  </svg>
);

export const Campaigns = ({ color = "#4510F6" }) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 5H4V12C4 13.1 4.9 14 6 14H15V12H6V5Z" fill={color} />
    <path
      d="M18 0H10C8.9 0 8 0.9 8 2V8C8 9.1 8.9 10 10 10H18C19.1 10 20 9.1 20 8V2C20 0.9 19.1 0 18 0ZM18 8H10V4H18V8Z"
      fill={color}
    />
    <path d="M2 9H0V16C0 17.1 0.9 18 2 18H11V16H2V9Z" fill={color} />
  </svg>
);

export const Music = ({ color = "#4510F6" }) => (
  <svg
    width="12"
    height="18"
    viewBox="0 0 12 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 0V10.55C5.41 10.21 4.73 10 4 10C1.79 10 0 11.79 0 14C0 16.21 1.79 18 4 18C6.21 18 8 16.21 8 14V4H12V0H6Z"
      fill={color}
    />
  </svg>
);

export const Sound = ({ color = "#4510F6" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 5.99998V12H4L9 17V0.99998L4 5.99998H0ZM13.5 8.99998C13.5 7.22998 12.48 5.70998 11 4.96998V13.02C12.48 12.29 13.5 10.77 13.5 8.99998ZM11 0.22998V2.28998C13.89 3.14998 16 5.82998 16 8.99998C16 12.17 13.89 14.85 11 15.71V17.77C15.01 16.86 18 13.28 18 8.99998C18 4.71998 15.01 1.13998 11 0.22998Z"
      fill={color}
    />
  </svg>
);

export const Favorite = ({ color = "#4510F6" }) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
      fill={color}
    />
  </svg>
);

export const Download = ({ color = "#4510F6" }) => (
  <svg
    width="14"
    height="17"
    viewBox="0 0 14 17"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z" fill={color} />
  </svg>
);

export const Search = ({ color = "#4510F6" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
      fill={color}
    />
  </svg>
);

export const Support = ({ color = "#4510F6" }) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9.22C19 3.73 14.74 0 10 0C5.31 0 1 3.65 1 9.28C0.4 9.62 0 10.26 0 11V13C0 14.1 0.9 15 2 15H3V8.9C3 5.03 6.13 1.9 10 1.9C13.87 1.9 17 5.03 17 8.9V16H9V18H17C18.1 18 19 17.1 19 16V14.78C19.59 14.47 20 13.86 20 13.14V10.84C20 10.14 19.59 9.53 19 9.22Z"
      fill={color}
    />
    <path
      d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11Z"
      fill={color}
    />
    <path
      d="M13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11Z"
      fill={color}
    />
    <path
      d="M16 8.03C15.52 5.18 13.04 3 10.05 3C7.01997 3 3.75997 5.51 4.01997 9.45C6.48997 8.44 8.34997 6.24 8.87997 3.56C10.19 6.19 12.88 8 16 8.03Z"
      fill={color}
    />
  </svg>
);

export const Sun = ({ color = "#FBCE14" }) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.63337 4.03325L4.13337 2.54158L2.95837 3.71659L4.45004 5.20825L5.63337 4.03325ZM3.33337 8.74992H0.833374V10.4166H3.33337V8.74992ZM10.8334 0.458252H9.16671V2.91659H10.8334V0.458252ZM17.0417 3.71659L15.8667 2.54158L14.375 4.03325L15.55 5.20825L17.0417 3.71659ZM14.3667 15.1333L15.8584 16.6333L17.0334 15.4583L15.5334 13.9666L14.3667 15.1333ZM16.6667 8.74992V10.4166H19.1667V8.74992H16.6667ZM10 4.58325C7.24171 4.58325 5.00004 6.82492 5.00004 9.58325C5.00004 12.3416 7.24171 14.5833 10 14.5833C12.7584 14.5833 15 12.3416 15 9.58325C15 6.82492 12.7584 4.58325 10 4.58325ZM9.16671 18.7083H10.8334V16.2499H9.16671V18.7083ZM2.95837 15.4499L4.13337 16.6249L5.62504 15.1249L4.45004 13.9499L2.95837 15.4499Z"
      fill={color}
    />
  </svg>
);

export const Moon = ({ color }) => (
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.28329 0.683216C4.49163 0.516549 0.666626 4.34988 0.666626 8.99988C0.666626 13.5999 4.39996 17.3332 8.99996 17.3332C12.0916 17.3332 14.775 15.6499 16.2166 13.1499C9.95829 12.9415 6.14163 6.12488 9.28329 0.683216Z"
      fill={color}
    />
  </svg>
);
