import React from 'react';

export default function IconWebAssetSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 4v16h18V4H3zm16 14H5V8h14v10z' />
  
    </svg>
  );
}