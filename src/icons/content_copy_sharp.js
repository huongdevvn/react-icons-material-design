import React from 'react';

export default function ContentCopySharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z' />
    </svg>
  );
}
