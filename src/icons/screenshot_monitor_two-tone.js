import React from 'react';

export default function ScreenshotMonitorTwoTone({ ...restProps }) {
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
        d='M4 17h16V5H4v12zm11-2.5h2.5V12H19v4h-4v-1.5zM5 6h4v1.5H6.5V10H5V6z'
        opacity='.3'
      />
      <path d='M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z' />
      <path d='M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z' />
    </svg>
  );
}
