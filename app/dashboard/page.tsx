import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Users, TrendingUp, ShoppingCart } from "lucide-react"
import type { DashboardStats } from "@/lib/types"

async function getDashboardStats(userId: string): Promise<DashboardStats> {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from("products")
    .select(`
      category_id,
      enabled,
      categories (
        name
      )
    `)
    .eq("user_id", userId)

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

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/sign-in")
  }

  const stats = await getDashboardStats(user.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's an overview of your products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Total Products</CardTitle>
            <Package className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalProducts}</div>
            <p className="text-xs text-gray-400">All products in your inventory</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Men's Products</CardTitle>
            <Users className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalMenProducts}</div>
            <p className="text-xs text-gray-400">Products in men's category</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Women's Products</CardTitle>
            <ShoppingCart className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalWomenProducts}</div>
            <p className="text-xs text-gray-400">Products in women's category</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Enabled Products</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalEnabledProducts}</div>
            <p className="text-xs text-gray-400">Currently active products</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-gray-400">Get started with managing your products</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">Add Products</h3>
              <p className="text-sm text-gray-400">Start by adding your first product to the inventory.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">Manage Categories</h3>
              <p className="text-sm text-gray-400">Organize your products by men's and women's categories.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">Track Status</h3>
              <p className="text-sm text-gray-400">Enable or disable products as needed.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
