import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

export default function TopBar() {

    const location = useLocation()

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" }
    ]

    return (
        <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
            <div className="  flex h-16 items-center justify-between px-6 pr-10">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-semibold tracking-wide text-green-700"
                >
                    SUJA'S HAIR OIL
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

                    {navItems.map((item) => {
                        const active = location.pathname === item.path

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="relative group text-gray-700 hover:text-green-700 transition"
                            >
                                {item.name}

                                {/* animated underline */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-green-700 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        )
                    })}

                </nav>

                {/* Mobile Menu */}
                <Sheet>


                    <SheetTrigger asChild>
                        
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    

                    <SheetContent side="right" className="w-[260px]">
                        <SheetHeader>
                            <div className="flex items-center justify-between">
                                <Link
                                    to="/"
                                    className="text-xl font-semibold tracking-wide text-green-700"
                                >
                                    SUJA'S HAIR OIL
                                </Link>
                            </div>
                        </SheetHeader>


                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col gap-3  px-5 text-lg font-medium"
                        >
                           

                            {navItems.map((item) => (

                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-gray-700 hover:text-green-700 transition"
                                >
                                    {item.name}
                                </Link>

                            ))}

                        </motion.div>

                    </SheetContent>

                </Sheet>

            </div>
        </header>
    )
}