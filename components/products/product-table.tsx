// // // "use client"

// // // import { useState } from "react"
// // // import { Button } from "@/components/ui/button"
// // // import { Badge } from "@/components/ui/badge"
// // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// // // import { Edit, Trash2, Plus } from "lucide-react"
// // // import { ProductForm } from "./product-form"
// // // import { deleteProduct } from "@/lib/product-actions"
// // // import type { Product } from "@/lib/types"

// // // interface ProductTableProps {
// // //   products: Product[]
// // // }

// // // export function ProductTable({ products }: ProductTableProps) {
// // //   const [editingProduct, setEditingProduct] = useState<Product | null>(null)
// // //   const [showForm, setShowForm] = useState(false)

// // //   async function handleDelete(id: string) {
// // //     if (confirm("Are you sure you want to delete this product?")) {
// // //       await deleteProduct(id)
// // //     }
// // //   }

// // //   return (
// // //     <div className="space-y-4">
// // //       <div className="flex justify-between items-center">
// // //         <h2 className="text-2xl font-bold">Products</h2>
// // //         <Button onClick={() => setShowForm(true)}>
// // //           <Plus className="mr-2 h-4 w-4" />
// // //           Add Product
// // //         </Button>
// // //       </div>

// // //       <div className="border rounded-lg">
// // //         <Table>
// // //           <TableHeader>
// // //             <TableRow>
// // //               <TableHead>Name</TableHead>
// // //               <TableHead>Description</TableHead>
// // //               <TableHead>Category</TableHead>
// // //               <TableHead>Status</TableHead>
// // //               <TableHead className="w-[100px]">Actions</TableHead>
// // //             </TableRow>
// // //           </TableHeader>
// // //           <TableBody>
// // //             {products.map((product) => (
// // //               <TableRow key={product.id}>
// // //                 <TableCell className="font-medium">{product.name}</TableCell>
// // //                 <TableCell className="max-w-xs truncate">{product.description}</TableCell>
// // //                 <TableCell>
// // //                   <Badge variant={product.categories?.name === "men" ? "default" : "secondary"}>
// // //                     {product.categories?.name === "men" ? "Men's" : "Women's"}
// // //                   </Badge>
// // //                 </TableCell>
// // //                 <TableCell>
// // //                   <Badge
// // //                     variant={product.enabled ? "default" : "destructive"}
// // //                     className={product.enabled ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}
// // //                   >
// // //                     {product.enabled ? "Enabled" : "Disabled"}
// // //                   </Badge>
// // //                 </TableCell>
// // //                 <TableCell>
// // //                   <div className="flex space-x-2">
// // //                     <Button
// // //                       size="sm"
// // //                       variant="outline"
// // //                       onClick={() => {
// // //                         setEditingProduct(product)
// // //                         setShowForm(true)
// // //                       }}
// // //                     >
// // //                       <Edit className="h-4 w-4" />
// // //                     </Button>
// // //                     <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
// // //                       <Trash2 className="h-4 w-4" />
// // //                     </Button>
// // //                   </div>
// // //                 </TableCell>
// // //               </TableRow>
// // //             ))}
// // //           </TableBody>
// // //         </Table>
// // //       </div>

// // //       <ProductForm
// // //         product={editingProduct}
// // //         open={showForm}
// // //         onOpenChange={(open) => {
// // //           setShowForm(open)
// // //           if (!open) setEditingProduct(null)
// // //         }}
// // //       />
// // //     </div>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// // import { Edit, Plus } from "lucide-react"
// // import { ProductForm } from "./product-form"
// // import { DeleteProductDialog } from "./delete-product-dialog"
// // import type { Product } from "@/lib/types"

// // interface ProductTableProps {
// //   products: Product[]
// // }

// // export function ProductTable({ products }: ProductTableProps) {
// //   const [editingProduct, setEditingProduct] = useState<Product | null>(null)
// //   const [showForm, setShowForm] = useState(false)

// //   return (
// //     <div className="space-y-4">
// //       <div className="flex justify-between items-center">
// //         <h2 className="text-2xl font-bold">Products</h2>
// //         <Button onClick={() => setShowForm(true)}>
// //           <Plus className="mr-2 h-4 w-4" />
// //           Add Product
// //         </Button>
// //       </div>

// //       <div className="border rounded-lg">
// //         <Table>
// //           <TableHeader>
// //             <TableRow>
// //               <TableHead>Name</TableHead>
// //               <TableHead>Description</TableHead>
// //               <TableHead>Category</TableHead>
// //               <TableHead>Status</TableHead>
// //               <TableHead className="w-[100px]">Actions</TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody>
// //             {products.map((product) => (
// //               <TableRow key={product.id}>
// //                 <TableCell className="font-medium">{product.name}</TableCell>
// //                 <TableCell className="max-w-xs truncate">{product.description}</TableCell>
// //                 <TableCell>
// //                   <Badge variant={product.categories?.name === "men" ? "default" : "secondary"}>
// //                     {product.categories?.name === "men" ? "Men's" : "Women's"}
// //                   </Badge>
// //                 </TableCell>
// //                 <TableCell>
// //                   <Badge
// //                     variant={product.enabled ? "default" : "destructive"}
// //                     className={product.enabled ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}
// //                   >
// //                     {product.enabled ? "Enabled" : "Disabled"}
// //                   </Badge>
// //                 </TableCell>
// //                 <TableCell>
// //                   <div className="flex space-x-2">
// //                     <Button
// //                       size="sm"
// //                       variant="outline"
// //                       onClick={() => {
// //                         setEditingProduct(product)
// //                         setShowForm(true)
// //                       }}
// //                     >
// //                       <Edit className="h-4 w-4" />
// //                     </Button>
// //                     <DeleteProductDialog productId={product.id} productName={product.name} />
// //                   </div>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </div>

