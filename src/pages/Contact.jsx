import TopBar from "@/components/TopBar"
import Footer from "@/components/Footer"

export default function Contact() {
    return (
        <>
            <TopBar />

            <section className="max-w-5xl mx-auto px-6 py-20">

                <h1 className="text-4xl font-bold text-green-700 mb-10">
                    Contact Us
                </h1>

                <div className="space-y-6 text-gray-600">

                    <p>
                        <strong>Address:</strong><br />
                        4/192A, Muthammal Colony<br />
                        9th Street, Thoothukudi – 628002
                    </p>

                    <p>
                        <strong>Phone:</strong><br />
                        +91 94428 28259<br />
                        +91 99942 46638
                    </p>

                </div>

            </section>

            <Footer />
        </>
    )
}