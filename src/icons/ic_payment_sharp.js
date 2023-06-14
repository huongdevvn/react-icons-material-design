import React from 'react';

export default function icPaymentSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z' />
    </svg>
  );
}