// //       <ProductForm
// //         product={editingProduct}
// //         open={showForm}
// //         onOpenChange={(open) => {
// //           setShowForm(open)
// //           if (!open) setEditingProduct(null)
// //         }}
// //       />
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Edit, Plus } from "lucide-react"
// import { ProductForm } from "./product-form"
// import { DeleteProductDialog } from "./delete-product-dialog"
// import type { Product } from "@/lib/types"

// interface ProductTableProps {
//   products: Product[]
// }

// export function ProductTable({ products }: ProductTableProps) {
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null)
//   const [showForm, setShowForm] = useState(false)

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-semibold text-white">Products</h2>
//         <Button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
//           <Plus className="mr-2 h-4 w-4" />
//           Add Product
//         </Button>
//       </div>

//       <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
//         <Table>
//           <TableHeader>
//             <TableRow className="border-gray-700 hover:bg-gray-800/30">
//               <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Name</TableHead>
//               <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Description</TableHead>
//               <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Category</TableHead>
//               <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Status</TableHead>
//               <TableHead className="text-gray-300 font-medium text-sm py-4 px-6 w-[120px]">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {products.map((product) => (
//               <TableRow key={product.id} className="border-gray-700 hover:bg-gray-800/30 transition-colors">
//                 <TableCell className="font-medium text-white py-4 px-6">{product.name}</TableCell>
//                 <TableCell className="text-gray-300 py-4 px-6 max-w-xs">
//                   <div className="truncate" title={product.description}>
//                     {product.description}
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <Badge
//                     variant="outline"
//                     className={`
//                       border-0 font-medium text-xs px-2.5 py-1
//                       ${
//                         product.categories?.name === "men"
//                           ? "bg-blue-500/20 text-blue-300"
//                           : "bg-purple-500/20 text-purple-300"
//                       }
//                     `}
//                   >
//                     {product.categories?.name === "men" ? "Men's" : "Women's"}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full ${product.enabled ? "bg-green-400" : "bg-gray-500"}`} />
//                     <span className={`text-sm font-medium ${product.enabled ? "text-green-300" : "text-gray-400"}`}>
//                       {product.enabled ? "Enabled" : "Disabled"}
//                     </span>
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <div className="flex items-center gap-2">
//                     <Button
//                       size="sm"
//                       variant="ghost"
//                       onClick={() => {
//                         setEditingProduct(product)
//                         setShowForm(true)
//                       }}
//                       className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
//                     >
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <DeleteProductDialog productId={product.id} productName={product.name} />
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {products.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={5} className="text-center py-12 text-gray-400">
//                   No products found. Create your first product to get started.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <ProductForm
//         product={editingProduct}
//         open={showForm}
//         onOpenChange={(open) => {
//           setShowForm(open)
//           if (!open) setEditingProduct(null)
//         }}
//       />
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Plus } from "lucide-react"
import { ProductForm } from "./product-form"
import { DeleteProductDialog } from "./delete-product-dialog"
import type { Product } from "@/lib/types"

interface ProductTableProps {
  products: Product[]
}

function formatCategoryName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1) + "'s"
}

function getCategoryColor(name: string): string {
  // You can extend this to support more categories with different colors
  switch (name.toLowerCase()) {
    case "men":
      return "bg-blue-500/20 text-blue-300"
    case "women":
      return "bg-purple-500/20 text-purple-300"
    case "kids":
      return "bg-green-500/20 text-green-300"
    case "accessories":
      return "bg-orange-500/20 text-orange-300"
    default:
      return "bg-gray-500/20 text-gray-300"
  }
}

export function ProductTable({ products }: ProductTableProps) {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Products</h2>
        <Button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-gray-800/30">
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Name</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Description</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Category</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Status</TableHead>
              <TableHead className="text-gray-300 font-medium text-sm py-4 px-6 w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-gray-700 hover:bg-gray-800/30 transition-colors">
                <TableCell className="font-medium text-white py-4 px-6">{product.name}</TableCell>
                <TableCell className="text-gray-300 py-4 px-6 max-w-xs">
                  <div className="truncate" title={product.description}>
                    {product.description}
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <Badge
                    variant="outline"
                    className={`border-0 font-medium text-xs px-2.5 py-1 ${getCategoryColor(
                      product.categories?.name || "",
                    )}`}
                  >
                    {product.categories?.name ? formatCategoryName(product.categories.name) : "Unknown"}
                  </Badge>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.enabled ? "bg-green-400" : "bg-gray-500"}`} />
                    <span className={`text-sm font-medium ${product.enabled ? "text-green-300" : "text-gray-400"}`}>
                      {product.enabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setEditingProduct(product)
                        setShowForm(true)
                      }}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DeleteProductDialog productId={product.id} productName={product.name} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12 text-gray-400">
                  No products found. Create your first product to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <ProductForm
        product={editingProduct}
        open={showForm}
        onOpenChange={(open) => {
          setShowForm(open)
          if (!open) setEditingProduct(null)
        }}
      />
    </div>
  )
}
