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
    <nav className="sticky top-0 z-50 bg-[#f3f0fa]/95 backdrop-blur-md border-b border-[#e0d5f5] shadow-sm">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#hero" className="text-xl sm:text-2xl md:text-3xl font-medium text-[#4e2d8a] whitespace-nowrap"
          style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Dr. Cresencia <span className="text-[#d4a847]">Macasiray</span>
        </a>
          <div className="flex items-center gap-3">
            {/* Links */}
            <ul className="hidden md:flex items-center text-sm font-medium flex gap-8 uppercase tracking-[0.18em] text-[#6b6478]">
                {links.map(({label,href, id}) => (
                  <li key={label}>
                    <a href={href} className={`transition-colors duration-200 ${
                      activeSection === id 
                      ? "text-[#7c4dbd] font-semibold border-b-2 border-[#7c4dbd] pb-0.5" 
                      : "text-[#6b6478] hover:text-[#7c4dbd]"
                    }`}>
                      {label}
                    </a>
                  </li>
                ))
                }
            </ul>
            <button onClick={onBookClick}
            className="bg-[#7c4dbd] text-white px-5 py-2 md:px-8 md:py-3 text-sm rounded-full hover:bg-[#4e2d8a] transition-all cursor-pointer">
            Book Now
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#4e2d8a]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
      </div>
        { isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#f3f0fa] border-t border-[#e0d5f5] px-6 py-4 shadow-lg">
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-[#6b6478]">
              {links.map(({label,href, id}) =>(
                  <li key={label}>
                    <a href={href} onClick={() => setIsMenuOpen(false)}
                      className={`block py-1 transition-colors duration-200 ${
                        activeSection === id 
                        ? "text-[#7c4dbd] font-semibold"
                        : "text-[#6b6478] hover:text-[#7c4dbd]"
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