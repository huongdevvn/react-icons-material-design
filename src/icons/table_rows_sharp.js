import React from 'react';

export default function TableRowsSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z' />
    </svg>
  );
}
