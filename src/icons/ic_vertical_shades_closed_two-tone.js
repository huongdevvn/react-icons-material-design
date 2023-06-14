import React from 'react';

export default function icVerticalShadesClosedTwoTone({ ...restProps }) {
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
        opacity='.2'
        d='M9.5 5H11v14H9.5zM6 5h1.5v14H6zM13 5h1.5v14H13zM16.5 5H18v14h-1.5z'
      />
      <path d='M20 19V3H4v16H2v2h20v-2h-2zM7.5 19H6V5h1.5v14zm3.5 0H9.5V5H11v14zm3.5 0H13V5h1.5v14zm3.5 0h-1.5V5H18v14z' />
    </svg>
  );
}