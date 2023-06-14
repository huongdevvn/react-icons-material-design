import React from 'react';

export default function icDiamondSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M12.16 3h-.32L9.21 8.25h5.58zM16.46 8.25h5.16L19 3h-5.16zM21.38 9.75h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H5L2.38 8.25z' />
    </svg>
  );
}
