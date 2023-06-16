import React from 'react';

export default function IconChangeHistoryTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 7.77 5.61 18h12.78z' opacity={0.3} />
    <path d='M12 4 2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z' />
  
    </svg>
  );
}