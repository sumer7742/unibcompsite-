export default function WebDevelopment() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100">

      {/* HERO SECTION */}
      <section className="relative py-28 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-orange-600/10 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Web <span className="text-orange-500">Development</span> Services
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We build fast, secure, and scalable websites that help businesses grow
            and stand out in the digital world.
          </p>
        </div>
      </section>

      {/* ABOUT SERVICE */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          What We Do
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Our web development services are focused on delivering high-performance,
          user-friendly, and SEO-optimized websites. From simple business sites to
          complex web applications, we ensure clean code, modern design, and
          scalable architecture.
        </p>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
            Why Choose Our Web Development
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-3">Modern Technologies</h3>
              <p className="text-gray-700 dark:text-gray-300">
                React, Next.js, Node.js, and modern tools for scalable development.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Optimized for mobile, tablet, and desktop devices.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-3">SEO Friendly</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Clean code and best practices to rank higher on search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Planning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Understanding requirements & goals
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              UI/UX and wireframes
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Clean and scalable coding
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Launch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Testing and deployment
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-orange-700 to-orange-900 text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Build Your Website?
        </h2>
        <p className="text-orange-100 mb-8">
          Let’s discuss your project and create something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-black text-orange-400 font-semibold hover:bg-gray-900 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
