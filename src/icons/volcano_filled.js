import React from 'react';

export default function VolcanoFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M18 8h-7l-2 5H6l-4 9h20zM13 1h2v4h-2zM16.121 5.468 18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z' />
    </svg>
  );
}
