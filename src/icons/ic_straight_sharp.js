import React from 'react';

export default function icStraightSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z' />
    </svg>
  );
}
