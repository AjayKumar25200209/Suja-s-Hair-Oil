import TopBar from "@/components/TopBar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import product from "@/assets/product.png"
import { Link } from "react-router-dom"

export default function Products() {
    return (
        <>
            <TopBar />

            <section className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold text-green-700">
                    Our Product
                </h1>

                <div className="grid md:grid-cols-2 gap-3 items-center">

                    <img
                        src={product}
                        alt="Vetpalai Thailam"
                        className="rounded-xl"
                    />

                    <div>

                        <h2 className="text-2xl font-semibold mb-4">
                            Vetpalai Thailam
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Herbal hair oil formulated using Vetpalai leaf,
                            hibiscus flower, onion and coconut oil to support
                            scalp health, reduce dandruff and strengthen hair.
                        </p>

                        <p className="mt-4 text-lg font-semibold text-green-700">
                            ₹150 / 100ml
                        </p>

                        <Button className="mt-6 bg-green-700 hover:bg-green-800">
                            <Link to="/contact">
                                Contact to Order
                            </Link>
                        </Button>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    )
}