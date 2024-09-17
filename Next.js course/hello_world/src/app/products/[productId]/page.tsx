import React from 'react';
import { Metadata } from 'next/types';  // Import Metadata type correctly


type Props = {
  params: {
    productId: string;
  };
};

// Async function to generate metadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: title, // Dynamically set the title
  };
};

const Page = ({ params }: Props) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta voluptatum quia
        labore facilis voluptatibus earum nesciunt ad nostrum debitis nisi, reprehenderit culpa
        consectetur consequatur! Quod dolorem laborum sequi molestias!
      </p>
      <h4>This is the product detail, and the id is: {params.productId}</h4>
    </div>
  );
};

export default Page;
