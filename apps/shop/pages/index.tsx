import React from 'react';
import Link from 'next/link'
import { formatTitle } from '@happyorg/utils'
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
    <div>
      {formatTitle('Index Page')}
    </div>
    <Link href="/about">About</Link>
    </>
  );
}

export default Index;
