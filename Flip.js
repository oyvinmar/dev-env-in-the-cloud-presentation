import React from 'react';

export function Flip({ children }) {
  return (
    <span css={{ transform: 'rotateY(180deg)', display: 'inline-block' }}>
      {children}
    </span>
  );
}
