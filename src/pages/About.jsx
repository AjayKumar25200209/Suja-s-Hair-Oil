import TopBar from "@/components/TopBar"
import Footer from "@/components/footer"

export default function About() {
    return (
        <>
            <TopBar />

            <section className="max-w-6xl mx-auto px-6 py-20">

                <h1 className="text-4xl font-bold text-green-700 mb-6">
                    About Suja's Hair Oil
                </h1>

                <p className="text-gray-600 leading-relaxed text-lg">
                    SUJA'S Vetpalai Thailam is a traditional herbal hair oil made
                    with natural ingredients like vetpalai leaf, hibiscus flower,
                    onion and cold-pressed coconut oil. Our product focuses on
                    nourishing the scalp, reducing dandruff and strengthening
                    hair roots naturally.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6">
                    Manufactured in Thoothukudi, Tamil Nadu, our goal is to
                    provide safe and natural hair care solutions inspired by
                    traditional herbal knowledge.
                </p>

            </section>

            <Footer />
        </>
    )
}