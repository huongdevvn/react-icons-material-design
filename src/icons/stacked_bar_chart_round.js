import React from 'react';

export default function StackedBarChartRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2zM4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2v2zM10 11h4V9c0-1.1-.9-2-2-2s-2 .9-2 2v2zM16 12v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2zM18 20c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2zM12 20c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2z' />
    </svg>
  );
}
