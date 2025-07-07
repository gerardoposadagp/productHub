// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Edit, Plus } from "lucide-react"
// import { CategoryForm } from "./category-form"
// import { DeleteCategoryDialog } from "./delete-category-dialog"
// import type { Category } from "@/lib/types"

// interface CategoryWithCount extends Category {
//   products: { count: number }[]
// }

// interface CategoryTableProps {
//   categories: CategoryWithCount[]
// }

// export function CategoryTable({ categories }: CategoryTableProps) {
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null)
//   const [showForm, setShowForm] = useState(false)

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Categories</h2>
//         <Button onClick={() => setShowForm(true)}>
//           <Plus className="mr-2 h-4 w-4" />
//           Add Category
//         </Button>
//       </div>

//       <div className="border rounded-lg">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Products Count</TableHead>
//               <TableHead>Created</TableHead>
//               <TableHead className="w-[100px]">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {categories.map((category) => {
//               const productCount = category.products?.[0]?.count || 0
//               return (
//                 <TableRow key={category.id}>
//                   <TableCell className="font-mono text-sm">{category.id}</TableCell>
//                   <TableCell className="font-medium capitalize">{category.name}</TableCell>
//                   <TableCell>
//                     <Badge variant={productCount > 0 ? "default" : "secondary"}>
//                       {productCount} product{productCount !== 1 ? "s" : ""}
//                     </Badge>
//                   </TableCell>
//                   <TableCell>{new Date(category.created_at).toLocaleDateString()}</TableCell>
//                   <TableCell>
//                     <div className="flex space-x-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => {
//                           setEditingCategory(category)
//                           setShowForm(true)
//                         }}
//                       >
//                         <Edit className="h-4 w-4" />
//                       </Button>
//                       <DeleteCategoryDialog
//                         categoryId={category.id}
//                         categoryName={category.name}
//                         productCount={productCount}
//                       />
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               )
//             })}
//           </TableBody>
//         </Table>
//       </div>

//       <CategoryForm
//         category={editingCategory}
//         open={showForm}
//         onOpenChange={(open) => {
//           setShowForm(open)
//           if (!open) setEditingCategory(null)
//         }}
//       />
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Plus } from "lucide-react"
import { CategoryForm } from "./category-form"
import { DeleteCategoryDialog } from "./delete-category-dialog"
import type { Category } from "@/lib/types"

interface CategoryWithCount extends Category {
  products: { count: number }[]
}

interface CategoryTableProps {
  categories: CategoryWithCount[]
}

export function CategoryTable({ categories }: CategoryTableProps) {
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Categories</h2>
        <Button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-gray-800/30">
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6 w-[80px]">ID</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Name</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Products</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Created</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6 w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => {
              const productCount = category.products?.[0]?.count || 0
              return (
                <TableRow key={category.id} className="border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <TableCell className="font-mono text-sm text-gray-400 py-4 px-6">{category.id}</TableCell>
                  <TableCell className="font-medium text-white py-4 px-6 capitalize">{category.name}</TableCell>
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${productCount > 0 ? "bg-blue-400" : "bg-gray-500"}`} />
                      <span className={`text-sm font-medium ${productCount > 0 ? "text-blue-300" : "text-gray-400"}`}>
                        {productCount} product{productCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300 py-4 px-6 text-sm">
                    {new Date(category.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setEditingCategory(category)
                          setShowForm(true)
                        }}
                        className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <DeleteCategoryDialog
                        categoryId={category.id}
                        categoryName={category.name}
                        productCount={productCount}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
            {categories.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12 text-gray-400">
                  No categories found. Create your first category to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <CategoryForm
        category={editingCategory}
        open={showForm}
        onOpenChange={(open) => {
          setShowForm(open)
          if (!open) setEditingCategory(null)
        }}
      />
    </div>
  )
}
