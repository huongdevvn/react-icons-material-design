import React from 'react';

export default function icWarningAmberFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z' />
      <path d='M13 16h-2v2h2zM13 10h-2v5h2z' />
    </svg>
  );
}
