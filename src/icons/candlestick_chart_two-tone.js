import React from 'react';

export default function IconCandlestickChartTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8z' />
    <path d='M7 8h2v8H7zm8 2h2v3h-2z' opacity={0.3} />
    <path d='M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z' />
  
    </svg>
  );
}