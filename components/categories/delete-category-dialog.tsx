// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog"
// import { Trash2 } from "lucide-react"
// import { deleteCategory } from "@/lib/category-actions"

// interface DeleteCategoryDialogProps {
//   categoryId: number
//   categoryName: string
//   productCount: number
// }

// export function DeleteCategoryDialog({ categoryId, categoryName, productCount }: DeleteCategoryDialogProps) {
//   const [open, setOpen] = useState(false)
//   const [isDeleting, setIsDeleting] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   async function handleDelete() {
//     setIsDeleting(true)
//     setError(null)
//     try {
//       await deleteCategory(categoryId)
//       setOpen(false)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to delete category")
//     } finally {
//       setIsDeleting(false)
//     }
//   }

//   const canDelete = productCount === 0

//   return (
//     <AlertDialog open={open} onOpenChange={setOpen}>
//       <Button
//         size="sm"
//         variant="outline"
//         onClick={() => setOpen(true)}
//         disabled={!canDelete}
//         className={canDelete ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "opacity-50 cursor-not-allowed"}
//         title={!canDelete ? "Cannot delete category with products" : "Delete category"}
//       >
//         <Trash2 className="h-4 w-4" />
//       </Button>

//       <AlertDialogContent className="bg-white">
//         <AlertDialogHeader>
//           <AlertDialogTitle className="text-red-600">Delete Category</AlertDialogTitle>
//           <AlertDialogDescription>
//             Are you sure you want to delete the category <strong>"{categoryName}"</strong>? This action cannot be
//             undone.
//             {productCount > 0 && (
//               <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
//                 <strong>Warning:</strong> This category has {productCount} product(s) associated with it. You must
//                 reassign or delete those products first.
//               </div>
//             )}
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}
//         <AlertDialogFooter>
//           <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             onClick={handleDelete}
//             disabled={isDeleting || !canDelete}
//             className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
//           >
//             {isDeleting ? "Deleting..." : "Delete Category"}
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   )
// }

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { deleteCategory } from "@/lib/category-actions"

interface DeleteCategoryDialogProps {
  categoryId: number
  categoryName: string
  productCount: number
}

export function DeleteCategoryDialog({ categoryId, categoryName, productCount }: DeleteCategoryDialogProps) {
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleDelete() {
    setIsDeleting(true)
    setError(null)
    try {
      await deleteCategory(categoryId)
      setOpen(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete category")
    } finally {
      setIsDeleting(false)
    }
  }

  const canDelete = productCount === 0

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setOpen(true)}
        disabled={!canDelete}
        className={`h-8 w-8 p-0 ${
          canDelete ? "text-gray-400 hover:text-red-400 hover:bg-red-500/10" : "text-gray-600 cursor-not-allowed"
        }`}
        title={!canDelete ? "Cannot delete category with products" : "Delete category"}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <AlertDialogContent className="bg-gray-800 border-gray-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-400">Delete Category</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            Are you sure you want to delete the category <strong className="text-white">"{categoryName}"</strong>? This
            action cannot be undone.
            {productCount > 0 && (
              <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-300 text-sm">
                <strong>Warning:</strong> This category has {productCount} product(s) associated with it. You must
                reassign or delete those products first.
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {error && (
          <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded">{error}</div>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isDeleting}
            className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting || !canDelete}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white"
          >
            {isDeleting ? "Deleting..." : "Delete Category"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
