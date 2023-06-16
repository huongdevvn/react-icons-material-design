import React from 'react';

export default function IconPinchTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
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
      d='m21 15.56-4.24-1.89H15V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10.61l-4.17-.89 3.7 3.78h6.55l.92-5.44z'
      opacity={0.3}
    />
    <path d='M6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5H6zm15.89 11.27-3.8-1.67c-.13-.06-.28-.1-.44-.1H17V7.5a2.5 2.5 0 0 0-5 0v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L7 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44a2 2 0 0 0-1.08-2.12zM20.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L21 15.56 20.08 21z' />
  
    </svg>
  );
}