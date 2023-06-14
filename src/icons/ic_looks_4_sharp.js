import React from 'react';

export default function icLooks4Sharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z' />
    </svg>
  );
}
