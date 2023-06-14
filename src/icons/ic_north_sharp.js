import React from 'react';

export default function icNorthSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z' />
    </svg>
  );
}
