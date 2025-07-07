export interface Profile {
  id: string
  full_name: string
  phone_number: string | null
  email: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  created_at: string
}

export interface Product {
  id: string
  user_id: string
  name: string
  description: string
  category_id: number
  enabled: boolean
  created_at: string
  updated_at: string
  categories?: Category // For joined queries
}

export interface DashboardStats {
  totalProducts: number
  totalMenProducts: number
  totalWomenProducts: number
  totalEnabledProducts: number
}
