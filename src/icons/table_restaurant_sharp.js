import React from 'react';

export default function IconTableRestaurantSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m22.33 11-2-7H3.67l-2 7H5.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9h3.53zm-15.4 2 .27-2h9.6l.27 2H6.93z' />
  
    </svg>
  );
}