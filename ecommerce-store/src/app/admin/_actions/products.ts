"use server"
import { z } from "zod"

// Create a schema for a file (use the native `File` object, not from "lucide-react")
const fileSchema = z.instanceof(File, { message: "Required" })

// Ensure the file is an image and has a size greater than 0
const imageSchema = fileSchema.refine(file => file.size > 0 && file.type.startsWith("image/"), {
  message: "Must be a valid image"
})

// Create a schema for product data
const addSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  priceInCents: z.coerce.number().int().min(1, { message: "Price must be at least 1 cent" }),
  files: fileSchema.refine(file => file.size > 0, { message: "File is required" }),
  image: imageSchema
})

export async function addProduct(formData: FormData) {
  // Correct usage of `safeParse`
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!result.success) {
    // Fix typo: `fieldErrors`, not `filedErrors`
    return result.error.formErrors.fieldErrors
  }

  const data = result.data
  // Proceed with processing `data`
}
