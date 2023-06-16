import React from 'react';

export default function IconPivotTableChartSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M10 3h11v5H10zm-7 7h5v11H3zm0-7h5v5H3zm15 6-4 4h3v4h-4v-3l-4 4 4 4v-3h6v-6h3z' />
  
    </svg>
  );
}