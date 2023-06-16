import React from 'react';

export default function IconBentoSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 11V5h6v6h-6zm0 8h6v-6h-6v6zM14 5v14H2V5h12zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z' />
  
    </svg>
  );
}