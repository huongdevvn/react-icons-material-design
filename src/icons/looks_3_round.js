import React from 'react';

export default function Looks3Round({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 3H5.01c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3.99 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15a2 2 0 0 1-2 2H10c-.55 0-1-.45-1-1s.45-1 1-1h3.01L13 13h-1c-.55 0-1-.45-1-1s.45-1 1-1h1l.01-2H10c-.55 0-.99-.45-.99-1s.44-1 .99-1h3.01c1.1 0 2 .9 2 2v1.5z' />
    </svg>
  );
}
