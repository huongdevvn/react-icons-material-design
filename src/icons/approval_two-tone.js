import React from 'react';

export default function IconApprovalTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
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
      d='M6 16h12v2H6zm6-12c-1.66 0-3 1.34-3 3l3 4 3-4c0-1.66-1.34-3-3-3z'
      opacity={0.3}
    />
    <path d='M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4zm6 3H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2zm0 4H6v-2h12v2z' />
  
    </svg>
  );
}