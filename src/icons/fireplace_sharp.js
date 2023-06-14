import React from 'react';

export default function FireplaceSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M2 2v20h20V2H2zm11.2 11.74c-.08-.46-.07-.85.08-1.28.54 1.21 2.15 1.64 1.98 3.18-.19 1.69-2.11 2.37-3.39 1.32.76-.24 1.4-1.04 1.53-1.63.12-.55-.11-1.04-.2-1.59zM20 20h-2v-2h-2.02A4.98 4.98 0 0 0 17 15c0-1.89-1.09-2.85-1.85-3.37C12.2 9.61 13 7 13 7c-6.73 3.57-6.02 7.47-6 8 .03.96.49 2.07 1.23 3H6v2H4V4h16v16z' />
    </svg>
  );
}
