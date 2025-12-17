import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from  "../Accets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="flex items-center gap-1">
           
           <img src={Logo} alt="img" className="h-10 w-auto"></img>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 font-medium text-gray-300">

          <li>
            <Link to="/" className="hover:text-orange-500 transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/Work" className="hover:text-orange-500 transition duration-300">
              Work
            </Link>
          </li>

          {/* Services Dropdown */}
         <li className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
         >

  <span className="cursor-pointer flex items-center gap-1 text-lg font-semibold hover:text-orange-500 transition">
    <Link to="/Services" onClick={() => setDropdownOpen(false)}>Services</Link>
    <span className="text-sm">▾</span>
  </span>

  {/* Mega Menu */}
  <div
    className={`absolute left-1/2 -translate-x-1/2 mt-6 w-[720px]
                bg-gradient-to-br from-gray-900 via-gray-900 to-black
                rounded-3xl shadow-2xl border border-gray-800
                transition-all duration-300 z-50
                ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-6"}`}
  >
    <div className="grid grid-cols-2 gap-8 p-10">
      {/* Web Development */}
      <div>
        <h4 className="text-orange-500 hover:text-orange-700 underline font-bold mb-4 text-lg">
          <Link to="/WebDevelopment" onClick={() => setDropdownOpen(false)}>Web Development</Link>
        </h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-orange-400 transition">Corporate Websites</li>
          <li className="hover:text-orange-400 transition">E-Commerce Platforms</li>
          <li className="hover:text-orange-400 transition">Landing Pages</li>
          <li className="hover:text-orange-400 transition">Admin Dashboards</li>
          <li className="hover:text-orange-400 transition">SEO Optimized Sites</li>
        </ul>
      </div>

      {/* Mobile Apps */}
      <div>
        <h4 className="text-orange-500  hover:text-orange-700 underline font-bold mb-4 text-lg">
          <Link to="/MobileApp" onClick={() => setDropdownOpen(false)}>Mobile Apps</Link>
        </h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-orange-400 transition">Android Apps</li>
          <li className="hover:text-orange-400 transition">iOS Apps</li>
          <li className="hover:text-orange-400 transition">Flutter Development</li>
          <li className="hover:text-orange-400 transition">React Native Apps</li>
          <li className="hover:text-orange-400 transition">Maintenance & Support</li>
        </ul>
      </div>

      {/* UI UX */}
      <div>
        <h4 className="text-orange-500  hover:text-orange-700 underline font-bold mb-4 text-lg">
          <Link to="/UI" onClick={() => setDropdownOpen(false)}>UI / UX Design</Link>
        </h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-orange-400 transition">User Research</li>
          <li className="hover:text-orange-400 transition">Wireframing</li>
          <li className="hover:text-orange-400 transition">Prototyping</li>
          <li className="hover:text-orange-400 transition">Design Systems</li>
          <li className="hover:text-orange-400 transition">Product Design</li>
        </ul>
      </div>

      {/* Enterprise */}
      <div>
        <h4 className="text-orange-500  hover:text-orange-700 underline font-bold mb-4 text-lg">
          <Link to="/EnterpriseSolutions" onClick={() => setDropdownOpen(false)}>Enterprise Solutions</Link>
        </h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-orange-400 transition">Custom Software</li>
          <li className="hover:text-orange-400 transition">CRM / ERP</li>
          <li className="hover:text-orange-400 transition">Cloud Integration</li>
          <li className="hover:text-orange-400 transition">Automation</li>
          <li className="hover:text-orange-400 transition">API Integrations</li>
        </ul>
      </div>

    </div>

    {/* CTA */}
    <div className="border-t border-gray-800 px-10 py-5 flex items-center justify-between">
      <p className="text-gray-400 text-sm">
        End-to-end digital solutions for growing businesses
      </p>
      <Link
        to="/contact"
        className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-semibold
        hover:bg-orange-400 hover:scale-105 transition"
      >
        Get Started
      </Link>
    </div>
  </div>
</li>


          <li>
            <Link to="/careers" className="hover:text-orange-500 transition duration-300">
              Careers
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-orange-600 text-black font-semibold
              hover:bg-orange-500 hover:scale-105 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-6 space-y-4 text-gray-300">
          <li><Link to="/"  className="block hover:text-orange-500">Home</Link ></li>
          <li><Link to="/Work" className="block hover:text-orange-500">Work</Link></li>
          <li><Link to="/Services" className="block hover:text-orange-500">Services</Link></li>
          <li><Link to="/careers" className="block hover:text-orange-500">Careers</Link></li>
          <li>
            <Link
              to="/contact"
              className="block text-center bg-orange-600 text-black py-2 rounded-full hover:bg-orange-500">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
