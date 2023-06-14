import React from 'react';

export default function icWidthNormalSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 4H2v16h20V4zM4 6h4v12H4V6zm16 12h-4V6h4v12z' />
    </svg>
  );
}
