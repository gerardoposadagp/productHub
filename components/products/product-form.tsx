// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { Switch } from "@/components/ui/switch"
// // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// // import { createProduct, updateProduct, getCategories } from "@/lib/product-actions"
// // import type { Product, Category } from "@/lib/types"

// // interface ProductFormProps {
// //   product?: Product
// //   open: boolean
// //   onOpenChange: (open: boolean) => void
// // }

// // export function ProductForm({ product, open, onOpenChange }: ProductFormProps) {
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [error, setError] = useState<string | null>(null)
// //   const [enabled, setEnabled] = useState(true)
// //   const [categoryId, setCategoryId] = useState("")
// //   const [categories, setCategories] = useState<Category[]>([])

// //   // Load categories when component mounts
// //   useEffect(() => {
// //     async function loadCategories() {
// //       try {
// //         const categoriesData = await getCategories()
// //         setCategories(categoriesData)
// //       } catch (err) {
// //         console.error("Failed to load categories:", err)
// //       }
// //     }
// //     loadCategories()
// //   }, [])

// //   // Reset form state when product changes or dialog opens
// //   useEffect(() => {
// //     if (open) {
// //       setEnabled(product?.enabled ?? true)
// //       setCategoryId(product?.category_id?.toString() || "")
// //       setError(null)
// //     }
// //   }, [open, product])

// //   async function handleSubmit(formData: FormData) {
// //     setIsLoading(true)
// //     setError(null)

// //     try {
// //       // Ensure the enabled value is set correctly
// //       formData.set("enabled", enabled ? "true" : "false")
// //       formData.set("category_id", categoryId)

// //       if (product) {
// //         await updateProduct(product.id, formData)
// //       } else {
// //         await createProduct(formData)
// //       }
// //       onOpenChange(false)
// //     } catch (err) {
// //       setError(err instanceof Error ? err.message : "An error occurred")
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   return (
// //     <Dialog open={open} onOpenChange={onOpenChange}>
// //       <DialogContent className="sm:max-w-md">
// //         <DialogHeader>
// //           <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
// //         </DialogHeader>

// //         <form action={handleSubmit} className="space-y-4">
// //           <div className="space-y-2">
// //             <Label htmlFor="name">Name</Label>
// //             <Input id="name" name="name" defaultValue={product?.name} required disabled={isLoading} />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="description">Description</Label>
// //             <Textarea
// //               id="description"
// //               name="description"
// //               defaultValue={product?.description}
// //               required
// //               disabled={isLoading}
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="category_id">Category</Label>
// //             <Select value={categoryId} onValueChange={setCategoryId} required>
// //               <SelectTrigger>
// //                 <SelectValue placeholder="Select category" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {categories.map((category) => (
// //                   <SelectItem key={category.id} value={category.id.toString()}>
// //                     {category.name === "men" ? "Men's" : "Women's"}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>
// //             <input type="hidden" name="category_id" value={categoryId} />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <input type="hidden" name="enabled" value={enabled ? "true" : "false"} />
// //             <Switch id="enabled" checked={enabled} onCheckedChange={setEnabled} disabled={isLoading} />
// //             <Label htmlFor="enabled">{enabled ? "Enabled" : "Disabled"}</Label>
// //           </div>

// //           {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

// //           <div className="flex justify-end space-x-2">
// //             <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
// //               Cancel
// //             </Button>
// //             <Button type="submit" disabled={isLoading}>
// //               {isLoading ? "Saving..." : product ? "Update" : "Create"}
// //             </Button>
// //           </div>
// //         </form>
// //       </DialogContent>
// //     </Dialog>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { createProduct, updateProduct, getCategories } from "@/lib/product-actions"
// import type { Product, Category } from "@/lib/types"

// interface ProductFormProps {
//   product?: Product
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// function formatCategoryName(name: string): string {
//   // Capitalize first letter and add apostrophe + s for proper display
//   return name.charAt(0).toUpperCase() + name.slice(1) + "'s"
// }

// export function ProductForm({ product, open, onOpenChange }: ProductFormProps) {
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [enabled, setEnabled] = useState(true)
//   const [categoryId, setCategoryId] = useState("")
//   const [categories, setCategories] = useState<Category[]>([])

//   // Load categories when component mounts
//   useEffect(() => {
//     async function loadCategories() {
//       try {
//         const categoriesData = await getCategories()
//         setCategories(categoriesData)
//       } catch (err) {
//         console.error("Failed to load categories:", err)
//       }
//     }
//     loadCategories()
//   }, [])

//   // Reset form state when product changes or dialog opens
//   useEffect(() => {
//     if (open) {
//       setEnabled(product?.enabled ?? true)
//       setCategoryId(product?.category_id?.toString() || "")
//       setError(null)
//     }
//   }, [open, product])

//   async function handleSubmit(formData: FormData) {
//     setIsLoading(true)
//     setError(null)

//     try {
//       // Ensure the enabled value is set correctly
//       formData.set("enabled", enabled ? "true" : "false")
//       formData.set("category_id", categoryId)

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
//             <Label htmlFor="category_id">Category</Label>
//             <Select value={categoryId} onValueChange={setCategoryId} required>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select category" />
//               </SelectTrigger>
//               <SelectContent>
//                 {categories.map((category) => (
//                   <SelectItem key={category.id} value={category.id.toString()}>
//                     {formatCategoryName(category.name)}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <input type="hidden" name="category_id" value={categoryId} />
//           </div>

//           <div className="flex items-center space-x-2">
//             <input type="hidden" name="enabled" value={enabled ? "true" : "false"} />
//             <Switch id="enabled" checked={enabled} onCheckedChange={setEnabled} disabled={isLoading} />
//             <Label htmlFor="enabled">{enabled ? "Enabled" : "Disabled"}</Label>
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
import { AlertTriangle } from "lucide-react"
import { createProduct, updateProduct, getCategories } from "@/lib/product-actions"
import type { Product, Category } from "@/lib/types"

interface ProductFormProps {
  product?: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatCategoryName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1) + "'s"
}

