import {MapPin,Phone, Clock} from "lucide-react"

export default function Locations() {
    const locations = [
        {
            city: "Vancouver",
            address: "3911 Fraser Street, Vancouver B.C V5V4E5",
            phone: "604-731-1512",
            hours: [
                { days: "Mon–Fri", time: "9:00am – 5:30pm" },
                { days: "Sat", time: "9:00am – 4:00pm" },
                { days: "Sun", time: "Closed" },
            ],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.3984546363235!2d-123.09297972465572!3d49.24989317307711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673ff2485569d%3A0x369b8edaeacf6a0b!2sDr.%20Macasiray%20Cresencia%20Vancouver%20Dental%20Clinic!5e0!3m2!1sen!2sca!4v1772234044664!5m2!1sen!2sca"
        },
        {
            city: "Surrey",
            address: "Suite 302-15957 84 th Avenue, Surrey, B.C. V4N0W7",
            phone: "604-593-5550",
            hours: [
                { days: "Mon–Wed", time: "9:00am – 5:30pm" },
                { days: "Thu", time: "Closed" },
                { days: "Fri–Sat", time: "9:00am – 5:30pm" },
                { days: "Sun", time: "Closed" },
            ],
            weekend: "Thurs & Sun: Closed",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.3644726639236!2d-122.7827314246627!3d49.15568977974016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d0afc2f7179d%3A0x70a3c0d057525d4!2sDr.%20Cresencia%20Macasiray%20Surrey%20Dental%20Office!5e0!3m2!1sen!2sca!4v1772234018540!5m2!1sen!2sca"
        }
    ]
    return (
    <section id="locations" className="bg-[#f3f0fa] py-28 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[#d4a847] uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Our Locations
          </p>

          <h2
            className="text-[28px] md:text-4xl text-[#1a1625] mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Visit Us in Surrey & Vancouver
          </h2>

          <p className="text-[#6b6478] leading-relaxed">
            Two convenient locations serving families across the Lower Mainland.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2">

          {locations.map((location) => (
            <div
              key={location.city}
              className="
                bg-white
                rounded-[28px]
                p-10
                border border-[#eae6f5]
                transition-all
                duration-300
                hover:shadow-lg
              "
            >
              {/* City */}
              <h3
                className="text-[26px] mb-8 text-[#1a1625]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {location.city}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 mb-5 text-[#6b6478]">
                <MapPin className="w-5 h-5 text-[#7c4dbd] mt-1 shrink-0" />
                <span>{location.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-8 text-[#6b6478]">
                <Phone className="w-5 h-5 text-[#7c4dbd] shrink-0" />
                <a
                  href={`tel:${location.phone}`}
                  className="hover:underline"
                >
                  {location.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-4 mb-10">
                <Clock className="w-5 h-5 text-[#7c4dbd] mt-1 shrink-0" />
                <div className="space-y-2 text-sm w-full">
                  {location.hours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-[#eae6f5] shadow-xs pb-1"
                    >
                      <span className="font-medium text-[#1a1625]">
                        {item.days}
                      </span>
                      <span
                        className={
                          item.time === "Closed"
                            ? "text-red-500 font-medium"
                            : ""
                        }
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src={location.map}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Directions Button */}
              <div className="mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#7c4dbd] font-medium hover:underline"
                >
                  Get Directions →
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}