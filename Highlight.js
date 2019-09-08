import React from 'react';

export const Highlight = props => {
  const arr = React.Children.toArray(props.children);
  const children = arr.map((child, i) =>
    i === props.item
      ? child
      : React.cloneElement(child, {
          style: {
            ...child.props.style,
            color: '#333',
          },
        }),
  );

  return <>{children}</>;
};
