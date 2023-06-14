import React from 'react';

export default function MarkunreadSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 4H2v16h20V4zm-2 4-8 5-8-5V6l8 5 8-5v2z' />
    </svg>
  );
}
