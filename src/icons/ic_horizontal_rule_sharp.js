import React from 'react';

export default function icHorizontalRuleSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path fill-rule='evenodd' d='M4 11h16v2H4z' />
    </svg>
  );
}
