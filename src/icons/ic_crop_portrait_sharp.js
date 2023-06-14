import React from 'react';

export default function icCropPortraitSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 3H5v18h14V3zm-2 16H7V5h10v14z' />
    </svg>
  );
}
