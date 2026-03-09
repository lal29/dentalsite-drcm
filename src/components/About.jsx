import toothImg from "../assets/tooth.png"

const stats = [
  { value: "40+ Years", label: "Clinical Experience" },
  { value: "2 Locations", label: "Serving Surrey & Vancouver" },
  { value: "Advanced", label: "Modern Technology" },
  { value: "Family Care", label: "All Ages Welcome" },
]

function StatCard({value,label}) {
  return (
    <div>
      <h3 className="text-xl font-medium text-dark-bg">{value}</h3>
      <p className="text-sm text-[#6b6478]">{label}</p>
    </div>
  )
}


export default function About() {
  return (
    <section id="about" className="bg-white py-20 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT – Image */}
        <div className="hidden md:flex justify-center items-center">

          <div className="relative">
            <img
              src={toothImg}
              alt="CM Dental"
              className="w-full max-w-[520px] h-auto object-contain"
            />

            {/* Soft accent behind */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-light rounded-[40px] -z-10"></div>
          </div>

        </div>

        {/* RIGHT – Content */}
        <div>

          <p className="text-accent uppercase tracking-[0.2em] text-xs mb-4 font-semibold text-center">
            Meet Your Dentist
          </p>

          <h2
            className="text-3xl md:text-4xl text-dark-bg mb-6 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Dr. Cresencia Soriano Macasiray
          </h2>
          <div className="max-w-xl">
              <p className="text-[#6b6478] leading-[1.8] mb-6 text-left">
                With over 40 years of experience in dentistry,
                Dr. Cresencia S. Macasiray is dedicated to providing gentle,
                patient-focused care using the latest techniques and technology.
              </p>

              <p className="text-[#6b6478] leading-[1.8] mb-8 text-left">
                Her philosophy centers around comfort, precision, and building
                long-term relationships with every patient who walks through
                the clinic doors.
              </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-center">
            {stats.map(({value,label}) =>(
              <StatCard key={value} value={value} label={label}/>
            ))
            }
          </div>

        </div>

      </div>
    </section>
  )
}