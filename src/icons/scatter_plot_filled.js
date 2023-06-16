import React from 'react';

export default function IconScatterPlotFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <circle cx={7} cy={14} r={3} />
    <circle cx={11} cy={6} r={3} />
    <circle cx={16.6} cy={17.6} r={3} />
  
    </svg>
  );
}