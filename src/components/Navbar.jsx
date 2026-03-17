import { useState , useEffect} from "react";
import {Menu, X} from "lucide-react";
import logo from "../assets/logo.svg"

export default function Navbar({onBookClick}) {

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    {label: "Services", href: "#services", id: "services" },
    {label: "Why Us", href: "#features" , id: "features" },
    {label: "About", href: "#about" , id: "about"},
    {label: "Locations", href: "#locations" , id: "locations" },
  ]

  useEffect (() => {
      const handleScroll = () => {
        const sections = ["services", "about", "features", "locations"]
        for (const id of sections) {
          const el = document.getElementById(id)
          const rect = el.getBoundingClientRect()

          if(rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            return
          }
        }
        setActiveSection("")
      }
      window.addEventListener("scroll",handleScroll)
      handleScroll()

      return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-primary-dark backdrop-blur-md border-b border-primary-light shadow-sm">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 py-4">
        <a href="#hero">
          <img src={logo} alt="Dr. Macasiray Dental Clinic" className="h-16 md:h-20 w-auto" />
        </a>
          <div className="flex items-center gap-3">
            {/* Links */}
            <ul className="hidden md:flex items-center text-sm font-medium gap-8 uppercase tracking-[0.18em] text-white/80">
                {links.map(({label,href, id}) => (
                  <li key={label}>
                    <a href={href} className={`transition-colors duration-200 ${
                      activeSection === id 
                      ? "text-white font-semibold border-b-2 border-accent pb-0.5"
                      : "text-white/70 hover:text-white"
                    }`}>
                      {label}
                    </a>
                  </li>
                ))
                }
            </ul>
            <button onClick={onBookClick}
              className="bg-accent text-white 
                px-4 py-1.5 text-xs
                md:px-8 md:py-3 md:text-sm
                rounded-full hover:bg-yellow-600 transition-all cursor-pointer whitespace-nowrap">
              Book Now
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
      </div>
        { isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary-dark border-t border-primary-deep px-6 py-4 shadow-lg">
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-body">
              {links.map(({label,href, id}) =>(
                  <li key={label}>
                    <a href={href} onClick={() => setIsMenuOpen(false)}
                      className={`block py-1 transition-colors duration-200 ${
                        activeSection === id 
                        ? "text-white font-semibold"
                        : "text-white/70 hover:text-white"
                      }`}
                    >
                      {label}             
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        )
        }
    </nav>
  )
}