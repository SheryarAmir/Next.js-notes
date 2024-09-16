import React from 'react'
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { productId: string; reviewId: string } }) => {
  if (parseInt(params.reviewId) > 100) {
    return notFound();  // Properly returning the notFound() function
  }

  return (
    <div>
      <h1>This is the review = {params.reviewId} of the product id = {params.productId}</h1>
    </div>
  );
}

export default Page;
