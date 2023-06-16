import React from 'react';

export default function IconTrendingFlatOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m22 12-4-4v3H3v2h15v3l4-4z' />
  
    </svg>
  );
}