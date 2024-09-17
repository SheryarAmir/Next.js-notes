import React from 'react'
import { notFound } from 'next/navigation';

function getRandomInt(count:number){
  return Math.floor(Math.random() * count);
}

const Page = ({ params }: { params: { productId: string; reviewId: string } }) => {

 const random= getRandomInt(2)
 if(random===1){
  throw new Error("Error lading reviwing")
 }
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
