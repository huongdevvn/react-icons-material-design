import React from 'react';

export default function Battery2BarSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M17 4v18H7V4h3V2h4v2h3zm-2 2H9v10h6V6z' />
    </svg>
  );
}
