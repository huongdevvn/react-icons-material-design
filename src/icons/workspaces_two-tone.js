import React from 'react';

export default function IconWorkspacesTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <circle cx={6} cy={17} r={2} opacity={0.3} />
    <circle cx={12} cy={7} r={2} opacity={0.3} />
    <circle cx={18} cy={17} r={2} opacity={0.3} />
    <path d='M18 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM16 7c0-2.2-1.8-4-4-4S8 4.8 8 7s1.8 4 4 4 4-1.8 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
  
    </svg>
  );
}