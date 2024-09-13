import {
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PageHeader } from "../_components/PageHeader"
// Next.js Link component should be used instead of lucide-react
import Link from "next/link"

export default function AdminProductPage() {
  return (
    <>
      <div className="text-black flex justify-between gap-4 items-center">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          {/* Use Next.js Link component for routing */}
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>

      {/* Capitalized ProductsTable */}
      <ProductsTable />
    </>
  )
}

function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available for Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      {/* You may want to add TableBody and TableRows for actual product data here */}
    
    </Table>

  
  )
}
