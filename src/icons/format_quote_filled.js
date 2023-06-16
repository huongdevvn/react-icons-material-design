import React from 'react';

export default function IconFormatQuoteFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' />
  
    </svg>
  );
}