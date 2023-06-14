import React from 'react';

export default function TrendingFlatFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m22 12-4-4v3H3v2h15v3z' />
    </svg>
  );
}
