import { MapPin, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            SUJA'S HAIR OIL
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Traditional herbal hair oil made using Vetpalai leaf,
            hibiscus flower, onion and cold-pressed coconut oil
            to nourish scalp and promote healthy hair growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="flex gap-3 items-start">
              <MapPin size={18}/>
              <span>
                4/192A, Muthammal Colony <br/>
                9th Street, Thoothukudi – 628002
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={18}/>
              <span>+91 94428 28259</span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={18}/>
              <span>+91 99942 46638</span>
            </li>

          </ul>
        </div>

        {/* Product Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Product
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Vetpalai Thailam</li>
            <li>Net Content: 100ml</li>
            <li>MRP: ₹150 (Inclusive of taxes)</li>
          </ul>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Suja's Hair Oil. All rights reserved.
      </div>

    </footer>
  )
}