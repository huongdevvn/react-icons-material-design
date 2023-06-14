import React from 'react';

export default function SpaceBarFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M18 9v4H6V9H4v6h16V9z' />
    </svg>
  );
}
