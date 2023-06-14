import React from 'react';

export default function ForestFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z' />
      <path d='M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z' />
    </svg>
  );
}
