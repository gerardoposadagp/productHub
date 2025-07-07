// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { createCategory, updateCategory } from "@/lib/category-actions"
// import type { Category } from "@/lib/types"

// interface CategoryFormProps {
//   category?: Category
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// export function CategoryForm({ category, open, onOpenChange }: CategoryFormProps) {
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   // Reset error when dialog opens
//   useEffect(() => {
//     if (open) {
//       setError(null)
//     }
//   }, [open])

//   async function handleSubmit(formData: FormData) {
//     setIsLoading(true)
//     setError(null)

//     try {
//       if (category) {
//         await updateCategory(category.id, formData)
//       } else {
//         await createCategory(formData)
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
//           <DialogTitle>{category ? "Edit Category" : "Add New Category"}</DialogTitle>
//         </DialogHeader>

//         <form action={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Category Name</Label>
//             <Input
//               id="name"
//               name="name"
//               defaultValue={category?.name}
//               placeholder="e.g., electronics, clothing, books"
//               required
//               disabled={isLoading}
//             />
//           </div>

//           {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

//           <div className="flex justify-end space-x-2">
//             <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
//               Cancel
//             </Button>
//             <Button type="submit" disabled={isLoading}>
//               {isLoading ? "Saving..." : category ? "Update" : "Create"}
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"
import { createCategory, updateCategory } from "@/lib/category-actions"
import type { Category } from "@/lib/types"

interface CategoryFormProps {
  category?: Category
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CategoryForm({ category, open, onOpenChange }: CategoryFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Reset error when dialog opens
  useEffect(() => {
    if (open) {
      setError(null)
    }
  }, [open])

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)

    try {
      if (category) {
        await updateCategory(category.id, formData)
      } else {
        await createCategory(formData)
      }
      onOpenChange(false)
    } catch (err) {
      // Convert database errors to user-friendly messages
      let errorMessage = "An error occurred"
      if (err instanceof Error) {
        if (err.message.includes("duplicate") || err.message.includes("already exists")) {
          errorMessage = "A category with this name already exists"
        } else if (err.message.includes("violates")) {
          errorMessage = "Please check the category name"
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
          <DialogTitle>{category ? "Edit Category" : "Add New Category"}</DialogTitle>
        </DialogHeader>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={category?.name}
              placeholder="e.g., electronics, clothing, books"
              required
              disabled={isLoading}
            />
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
              {isLoading ? "Saving..." : category ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
