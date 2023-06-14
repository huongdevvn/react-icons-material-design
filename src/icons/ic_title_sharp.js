import React from 'react';

export default function icTitleSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M5 4v3h5.5v12h3V7H19V4H5z' />
    </svg>
  );
}
