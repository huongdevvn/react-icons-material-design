import React from 'react';

export default function IconWysiwygSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 12H7v-2h10v2zm-4 2H7v2h6v-2zm8 7H3V3h18v18zM19 7H5v12h14V7z' />
  
    </svg>
  );
}