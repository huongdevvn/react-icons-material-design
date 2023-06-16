import React from 'react';

export default function IconTextFieldsTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z' />
  
    </svg>
  );
}