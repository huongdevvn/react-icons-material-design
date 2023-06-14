import React from 'react';

export default function CropSquareSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M20 4H4v16h16V4zm-2 14H6V6h12v12z' />
    </svg>
  );
}
