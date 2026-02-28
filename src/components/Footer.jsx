import {MapPin, Phone, Clock} from "lucide-react"

export default function Footer () {
    const services = [
        "General Dentistry",
        "Cosmetic Dentistry",
        "Orthodontics",
        "Dental Implants",
        "Emergency Care",
        "Pediatric Dentistry"
    ]
    const locations = [
        {
            city: "Vancouver",
            address: "3911 Fraser Street, Vancouver B.C V5V 4E5",
            phone: "604-731-1512",
            hours: "Mon–Fri 9am–5:30pm · Sat 9am–4pm",
        },
        {
            city: "Surrey",
            address: "Suite 302-15957 84 th Avenue, Surrey, B.C. V4N 0W7",
            phone: "604-593-5550",
            hours: "Mon-Wed 9am–5:30pm · Fri 9am–5:30pm · Sat 9am–4pm",
        }
    ]
    return (
        <footer className="bg-[#1a1625] text-white">
            <div className="hidden lg:block max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div>
                        <a href="#"
                            className="text-xl md:text-2xl lg:text-3xl font-medium text-white"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                            Dr. Macasiray <span className="text-[#d4a847]">Dental</span>
                        </a>
                        <p className="text-[#9d94ab] text-sm leading-relaxed mt-4">
                            Gentle, modern dental care for the whole family.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.18em] text-[#d4a847] font-semibold mb-5">Services</h4>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-2">
                            {services.map((service) => (
                                <li key={service} className="mb-3">
                                    <a href="#services" className="text-sm text-[#9d94ab] hover:text-white transition-colors duration-200">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {locations.map(({city,address,phone,hours}) => (
                        <div key={city} className="mb-8" >
                            <h4 className="text-xs uppercase tracking-[0.18em] text-[#d4a847] font-semibold mb-5">{city}</h4>
                            <div className="flex items-start gap-3 mb-4">
                                <MapPin className="w-4 h-4 text-[#7c4dbd] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#9d94ab]">{address}</span>
                            </div>
                            <div className="flex items-start gap-3 mb-4">
                                <Phone className="w-4 h-4 text-[#7c4dbd] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#9d94ab]">{phone}</span>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <Clock className="w-4 h-4 text-[#7c4dbd] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#9d94ab]">{hours}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5">
                    <p className="text-xs text-[#9d94ab]">&copy; {new Date().getFullYear()} Dr. Macasiray Dental clinic</p>
                </div>
            </div>
        </footer>
    )
}