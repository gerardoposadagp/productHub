// import Link from "next/link"
// import { createClient } from "@/utils/supabase/server"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { ShoppingBag, Users, Package, TrendingUp } from "lucide-react"
// import type { DashboardStats } from "@/lib/types"

// async function getDashboardStats(): Promise<DashboardStats> {
//   const supabase = await createClient()

//   const { data: products } = await supabase.from("products").select(`
//       category_id,
//       enabled,
//       categories (
//         name
//       )
//     `)

//   if (!products) {
//     return {
//       totalProducts: 0,
//       totalMenProducts: 0,
//       totalWomenProducts: 0,
//       totalEnabledProducts: 0,
//     }
//   }

//   return {
//     totalProducts: products.length,
//     totalMenProducts: products.filter((p) => p.categories?.name === "men").length,
//     totalWomenProducts: products.filter((p) => p.categories?.name === "women").length,
//     totalEnabledProducts: products.filter((p) => p.enabled).length,
//   }
// }

// export default async function HomePage() {
//   const supabase = await createClient()
//   const {
//     data: { user },
//   } = await supabase.auth.getUser()
//   const stats = await getDashboardStats()

//   const { data: recentProducts } = await supabase
//     .from("products")
//     .select(`
//       *,
//       categories (
//         name
//       )
//     `)
//     .order("created_at", { ascending: false })
//     .limit(5)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div className="flex items-center">
//               <ShoppingBag className="h-8 w-8 text-blue-600" />
//               <h1 className="ml-2 text-2xl font-bold text-gray-900">ProductHub</h1>
//             </div>
//             <div className="flex space-x-4">
//               {user ? (
//                 <Link href="/dashboard">
//                   <Button>Go to Dashboard</Button>
//                 </Link>
//               ) : (
//                 <>
//                   <Link href="/auth/sign-in">
//                     <Button variant="outline">Sign In</Button>
//                   </Link>
//                   <Link href="/auth/sign-up">
//                     <Button>Sign Up</Button>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Management Dashboard</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Manage your product inventory with ease. Track products, categories, and status all in one place.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Total Products</CardTitle>
//               <Package className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.totalProducts}</div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Men's Products</CardTitle>
//               <Users className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.totalMenProducts}</div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Women's Products</CardTitle>
//               <Users className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.totalWomenProducts}</div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Enabled Products</CardTitle>
//               <TrendingUp className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.totalEnabledProducts}</div>
//             </CardContent>
//           </Card>
//         </div>

//         {recentProducts && recentProducts.length > 0 && (
//           <Card>
//             <CardHeader>
//               <CardTitle>Recent Products</CardTitle>
//               <CardDescription>Latest products added to the system</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Category</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Created</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {recentProducts.map((product) => (
//                     <TableRow key={product.id}>
//                       <TableCell className="font-medium">{product.name}</TableCell>
//                       <TableCell>
//                         <Badge variant={product.categories?.name === "men" ? "default" : "secondary"}>
//                           {product.categories?.name === "men" ? "Men's" : "Women's"}
//                         </Badge>
//                       </TableCell>
//                       <TableCell>
//                         <Badge variant={product.enabled ? "default" : "secondary"}>
//                           {product.enabled ? "Enabled" : "Disabled"}
//                         </Badge>
//                       </TableCell>
//                       <TableCell>{new Date(product.created_at).toLocaleDateString()}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   )
// }

import Link from "next/link"
import { createClient } from "@/utils/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Users, Package, TrendingUp } from "lucide-react"
import type { DashboardStats } from "@/lib/types"

function formatCategoryName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1) + "'s"
}

function getCategoryColor(name: string): string {
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

async function getDashboardStats(): Promise<DashboardStats> {
  const supabase = await createClient()

  const { data: products } = await supabase.from("products").select(`
      category_id,
      enabled,
      categories (
        name
      )
    `)

  if (!products) {
    return {
      totalProducts: 0,
      totalMenProducts: 0,
      totalWomenProducts: 0,
      totalEnabledProducts: 0,
    }
  }

  return {
    totalProducts: products.length,
    totalMenProducts: products.filter((p) => p.categories?.name === "men").length,
    totalWomenProducts: products.filter((p) => p.categories?.name === "women").length,
    totalEnabledProducts: products.filter((p) => p.enabled).length,
  }
}

export default async function HomePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const stats = await getDashboardStats()

  const { data: recentProducts } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        name
      )
    `)
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">ProductHub</h1>
            </div>
            <div className="flex space-x-4">
              {user ? (
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/auth/sign-in">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link href="/auth/sign-up">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Management Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your product inventory with ease. Track products, categories, and status all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProducts}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Men's Products</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMenProducts}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Women's Products</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalWomenProducts}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enabled Products</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalEnabledProducts}</div>
            </CardContent>
          </Card>
        </div>

        {recentProducts && recentProducts.length > 0 && (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Products</CardTitle>
              <CardDescription className="text-gray-400">Latest products added to the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700 hover:bg-gray-800/30">
                      <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Name</TableHead>
                      <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Category</TableHead>
                      <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Status</TableHead>
                      <TableHead className="text-gray-300 font-medium text-sm py-4 px-6">Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProducts.map((product) => (
                      <TableRow key={product.id} className="border-gray-700 hover:bg-gray-800/30 transition-colors">
                        <TableCell className="font-medium text-white py-4 px-6">{product.name}</TableCell>
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
                            <div
                              className={`w-2 h-2 rounded-full ${product.enabled ? "bg-green-400" : "bg-gray-500"}`}
                            />
                            <span
                              className={`text-sm font-medium ${product.enabled ? "text-green-300" : "text-gray-400"}`}
                            >
                              {product.enabled ? "Enabled" : "Disabled"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300 py-4 px-6 text-sm">
                          {new Date(product.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
