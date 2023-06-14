import React from 'react';

export default function icShop2Outlined({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z' />
      <path d='M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z' />
      <path d='M12 8v7l5.5-3.5z' />
    </svg>
  );
}