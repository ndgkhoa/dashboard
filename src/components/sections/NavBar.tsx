'use client'
import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NavBar = () => {
    const pathname = usePathname()

    return (
        <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                    href="/"
                    className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        {
                            'text-primary bg-muted': pathname === '/',
                        },
                    )}
                >
                    <Home className="h-4 w-4" />
                    Dashboard
                </Link>
                <Link
                    href="/orders"
                    className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        {
                            'text-primary bg-muted': pathname === '/orders',
                        },
                    )}
                >
                    <ShoppingCart className="h-4 w-4" />
                    Orders
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                </Link>
                <Link
                    href="/products"
                    className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        {
                            'text-primary bg-muted': pathname === '/products',
                        },
                    )}
                >
                    <Package className="h-4 w-4" />
                    Products
                </Link>
                <Link
                    href="/customers"
                    className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        {
                            'text-primary bg-muted': pathname === '/customers',
                        },
                    )}
                >
                    <Users className="h-4 w-4" />
                    Customers
                </Link>
                <Link
                    href="/analytics"
                    className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        {
                            'text-primary bg-muted': pathname === '/analytics',
                        },
                    )}
                >
                    <LineChart className="h-4 w-4" />
                    Analytics
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
