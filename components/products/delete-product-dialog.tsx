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
// import { deleteProduct } from "@/lib/product-actions"

// interface DeleteProductDialogProps {
//   productId: string
//   productName: string
// }

// export function DeleteProductDialog({ productId, productName }: DeleteProductDialogProps) {
//   const [open, setOpen] = useState(false)
//   const [isDeleting, setIsDeleting] = useState(false)

//   async function handleDelete() {
//     setIsDeleting(true)
//     try {
//       await deleteProduct(productId)
//       setOpen(false)
//     } catch (error) {
//       console.error("Failed to delete product:", error)
//       // You could add error handling here, like showing a toast notification
//     } finally {
//       setIsDeleting(false)
//     }
//   }

//   return (
//     <AlertDialog open={open} onOpenChange={setOpen}>
//       <Button
//         size="sm"
//         variant="outline"
//         onClick={() => setOpen(true)}
//         className="text-red-600 hover:text-red-700 hover:bg-red-50"
//       >
//         <Trash2 className="h-4 w-4" />
//       </Button>

//       <AlertDialogContent className="bg-white">
//         <AlertDialogHeader>
//           <AlertDialogTitle className="text-red-600">Delete Product</AlertDialogTitle>
//           <AlertDialogDescription>
//             Are you sure you want to delete <strong>"{productName}"</strong>? This action cannot be undone and will
//             permanently remove the product from your inventory.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             onClick={handleDelete}
//             disabled={isDeleting}
//             className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
//           >
//             {isDeleting ? "Deleting..." : "Delete Product"}
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
import { deleteProduct } from "@/lib/product-actions"

interface DeleteProductDialogProps {
  productId: string
  productName: string
}

export function DeleteProductDialog({ productId, productName }: DeleteProductDialogProps) {
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    setIsDeleting(true)
    try {
      await deleteProduct(productId)
      setOpen(false)
    } catch (error) {
      console.error("Failed to delete product:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setOpen(true)}
        className="h-8 w-8 p-0 text-gray-400 hover:text-red-400 hover:bg-red-500/10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <AlertDialogContent className="bg-gray-800 border-gray-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-400">Delete Product</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            Are you sure you want to delete <strong className="text-white">"{productName}"</strong>? This action cannot
            be undone and will permanently remove the product from your inventory.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isDeleting}
            className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white"
          >
            {isDeleting ? "Deleting..." : "Delete Product"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
