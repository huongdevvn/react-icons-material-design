import React from 'react';

export default function HlsSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm9 6h5v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.5v2zM14 15v-1.5h-2.5V9H10v6h4z' />
    </svg>
  );
}
