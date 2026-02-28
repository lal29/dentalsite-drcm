
export default function Features () {
    const reasons = [
        {
            number: "01",
            title: "Pain Free Promise",
            description: "Advanced anesthesia and sedation options ensure a comfortable experience every time."
        },
        {
            number: "02",
            title: "Cutting-Edge Technology",
            description: "Digital X-rays, 3D scanning, and same-day crowns using the latest CAD/CAM systems."
        },
        {
            number: "03",
            title: "Transparent Pricing",
            description: "No hidden fees. We walk you through costs upfront and work with most insurance providers."
        },
        {
            number: "04",
            title: "Flexible Scheduling",
            description: "Evening and weekend appointments at both locations so care fits your busy lifestyle."
        }
    ]

    return (
        <section id="features" className="bg-[#f3f0fa] py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-center">
                        <p className="text-[#d4a847] uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                        Why Us
                        </p>
                        <h2
                            className="text-3xl md:text-4xl text-[#1a1625] mb-6"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            Dentistry that puts you first.
                        </h2>
                        <p className="text-[#6b6478] leading-relaxed text-sm md:text-base">
                            We're not just fixing teeth — we're building lasting relationships based on trust, comfort, and exceptional outcomes across both our Surrey and Vancouver clinics.
                        </p>
                    </div>
                    <div>
                        {reasons.map(({number, title, description}) => (
                            <div key={number} className="flex gap-6 mb-2">
                                <h2 className="text-4xl text-[#d4a847] shrink-0 font-medium"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}>{number}</h2>
                                <div className="items-start mb-4">
                                    <p className="text-xl md:text-2xl text-[#1a1625]" style={{ fontFamily: "Cormorant Garamond, serif" }}>{title}</p>
                                    <p className="text-[#6b6478] leading-relaxed text-xs">{description}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}