import React from 'react';

export default function DatasetOutlined({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M7 13h4v4H7zM13 13h4v4h-4z' />
      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
      <path d='M7 7h4v4H7zM13 7h4v4h-4z' />
    </svg>
  );
}
