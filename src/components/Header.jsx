import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/FinX.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for compact header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    navigate("/");
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "award", label: "Awards" },
    { id: "nomination", label: "Nomination" },
    { id: "event-details", label: "Event Details" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header - hidden when mobile menu is open */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        } ${isMenuOpen ? "hidden lg:flex" : ""}`}
      >
        <div
          className={` bg-transparent border-white/50 border backdrop-blur-md shadow-md rounded-xl max-w-7xl mx-4 lg:mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer z-50"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={Logo}
              alt="Locum Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-6" : "h-7"
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10 text-white font-thin  font-alata">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#E29D42] cursor-pointer transition-colors duration-200 text-sm xl:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Download Button */}
          <button
            onClick={() => scrollToSection("download")}
            className="hidden lg:block bg-[#E29D42] font-alata text-white px-4 xl:px-4 py-2 rounded-md  hover:bg-white hover:text-[#E29D42] cursor-pointer transition-all duration-200 text-sm xl:text-base whitespace-nowrap"
          >
            Get Event Pass
          </button>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white rounded-tl-4xl rounded-bl-4xl shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header (Logo + Close Icon) */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img src={Logo} alt="Locum Logo" className="h-6 w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 hover:text-[#0FAEBF] transition-all duration-200 font-alata text-gray-700 text-base font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={() => scrollToSection("download")}
              className="w-full bg-[#E29D42] font-alata text-white px-6 py-3 rounded-md  hover:bg-white hover:text-[#E29D42] transition-all duration-200 font-medium"
            >
              Get Event Pass
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
