import React from 'react';

export default function icGetAppFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />
    </svg>
  );
}
