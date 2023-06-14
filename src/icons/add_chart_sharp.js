import React from 'react';

export default function AddChartSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 19H5V5h9V3H3v18h18V10h-2z' />
      <path d='M11 7h2v10h-2zM15 13h2v4h-2zM7 10h2v7H7zM19 5V3h-2v2h-2v2h2v2h2V7h2V5z' />
    </svg>
  );
}
