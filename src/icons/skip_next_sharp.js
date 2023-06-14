import React from 'react';

export default function SkipNextSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z' />
    </svg>
  );
}
