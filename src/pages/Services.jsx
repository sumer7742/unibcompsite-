import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Scalable, fast and SEO-friendly websites built with modern technologies.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      link: "/WebDevelopment",
      sub: [
        "Business Website",
        "E-Commerce Development",
        "Web Applications",
        "Landing Pages",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "High-performance Android & iOS apps with seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      link: "/MobileApp",
      sub: [
        "Android App",
        "iOS App",
        "Cross Platform App",
        "App Maintenance",
      ],
    },
    {
      title: "UI / UX Design",
      description:
        "User-centric design that enhances engagement and conversion.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      link: "/UI",
      sub: [
        "Wireframing",
        "UI Design",
        "UX Research",
        "Design Systems",
      ],
    },
    {
      title: "Enterprise Solutions",
      description:
        "Custom enterprise-level solutions for scalable business operations.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      link: "/EnterpriseSolutions",
      sub: [
        "CRM Systems",
        "ERP Solutions",
        "Internal Dashboards",
        "Automation Tools",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          We provide end-to-end digital solutions to help your business grow.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        {services.map((service, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Sub Services */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.sub.map((item, index) => (
                  <div
                    key={index}
                    className="text-sm px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                to={service.link}
                className="inline-block px-8 py-3 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}

      </section>
    </div>
  );
}
