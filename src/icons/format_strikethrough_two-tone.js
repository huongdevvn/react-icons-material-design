import React from 'react';

export default function IconFormatStrikethroughTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z' />
  
    </svg>
  );
}