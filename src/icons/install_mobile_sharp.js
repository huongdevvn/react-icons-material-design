import React from 'react';

export default function InstallMobileSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M17 18H7V6h7V1H5v22h14v-7h-2z' />
      <path d='m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z' />
    </svg>
  );
}
