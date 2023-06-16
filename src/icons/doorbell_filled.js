import React from 'react';

export default function IconDoorbellFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 3 4 9v12h16V9l-8-6zm0 14.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm4-1.5H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25c1.44.34 2.25 1.62 2.25 3.16V15h1v1z' />
  
    </svg>
  );
}