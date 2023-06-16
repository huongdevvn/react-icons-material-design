import React from 'react';

export default function IconNavigationSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z' />
  
    </svg>
  );
}