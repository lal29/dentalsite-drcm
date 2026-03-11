import clinicImg from "../assets/clinic.jpg"

export default function Hero({onBookClick}) {
  return (
    <section id="hero" className="bg-primary-bg md:min-h-[700px] md:max-h-[800px] md:flex md:items-center py-8 md:py-0 scroll-mt-16">

      <div className="w-full md:max-w-[1200px] md:mx-auto grid md:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <div className="
          flex flex-col justify-center
          px-6 sm:px-10 md:px-16
          py-10 md:py-20
          text-center md:text-left
          items-center md:items-start
        ">

          <p className="text-accent uppercase tracking-[0.2em] text-[11px] mb-6 font-semibold">
            Two Locations — Surrey & Vancouver
          </p>

          <h1
            className="
              text-4xl sm:text-5xl md:text-[64px]
              leading-[1.15] md:leading-[1.1]
              text-dark-bg
              mb-10
              max-w-md md:max-w-none
            "
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Your{" "}
            <span className="text-primary font-medium tracking-tight italic">
              brightest
            </span>{" "}
            smile starts here.
          </h1>

          <p className="
            text-[#6b6478]
            max-w-md md:max-w-xl
            leading-[1.8]
            mb-10
            text-sm sm:text-base
          ">
            We combine gentle care with modern dentistry to give you the
            confidence that comes with a truly healthy, beautiful smile.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center md:items-center">

            <button
              onClick={onBookClick}
              className="
                bg-primary text-white px-8 py-3 rounded-full
                transition-all duration-300
                hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 cursor-pointer
              "
            >
              Book Appointment
            </button>

            <a
              href="#services"
              className="text-primary font-medium hover:underline flex items-center"
            >
              Our Services →
            </a>

          </div>
        </div>

        {/* RIGHT SIDE (Desktop Only) */}
        <div className="hidden md:flex items-center justify-center relative px-6">

          <div className="relative">

            <img
              src={clinicImg}
              alt="Modern dental clinic"
              className="
                w-[650px]
                h-[520px]
                object-cover
                rounded-[48px]
                shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                brightness-[1.03]
              "
            />

            {/* Soft background accent */}
            <div className="
              absolute -top-6 -left-6
              w-full h-full
              bg-primary-light
              rounded-[48px]
              -z-10
            "></div>

          </div>

        </div>

      </div>

    </section>
  )
}