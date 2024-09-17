import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>product list/tag</h1>
      <h2><Link href="product/1" replace>pruduct 1</Link></h2>
      <h2><Link href="product/2" replace>pruduct 2</Link></h2>
      <h2><Link href="product/3" replace>pruduct 3</Link></h2>

      <Link href="/">Home</Link>
    </div>
  )
}

export default page
