import React from 'react'
import Link from "next/link"
import Card from "@/components/card"
const page = () => {
  return (
    <div>
      <Card><Link href="/complex-dashboard/archived">Notification</Link></Card>
    </div>
  )
}

export default page
