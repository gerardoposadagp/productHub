import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { CategoryTable } from "@/components/categories/category-table"
import { getAllCategories } from "@/lib/category-actions"

export default async function CategoriesPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/sign-in")
  }

  const categories = await getAllCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Categories</h1>
        <p className="text-gray-400">Manage your product categories</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <CategoryTable categories={categories || []} />
      </div>
    </div>
  )
}
