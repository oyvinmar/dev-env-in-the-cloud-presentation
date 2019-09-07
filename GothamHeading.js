import React from 'react';

export function GothamHeading({ children, variant: Component = 'h3', style }) {
  return (
    <Component
      style={{
        ...style,
        fontFamily:
          '"Gotham Rounded A","Gotham Rounded B","Helvetica Neue",Arial,sans-serif',
      }}
    >
      {children}
    </Component>
  );
}
