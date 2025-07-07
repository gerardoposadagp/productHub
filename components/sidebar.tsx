// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { LayoutDashboard, Package, User, LogOut, ShoppingBag } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { signOut } from "@/lib/auth-actions"
// import { cn } from "@/lib/utils"

// const navigation = [
//   { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//   { name: "Products", href: "/products", icon: Package },
//   { name: "Profile", href: "/profile", icon: User },
// ]

// export function Sidebar() {
//   const pathname = usePathname()

//   return (
//     <div className="flex h-full w-64 flex-col bg-gray-900 text-white">
//       <div className="flex h-16 items-center px-6">
//         <ShoppingBag className="h-8 w-8 text-blue-400" />
//         <span className="ml-2 text-xl font-bold">ProductHub</span>
//       </div>

//       <nav className="flex-1 space-y-1 px-4 py-6">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
//                 isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white",
//               )}
//             >
//               <item.icon className="mr-3 h-5 w-5" />
//               {item.name}
//             </Link>
//           )
//         })}
//       </nav>

//       <div className="p-4">
//         <form action={signOut}>
//           <Button
//             type="submit"
//             variant="ghost"
//             className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
//           >
//             <LogOut className="mr-3 h-5 w-5" />
//             Sign Out
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, User, LogOut, ShoppingBag, Tags } from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth-actions"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/products", icon: Package },
  { name: "Categories", href: "/categories", icon: Tags },
  { name: "Profile", href: "/profile", icon: User },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900 text-white">
      <div className="flex h-16 items-center px-6">
        <ShoppingBag className="h-8 w-8 text-blue-400" />
        <span className="ml-2 text-xl font-bold">ProductHub</span>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white",
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4">
        <form action={signOut}>
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </Button>
        </form>
      </div>
    </div>
  )
}
