import React from 'react';

export default function IconDifferenceTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path
      d='M14.17 3H8v14h11V7.83L14.17 3zm2.33 12h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z'
      opacity={0.3}
    />
    <path d='M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7h-2zm2 6h-6v2h6v-2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm4 16H8V3h6.17L19 7.83V17z' />
  
    </svg>
  );
}