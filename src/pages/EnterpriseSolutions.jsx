export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      <section className="py-28 text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Enterprise <span className="text-orange-500">Solutions</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Robust, scalable, and secure digital solutions for large businesses.
        </p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Enterprise Expertise
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          We build enterprise-grade software systems that streamline operations,
          improve efficiency, and support business growth at scale.
        </p>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <Feature title="Custom Software" />
          <Feature title="Cloud Integration" />
          <Feature title="Data Security" />
        </div>
      </section>

      <CTA />
    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-24 text-center bg-orange-800 text-white">
      <h2 className="text-4xl font-bold mb-8">
        Power Your Enterprise Digitally
      </h2>
      <a href="/contact" className="px-10 py-4 bg-black rounded-full text-orange-400 font-semibold">
        Talk to Experts
      </a>
    </section>
  );
}
