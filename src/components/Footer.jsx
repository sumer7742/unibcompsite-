import { Link } from "react-router-dom";
import Logo from  "../Accets/logo.png";
export default function Footer() {
return (
<footer className="bg-gray-950 text-gray-400 pt-20">
  <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-5">

    {/* Company Info */}
    <div className="lg:col-span-2">
      <h1 className="text-3xl font-extrabold tracking-wide">
         
           
           <img src={Logo} alt="img" className="h-10 w-auto"></img>
         
        </h1>
      <p className="mt-4 leading-relaxed">
        UnibComp is a modern software development company delivering
        scalable, secure and high-performance digital solutions for startups,
        enterprises and growing businesses.
      </p>
      <p className="mt-4 text-sm">
        We specialize in building products that are fast, reliable and
        designed to scale with your business.
      </p>
    </div>

    {/* Services */}
    <div>

      
      <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
     
     

<ul className="space-y-3">
  <li>
    <Link to="/webDevelopment"
      className="hover:text-orange-500 cursor-pointer transition"
    >
      Web Development
    </Link>
  </li>

  <li>
    <Link
      to="/MobileApp"
      className="hover:text-orange-500 cursor-pointer transition"
    >
      Mobile App Development
    </Link>
  </li>

  <li>
    <Link
      to="/UI"
      className="hover:text-orange-500 cursor-pointer transition"
    >
      UI / UX Design
    </Link>
  </li>

  <li>
    <Link
      to="/EnterpriseSolutions"
      className="hover:text-orange-500 cursor-pointer transition"
    >
      Custom Software
    </Link>
  </li>

 
</ul>

    
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
      <ul className="space-y-3">
        <li  className="hover:text-orange-500 cursor-pointer"> <Link to={"/"}>Home</Link>  </li>
        <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/Work"}>Work</Link></li>
        <li className="hover:text-orange-500 cursor-pointer"><Link to={"/Services"}></Link>Services</li>
        <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/Careers"}>Careers</Link>  </li>
        <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/Contact"}>Contact</Link>   </li>
      </ul>
    </div>

    {/* Contact & Careers */}
    <div>
  <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>

  <ul className="space-y-3 text-sm text-gray-300">
    {/* Address */}
    <li>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Vipul+Business+Park+Sector+48+Gurugram"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 hover:underline transition cursor-pointer"
      >
        📍 7th floor, Office no 702, Vipul Business Park, Central Park II,
        Sector 48, Gurugram, Haryana 122018
      </a>
    </li>

    {/* Email */}
    <li>
      <a
        href="mailto:contact@unibcomp.com"
        className="hover:text-blue-500 hover:underline transition cursor-pointer"
      >
        📧 contact@unibcomp.com
      </a>
    </li>

    {/* Phone */}
    <li>
      <a
        href="tel:+918901011414"
        className="hover:text-blue-500 hover:underline transition cursor-pointer"
      >
        📞 +91 8901011414
      </a>
    </li>

    {/* Careers */}
    <li className="mt-2">
      <Link
        to="/careers"
        className="hover:text-orange-500 hover:underline transition cursor-pointer"
      >
        View Open Positions →
      </Link>
    </li>
  </ul>
</div>

  </div>

  {/* Newsletter */}
  <div className="max-w-7xl mx-auto px-6 mt-16">
    <div className="bg-gray-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h4 className="text-xl font-semibold text-white">
          Subscribe to our newsletter
        </h4>
        <p className="text-gray-400 mt-1 text-sm">
          Get product updates, tech insights and company news.
        </p>
      </div>

      <div className="flex w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-72 px-4 py-3 rounded-l-full bg-gray-800 text-white outline-none"
        />
        <button className="px-6 py-3 bg-orange-600 text-white rounded-r-full hover:bg-orange-500 transition">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-16 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>© {new Date().getFullYear()} UnibComp. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-orange-500 cursor-pointer">Privacy Policy</span>
        <span className="hover:text-orange-500 cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </div>
</footer>

);
}