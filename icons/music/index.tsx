import * as React from "react";

export const Play = ({ color = "#B1B5C3" }) => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0V14L11 7L0 0Z" fill={color} />
  </svg>
);

export const Micro = ({ color = "#B1B5C3" }) => (
  <svg
    width="12"
    height="17"
    viewBox="0 0 12 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.99984 10.6667C7.38317 10.6667 8.4915 9.55008 8.4915 8.16675L8.49984 3.16675C8.49984 1.78341 7.38317 0.666748 5.99984 0.666748C4.6165 0.666748 3.49984 1.78341 3.49984 3.16675V8.16675C3.49984 9.55008 4.6165 10.6667 5.99984 10.6667ZM10.4165 8.16675C10.4165 10.6667 8.29984 12.4167 5.99984 12.4167C3.69984 12.4167 1.58317 10.6667 1.58317 8.16675H0.166504C0.166504 11.0084 2.43317 13.3584 5.1665 13.7667V16.5001H6.83317V13.7667C9.56651 13.3667 11.8332 11.0167 11.8332 8.16675H10.4165Z"
      fill={color}
    />
  </svg>
);

export const Star = ({ color = "#B1B5C3" }) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99984 13.3917L14.1498 16.5001L12.7832 10.6417L17.3332 6.70008L11.3415 6.19175L8.99984 0.666748L6.65817 6.19175L0.666504 6.70008L5.2165 10.6417L3.84984 16.5001L8.99984 13.3917Z"
      fill={color}
    />
  </svg>
);

export const Dnl = ({ color = "#B1B5C3" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8333 8V13.8333H2.16667V8H0.5V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333ZM8.83333 8.55833L10.9917 6.40833L12.1667 7.58333L8 11.75L3.83333 7.58333L5.00833 6.40833L7.16667 8.55833V0.5H8.83333V8.55833Z"
      fill={color}
    />
  </svg>
);

export const Prev = ({ color = "#B1B5C3" }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H2V12H0V0ZM3.5 6L12 12V0L3.5 6Z" fill={color} />
  </svg>
);

export const Next = ({ color = "#B1B5C3" }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 12L8.5 6L0 0V12ZM10 0V12H12V0H10Z" fill={color} />
  </svg>
);

export const Pause = ({ color = "#4510F6" }) => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" fill={color} />
  </svg>
);

export const MaxV = ({ color = "#B1B5C3" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 5.99998V12H4L9 17V0.99998L4 5.99998H0ZM13.5 8.99998C13.5 7.22998 12.48 5.70998 11 4.96998V13.02C12.48 12.29 13.5 10.77 13.5 8.99998ZM11 0.22998V2.28998C13.89 3.14998 16 5.82998 16 8.99998C16 12.17 13.89 14.85 11 15.71V17.77C15.01 16.86 18 13.28 18 8.99998C18 4.71998 15.01 1.13998 11 0.22998Z"
      fill={color}
    />
  </svg>
);

export const Mute = ({ color = "#B1B5C3" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 9C13.5 7.23 12.48 5.71 11 4.97V7.18L13.45 9.63C13.48 9.43 13.5 9.22 13.5 9ZM16 9C16 9.94 15.8 10.82 15.46 11.64L16.97 13.15C17.63 11.91 18 10.5 18 9C18 4.72 15.01 1.14 11 0.23V2.29C13.89 3.15 16 5.83 16 9ZM1.27 0L0 1.27L4.73 6H0V12H4L9 17V10.27L13.25 14.52C12.58 15.04 11.83 15.45 11 15.7V17.76C12.38 17.45 13.63 16.81 14.69 15.95L16.73 18L18 16.73L9 7.73L1.27 0ZM9 1L6.91 3.09L9 5.18V1Z"
      fill={color}
    />
  </svg>
);

export const Add = ({ color = "#4510F6" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.66683 3.66671H6.3335V6.33337H3.66683V7.66671H6.3335V10.3334H7.66683V7.66671H10.3335V6.33337H7.66683V3.66671ZM7.00016 0.333374C3.32016 0.333374 0.333496 3.32004 0.333496 7.00004C0.333496 10.68 3.32016 13.6667 7.00016 13.6667C10.6802 13.6667 13.6668 10.68 13.6668 7.00004C13.6668 3.32004 10.6802 0.333374 7.00016 0.333374ZM7.00016 12.3334C4.06016 12.3334 1.66683 9.94004 1.66683 7.00004C1.66683 4.06004 4.06016 1.66671 7.00016 1.66671C9.94016 1.66671 12.3335 4.06004 12.3335 7.00004C12.3335 9.94004 9.94016 12.3334 7.00016 12.3334Z"
      fill={color}
    />
  </svg>
);

export const Remove = ({ color = "#fff" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00016 0.333374C3.32016 0.333374 0.333496 3.32004 0.333496 7.00004C0.333496 10.68 3.32016 13.6667 7.00016 13.6667C10.6802 13.6667 13.6668 10.68 13.6668 7.00004C13.6668 3.32004 10.6802 0.333374 7.00016 0.333374ZM10.3335 7.66671H3.66683V6.33337H10.3335V7.66671Z"
      fill={color}
    />
  </svg>
);
