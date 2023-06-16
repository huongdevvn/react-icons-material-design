import React from 'react';

export default function IconViewListOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 5v14h18V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm14 2H9v-2h10v2zm0-4H9v-2h10v2zm0-4H9V7h10v2z' />
  
    </svg>
  );
}