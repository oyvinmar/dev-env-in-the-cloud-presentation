import { Head } from 'mdx-deck';
import React from 'react';

export default props => {
  return (
    <>
      <link rel="stylesheet" href="/public/fonts.css" />
      {props.children}
    </>
  );
};