export function ProductForm({ product, open, onOpenChange }: ProductFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(true)
  const [categoryId, setCategoryId] = useState("")
  const [categories, setCategories] = useState<Category[]>([])
  const [showValidation, setShowValidation] = useState(false)

  // Load categories when component mounts
  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData)
      } catch (err) {
        console.error("Failed to load categories:", err)
      }
    }
    loadCategories()
  }, [])

  // Reset form state when product changes or dialog opens
  useEffect(() => {
    if (open) {
      setEnabled(product?.enabled ?? true)
      setCategoryId(product?.category_id?.toString() || "")
      setError(null)
      setShowValidation(false)
    }
  }, [open, product])

  async function handleSubmit(formData: FormData) {
    // Check if category is selected
    if (!categoryId) {
      setShowValidation(true)
      return
    }

    setIsLoading(true)
    setError(null)
    setShowValidation(false)

    try {
      // Ensure the enabled value is set correctly
      formData.set("enabled", enabled ? "true" : "false")
      formData.set("category_id", categoryId)

      if (product) {
        await updateProduct(product.id, formData)
      } else {
        await createProduct(formData)
      }
      onOpenChange(false)
    } catch (err) {
      // Convert database errors to user-friendly messages
      let errorMessage = "An error occurred"
      if (err instanceof Error) {
        if (err.message.includes("category_id") && err.message.includes("not-null")) {
          errorMessage = "Please select a category"
        } else if (err.message.includes("violates")) {
          errorMessage = "Please check all required fields"
        } else {
          errorMessage = err.message
        }
      }
      setError(errorMessage)
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

          <div className="space-y-2 relative">
            <Label htmlFor="category_id">Category</Label>
            <Select
              value={categoryId}
              onValueChange={(value) => {
                setCategoryId(value)
                if (showValidation && value) {
                  setShowValidation(false)
                }
              }}
              required
            >
              <SelectTrigger className={showValidation && !categoryId ? "border-orange-400" : ""}>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {formatCategoryName(category.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {showValidation && !categoryId && (
              <div className="absolute top-full left-0 mt-1 z-10">
                <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-800 px-3 py-2 rounded-md shadow-sm text-sm">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <span>Please select a category</span>
                </div>
              </div>
            )}
            <input type="hidden" name="category_id" value={categoryId} />
          </div>

          <div className="flex items-center space-x-2">
            <input type="hidden" name="enabled" value={enabled ? "true" : "false"} />
            <Switch id="enabled" checked={enabled} onCheckedChange={setEnabled} disabled={isLoading} />
            <Label htmlFor="enabled">{enabled ? "Enabled" : "Disabled"}</Label>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded-md text-sm">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span>{error}</span>
            </div>
          )}

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
