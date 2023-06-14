import React from 'react';

export default function EjectFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M5 17h14v2H5zm7-12L5.33 15h13.34z' />
    </svg>
  );
}
