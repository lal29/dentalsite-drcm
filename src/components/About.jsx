import dentistImg from "../assets/dentist.jpg"

const stats = [
  { value: "30+ Years", label: "Clinical Experience" },
  { value: "2 Locations", label: "Serving Surrey & Vancouver" },
  { value: "Advanced", label: "Modern Technology" },
  { value: "Family Care", label: "All Ages Welcome" },
]

function StatCard({value,label}) {
  return (
    <div>
      <h3 className="text-xl font-medium text-[#1a1625]">{value}</h3>
      <p className="text-sm text-[#6b6478]">{label}</p>
    </div>
  )
}


export default function About() {
  return (
    <section id="about" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – Image */}
        <div className="relative flex justify-center md:justify-start">

          <div className="relative">
            <img
              src={dentistImg}
              alt="Dr. Macasiray"
              className="w-[520px] h-[500px] object-cover rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            />

            {/* Soft accent behind */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-white rounded-[40px] -z-10"></div>
          </div>

        </div>

        {/* RIGHT – Content */}
        <div>

          <p className="text-[#d4a847] uppercase tracking-[0.2em] text-xs mb-4 font-semibold text-center">
            Meet Your Dentist
          </p>

          <h2
            className="text-3xl md:text-4xl text-[#1a1625] mb-6 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Dr. Cresencia Macasiray
          </h2>

          <p className="text-[#6b6478] leading-[1.8] mb-6 text-justify">
            With over 30 years of experience in dentistry,
            Dr. Macasiray is dedicated to providing gentle,
            patient-focused care using the latest techniques and technology.
          </p>

          <p className="text-[#6b6478] leading-[1.8] mb-8 text-justify">
            Her philosophy centers around comfort, precision, and building
            long-term relationships with every patient who walks through
            the clinic doors.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 text-center">
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