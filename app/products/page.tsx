import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { ProductTable } from "@/components/products/product-table"

export default async function ProductsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/sign-in")
  }

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Products</h1>
        <p className="text-gray-400">Manage your product inventory</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <ProductTable products={products || []} />
      </div>
    </div>
  )
}
