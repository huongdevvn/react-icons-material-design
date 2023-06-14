import React from 'react';

export default function HouseboatSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66L18.67 13H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.33l-1.66-1.66-1.41 1.41L4.5 15h15l2.25-2.25-1.41-1.41zM13 13h-2v-2h2v2z' />
    </svg>
  );
}
