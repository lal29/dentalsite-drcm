import { useState , useEffect} from "react";
import {Menu, X} from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-primary-bg/95 backdrop-blur-md border-b border-primary-light shadow-sm">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#hero" className="text-xl sm:text-2xl md:text-3xl font-medium text-primary-dark whitespace-nowrap"
          style={{ fontFamily: "Cormorant Garamond, serif" }}>
            {/* Mobile — shorter */}
              <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">
                Dr. Cresencia S. <span className="text-accent">Macasiray</span>
              </span>
        </a>
          <div className="flex items-center gap-3">
            {/* Links */}
            <ul className="hidden md:flex items-center text-sm font-medium flex gap-8 uppercase tracking-[0.18em] text-[#6b6478]">
                {links.map(({label,href, id}) => (
                  <li key={label}>
                    <a href={href} className={`transition-colors duration-200 ${
                      activeSection === id 
                      ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                      : "text-[#6b6478] hover:text-primary"
                    }`}>
                      {label}
                    </a>
                  </li>
                ))
                }
            </ul>
            <button onClick={onBookClick}
            className="bg-primary text-white px-5 py-2 md:px-8 md:py-3 text-sm rounded-full hover:bg-primary-dark transition-all cursor-pointer">
            Book Now
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary-dark"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
      </div>
        { isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary-bg border-t border-primary-light px-6 py-4 shadow-lg">
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-[#6b6478]">
              {links.map(({label,href, id}) =>(
                  <li key={label}>
                    <a href={href} onClick={() => setIsMenuOpen(false)}
                      className={`block py-1 transition-colors duration-200 ${
                        activeSection === id 
                        ? "text-primary font-semibold"
                        : "text-[#6b6478] hover:text-primary"
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