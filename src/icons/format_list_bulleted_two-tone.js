import React from 'react';

export default function IconFormatListBulletedTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M7 5h14v2H7z' />
    <circle cx={4} cy={6} r={1.5} />
    <path d='M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z' />
    <circle cx={4} cy={12} r={1.5} />
  
    </svg>
  );
}