import { FaLinkedin, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Finax from "../assets/Finx.png";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";


export default function Footer() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "award", label: "Awards" },
    { id: "nomination", label: "Nomination" },
    { id: "event-details", label: "Event Details" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080B1F] text-white font-alata px-6 md:px-20 py-12">
      <div className="border-t border-gray-700 pt-10"></div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Left Section (2/5) */}
        <div className="md:col-span-2">
          <img src={Finax} alt="Finax Logo" className="w-28 mb-4" />
          <p className="text-sm leading-relaxed max-w-sm">
            We are at the intersection of finance and technology. We empower the
            Fintech community through high-impact events and authoritative content.
          </p>

          <div className="flex gap-3 mt-5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white hover:bg-[#E29D42] hover:border-[#E29D42] cursor-pointer duration-200">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white hover:bg-[#E29D42] hover:border-[#E29D42] cursor-pointer duration-200">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white hover:bg-[#E29D42] hover:border-[#E29D42] cursor-pointer duration-200">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white hover:bg-[#E29D42] hover:border-[#E29D42] cursor-pointer duration-200">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Award Categories (1/5) */}
        <div>
          <h3 className="font-alatsi text-[#E29D42] text-lg mb-3">Award Categories</h3>
          <ul className="space-y-1 text-sm">
            <li>Best Forex Trader in Sri Lanka</li>
            <li>Best Crypto Trader</li>
            <li>Top Female Trader</li>
            <li>Top Young Trader</li>
            <li>Consistent Performer</li>
            <li>Best Risk Manager</li>
            <li>Best Trade of the Contest</li>
            <li>Best Scalper</li>
            <li>Best Swing Trader</li>
            <li>Community Favorite Award</li>
          </ul>
        </div>

        {/* Quick Links (1/5) */}
        <div>
          <h3 className="font-alatsi text-[#E29D42] text-lg mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-[#E29D42]"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us (1/5) */}
        <div>
          <h3 className="font-alatsi text-[#E29D42] text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm font-al">
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#E29D42]" />
              <a href="tel:+94770000000" className="hover:text-[#E29D42]">+94 77 000 0000</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#080B1F]" />
              <a href="tel:+94770000000" className="hover:text-[#E29D42]">+94 77 000 0000</a>
            </li>
            <li className="flex items-center gap-2 mt-4">
              <FaEnvelope className="text-[#E29D42]" />
              <a href="mailto:info@finaxglobal.com" className="hover:text-[#E29D42]">info@finaxglobal.com</a>
            </li>
            <li className="flex items-center gap-2 mt-4">
              <FaClock className="text-[#E29D42]" />
              Week Days – 8:00 PM
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-[#080B1F]" />
              Weekend: Closed
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-500 mt-6">
          <p>
            © {new Date().getFullYear()} FinX Awards Ceremony. All rights reserved. Solution by{" "}
            <a
              href="https://glamermedia.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              Glamer Media
            </a>
          </p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-gray-500 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
