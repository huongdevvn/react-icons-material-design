import React from 'react';

export default function VideoLabelSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M23 3H1v18h22V3zm-2 13H3V5h18v11z' />
    </svg>
  );
}
