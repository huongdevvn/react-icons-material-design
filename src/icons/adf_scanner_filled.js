import React from 'react';

export default function AdfScannerFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zm-3 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' />
    </svg>
  );
}
