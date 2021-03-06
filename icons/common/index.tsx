import * as React from "react";

export const Close = ({ color = "#4510F6" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      fill={color}
    />
  </svg>
);

export const Tt = ({ color = "#B1B5C3" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: "pointer" }}
  >
    <path
      d="M6.33325 11H7.66659V9.66668H6.33325V11ZM6.99992 0.333344C3.31992 0.333344 0.333252 3.32001 0.333252 7.00001C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00001C13.6666 3.32001 10.6799 0.333344 6.99992 0.333344ZM6.99992 12.3333C4.05992 12.3333 1.66659 9.94001 1.66659 7.00001C1.66659 4.06001 4.05992 1.66668 6.99992 1.66668C9.93992 1.66668 12.3333 4.06001 12.3333 7.00001C12.3333 9.94001 9.93992 12.3333 6.99992 12.3333ZM6.99992 3.00001C5.52659 3.00001 4.33325 4.19334 4.33325 5.66668H5.66659C5.66659 4.93334 6.26659 4.33334 6.99992 4.33334C7.73325 4.33334 8.33325 4.93334 8.33325 5.66668C8.33325 7.00001 6.33325 6.83334 6.33325 9.00001H7.66659C7.66659 7.50001 9.66659 7.33334 9.66659 5.66668C9.66659 4.19334 8.47325 3.00001 6.99992 3.00001Z"
      fill={color}
    />
  </svg>
);

export const ArrowLeft = ({ color = "#4510F6" }) => (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 0.5L6 11.5L-2.51861e-07 6.2619L6 0.5Z" fill={color} />
  </svg>
);

export const ArrowRight = ({ color = "#4510F6" }) => (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 11.5L-4.80825e-07 0.499999L6 5.73809L0 11.5Z" fill={color} />
  </svg>
);
