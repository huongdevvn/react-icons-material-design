import React from 'react';

export default function icWarningTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path
        d='M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z'
        opacity='.3'
      />
      <path d='M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z' />
    </svg>
  );
}
