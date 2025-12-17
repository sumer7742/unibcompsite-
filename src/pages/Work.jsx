import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 text-center bg-gray-100 dark:bg-gray-950">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
          alt="work hero"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">
            Our <span className="text-orange-500">Work</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We design, build and scale digital products that solve real business problems.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            How We <span className="text-orange-500">Work</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Discovery",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
                desc: "Understanding your business goals and users."
              },
              {
                step: "02",
                title: "Design",
                img: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
                desc: "Crafting intuitive UI and seamless UX."
              },
              {
                step: "03",
                title: "Development",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                desc: "Building fast, scalable and secure products."
              },
              {
                step: "04",
                title: "Launch & Scale",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
                desc: "Deploying, monitoring and improving continuously."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden border
                bg-gray-50 dark:bg-gray-950
                border-gray-200 dark:border-gray-800
                hover:border-orange-500 transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-orange-500 font-bold">{item.step}</span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Featured <span className="text-orange-500">Projects</span>
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Fintech App",
                img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
              },
              {
                title: "E-Commerce Platform",
                img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514"
              },
              {
                title: "SaaS Dashboard",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-900 rounded-3xl overflow-hidden
                border border-gray-800 hover:border-orange-500 transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold group-hover:text-orange-500 transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm">
                    High-performance product built for real-world scale.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-gradient-to-br from-orange-800 via-orange-700 to-orange-900">
        <h2 className="text-4xl font-extrabold text-white">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-orange-200">
          Let’s build something great together.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 px-10 py-4 rounded-full
            bg-black text-orange-400 font-semibold
            hover:bg-gray-900 transition"
        >
          Start a Project
        </Link>
      </section>

    </div>
  );
}
