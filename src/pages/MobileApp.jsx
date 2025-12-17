export default function MobileApp() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* HERO */}
      <section className="py-28 text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Mobile App <span className="text-orange-500">Development</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          High-performance Android & iOS applications built for scalability,
          security, and user engagement.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          What We Build
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          We design and develop mobile apps that deliver seamless user
          experiences. From startups to enterprises, our apps are optimized for
          speed, performance, and future growth.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <Feature title="Cross Platform" desc="Flutter & React Native apps" />
          <Feature title="Secure" desc="Enterprise-level security standards" />
          <Feature title="Scalable" desc="Built for long-term growth" />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-24 text-center bg-orange-800 text-white">
      <h2 className="text-4xl font-bold mb-4">Build Your Mobile App</h2>
      <a href="/contact" className="px-10 py-4 bg-black rounded-full text-orange-400 font-semibold">
        Get Started
      </a>
    </section>
  );
}
