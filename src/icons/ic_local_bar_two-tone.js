import React from 'react';

export default function icLocalBarTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M9.23 9 12 12.11 14.77 9z' opacity='.3' />
      <path d='M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM5.66 5h12.69l-1.78 2H7.43L5.66 5zM12 12.11 9.23 9h5.54L12 12.11z' />
    </svg>
  );
}