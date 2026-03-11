import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Product from "@/assets/product.png"

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Natural Care for <br/>
            <span className="text-green-700">
              Stronger, Healthier Hair
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            SUJA'S Vetpalai Thailam is a traditional herbal hair oil made 
            with coconut oil, vetpalai leaf, hibiscus flower and onion to 
            nourish your scalp, reduce dandruff and promote healthy hair growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-green-700 hover:bg-green-800">
              View Product
            </Button>

            <Button variant="outline">
              Learn More
            </Button>
          </div>

          {/* BENEFITS */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-600">

            <div>
              <p className="font-semibold text-green-700">100% Natural</p>
              <p>Herbal Ingredients</p>
            </div>

            <div>
              <p className="font-semibold text-green-700">Dandruff Care</p>
              <p>Healthy Scalp</p>
            </div>

            <div>
              <p className="font-semibold text-green-700">Hair Strength</p>
              <p>Root Nourishment</p>
            </div>

          </div>

        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <img
            src={Product}
            alt="Suja Hair Oil"
            className="w-[380px] md:w-[420px] drop-shadow-xl"
          />

        </motion.div>

      </div>

    </section>
  )
}