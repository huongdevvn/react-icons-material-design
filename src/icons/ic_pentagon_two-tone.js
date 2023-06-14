import React from 'react';

export default function icPentagonTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path opacity='.3' d='M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z' />
      <path d='M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z' />
    </svg>
  );
}
