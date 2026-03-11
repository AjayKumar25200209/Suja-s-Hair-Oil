import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function TopBar() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-700">
          SUJA'S HAIR OIL
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/products" className="hover:text-green-600">Products</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>

          <Button className="bg-green-700 hover:bg-green-800">
            Buy Now
          </Button>
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

          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-10">

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>

              <Button className="bg-green-700 hover:bg-green-800">
                Buy Now
              </Button>

            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}