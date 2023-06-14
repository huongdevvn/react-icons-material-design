import React from 'react';

export default function AdUnitsSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 1H5v22h14V1zm-2 18H7V5h10v14z' />
      <path d='M8 6h8v2H8z' />
    </svg>
  );
}
