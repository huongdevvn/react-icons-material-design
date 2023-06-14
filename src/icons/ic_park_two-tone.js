import React from 'react';

export default function icParkTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path
        opacity='.3'
        d='M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z'
      />
      <path d='M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z' />
    </svg>
  );
}
