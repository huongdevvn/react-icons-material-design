import React from 'react';

export default function icStrollerFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <circle cx='16' cy='20' r='2' />
      <circle cx='6' cy='20' r='2' />
      <path d='M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2zM14.3 4.1a8.962 8.962 0 0 0-9.58.62l4.89 4.89L14.3 4.1z' />
    </svg>
  );
}