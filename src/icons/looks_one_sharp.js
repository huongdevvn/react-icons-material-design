import React from 'react';

export default function LooksOneSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z' />
    </svg>
  );
}
