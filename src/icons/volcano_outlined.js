import React from 'react';

export default function IconVolcanoOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 8h-7l-2 5H6l-4 9h20L18 8zM7.3 15h3.05l.5-1.26 1.5-3.74h4.14l2.86 10H5.08l2.22-5zM13 1h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z' />
  
    </svg>
  );
}