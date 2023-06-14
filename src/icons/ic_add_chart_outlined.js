import React from 'react';

export default function icAddChartOutlined({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9z' />
      <path d='M15 13h2v4h-2zM7 10h2v7H7zM11 7h2v10h-2zM19 5V3h-2v2h-2v2h2v2h2V7h2V5z' />
    </svg>
  );
}
