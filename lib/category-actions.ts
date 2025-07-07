"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function createCategory(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const categoryData = {
    name: formData.get("name") as string,
  }

  const { error } = await supabase.from("categories").insert([categoryData])

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/categories")
}

export async function updateCategory(id: number, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const updates = {
    name: formData.get("name") as string,
  }

  const { error } = await supabase.from("categories").update(updates).eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/categories")
}

export async function deleteCategory(id: number) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  // Check if category is being used by any products
  const { data: products, error: checkError } = await supabase
    .from("products")
    .select("id")
    .eq("category_id", id)
    .limit(1)

  if (checkError) {
    throw new Error(checkError.message)
  }

  if (products && products.length > 0) {
    throw new Error("Cannot delete category that is being used by products")
  }

  const { error } = await supabase.from("categories").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/categories")
}

export async function getAllCategories() {
  const supabase = await createClient()

  const { data: categories, error } = await supabase
    .from("categories")
    .select(`
      *,
      products:products(count)
    `)
    .order("name")

  if (error) {
    throw new Error(error.message)
  }

  return categories
}
