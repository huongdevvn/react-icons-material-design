import React from 'react';

export default function VillaTwoTone({ ...restProps }) {
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
        d='m5 9.37 9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z'
        opacity='.3'
      />
      <path d='M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z' />
    </svg>
  );
}
