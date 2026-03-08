import {
  Stethoscope,
  Sparkles,
  Smile,
  ShieldCheck,
  Siren,
  HeartHandshake
} from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Exams, cleanings, fillings, and preventive care to keep your smile healthy for life.",
      icon: Stethoscope,
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and smile makeovers tailored to boost your confidence.",
      icon: Sparkles,
    },
    {
      title: "Orthodontics",
      description:
        "Invisalign and braces for teens and adults. Straighter teeth, healthier bite.",
      icon: Smile,
    },
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement that looks and feels completely natural.",
      icon: ShieldCheck,
    },
    {
      title: "Emergency Care",
      description:
        "Same-day appointments for dental emergencies. We are here when you need us most.",
      icon: Siren,
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle, friendly care for children. Building healthy habits from the very first tooth.",
      icon: HeartHandshake,
    },
  ]

  return (
    <section id="services" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            What We Offer
          </p>

          <h2
            className="text-3xl md:text-4xl text-dark-bg mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Comprehensive Dental Services
          </h2>

          <p className="text-[#6b6478] leading-relaxed text-sm md:text-base">
            We provide modern, patient-focused dental care using advanced
            techniques and a gentle approach tailored to every smile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:gap-6 grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                bg-[#f8f6fc]
                rounded-3xl
                p-4
                md:p-8
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div className="
                w-10 h-10
                md:w-12 md:h-12
                bg-white
                rounded-xl
                flex items-center justify-center
                mb-6
                transition-all
                duration-300
                group-hover:bg-primary/10
              ">
                <service.icon className="
                  w-5 h-5 md:w-6 md:h-6
                  text-primary
                  transition-transform
                  duration-300
                  group-hover:scale-110
                " />
              </div>

              {/* Title */}
              <h3
                className="text-base md:text-xl text-dark-bg mb-3 font-medium"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b6478] leading-relaxed text-sm ">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}