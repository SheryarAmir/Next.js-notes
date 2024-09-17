import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h2 className='text-white'>This is the home page in the app folder</h2>
      <Link href='/blog'>
        Blog
      </Link>
      <Link href='/products'>
        Product
      </Link>
    </div>
  );
};

export default Page;
