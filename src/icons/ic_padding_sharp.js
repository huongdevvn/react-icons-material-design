import React from 'react';

export default function icPaddingSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M3 3v18h18V3H3zm6 6H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z' />
    </svg>
  );
}
