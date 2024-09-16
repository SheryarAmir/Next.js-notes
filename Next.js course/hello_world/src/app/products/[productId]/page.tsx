import React from 'react'

const page = ({params}:{params:{productId:string}}) => {
  return (
    <div>
      <h1>product details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta voluptatum quia labore facilis voluptatibus earum nesciunt ad nostrum debitis nisi, reprehenderit culpa consectetur  consequatur! Quod dolorem laborum sequi molestias! </p>
      <h4>this is the product detail and the id is = {params.productId}</h4>
     </div>
  )
}

export default page
