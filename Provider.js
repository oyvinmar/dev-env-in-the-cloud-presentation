import { Head } from 'mdx-deck';
import React from 'react';

export default props => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/public/fonts.css" />
      </Head>
      {props.children}
    </>
  );
};
