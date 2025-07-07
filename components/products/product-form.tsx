// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { createProduct, updateProduct } from "@/lib/product-actions"
// import type { Product } from "@/lib/types"

// interface ProductFormProps {
//   product?: Product
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// export function ProductForm({ product, open, onOpenChange }: ProductFormProps) {
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   async function handleSubmit(formData: FormData) {
//     setIsLoading(true)
//     setError(null)

//     try {
//       if (product) {
//         await updateProduct(product.id, formData)
//       } else {
//         await createProduct(formData)
//       }
//       onOpenChange(false)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
//         </DialogHeader>

//         <form action={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" name="name" defaultValue={product?.name} required disabled={isLoading} />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               name="description"
//               defaultValue={product?.description}
//               required
//               disabled={isLoading}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="category">Category</Label>
//             <Select name="category" defaultValue={product?.category} required>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="men">Men's</SelectItem>
//                 <SelectItem value="women">Women's</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Switch id="enabled" name="enabled" defaultChecked={product?.enabled ?? true} disabled={isLoading} />
//             <Label htmlFor="enabled">Enabled</Label>
//           </div>

//           {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

//           <div className="flex justify-end space-x-2">
//             <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
//               Cancel
//             </Button>
//             <Button type="submit" disabled={isLoading}>
//               {isLoading ? "Saving..." : product ? "Update" : "Create"}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { createProduct, updateProduct } from "@/lib/product-actions"
import type { Product } from "@/lib/types"

interface ProductFormProps {
  product?: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductForm({ product, open, onOpenChange }: ProductFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(true)
  const [category, setCategory] = useState("")

  // Reset form state when product changes or dialog opens
  useEffect(() => {
    if (open) {
      setEnabled(product?.enabled ?? true)
      setCategory(product?.category || "")
      setError(null)
    }
  }, [open, product])

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)

    try {
      // Ensure the enabled value is set correctly
      formData.set("enabled", enabled ? "true" : "false")
      formData.set("category", category)

      if (product) {
        await updateProduct(product.id, formData)
      } else {
        await createProduct(formData)
      }
      onOpenChange(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
        </DialogHeader>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue={product?.name} required disabled={isLoading} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={product?.description}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="men">Men's</SelectItem>
                <SelectItem value="women">Women's</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="category" value={category} />
          </div>

          <div className="flex items-center space-x-2">
            <input type="hidden" name="enabled" value={enabled ? "true" : "false"} />
            <Switch id="enabled" checked={enabled} onCheckedChange={setEnabled} disabled={isLoading} />
            <Label htmlFor="enabled">{enabled ? "Enabled" : "Disabled"}</Label>
          </div>

          {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : product ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


