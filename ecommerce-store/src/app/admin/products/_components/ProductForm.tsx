"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/formatters"
import { useState } from "react"
import { addProduct } from "../../_actions/products"

export function ProductForm() {
    const [priceInCents ,setPriceInCents]=useState<number>()
  return (
    <form className="space-y-6 text-black  w-80  items-center mx-auto " action={addProduct}>
      <div className="space-y-6">
        {/* Use proper label text for accessibility */}
        <Label htmlFor="name">Product Name</Label>
        <Input type="text" id="name" name="name" required />
      </div>

      <div className="space-y-6">
        {/* Use proper label text for accessibility */}
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input type="text" id="priceInCents" name="priceInCents" required value={priceInCents} 
        onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)} />

     <div className="text-muted-foreground">{formatCurrency(priceInCents  || 0 / 100)}</div>

      </div>
      <div className="space-y-6">
        {/* Use proper label text for accessibility */}
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>

      <div className="space-y-6">
        {/* Use proper label text for accessibility */}
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required />
      </div>
      <div className="space-y-6">
        {/* Use proper label text for accessibility */}
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required />
      </div>
      <Button type="submit">Save</Button>
    </form>
  )
} 
