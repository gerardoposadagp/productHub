"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function createProduct(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const productData = {
    user_id: user.id,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as "men" | "women",
    enabled: formData.get("enabled") === "true",
  }

  const { error } = await supabase.from("products").insert([productData])

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/products")
}

export async function updateProduct(id: string, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const updates = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as "men" | "women",
    enabled: formData.get("enabled") === "true",
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase.from("products").update(updates).eq("id", id).eq("user_id", user.id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/products")
}

export async function deleteProduct(id: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { error } = await supabase.from("products").delete().eq("id", id).eq("user_id", user.id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/products")
}
