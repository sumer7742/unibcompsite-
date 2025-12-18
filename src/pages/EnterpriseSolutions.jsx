import { motion } from "framer-motion";

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <motion.section
        className="py-28 text-center text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Enterprise <span className="text-orange-500">Solutions</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Robust, scalable, and secure digital solutions for large businesses.
          </p>
        </div>
      </motion.section>

      {/* EXPERTISE SECTION */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Enterprise Expertise
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          We build enterprise-grade software systems that streamline operations,
          improve efficiency, and support business growth at scale.
        </p>
      </motion.section>

      {/* FEATURES */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {["Custom Software", "Cloud Integration", "Data Security"].map((title, i) => (
            <Feature key={i} title={title} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}

// Feature component with motion
function Feature({ title, index }) {
  return (
    <motion.div
      className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
}

// CTA component with motion
function CTA() {
  return (
    <motion.section
      className="py-24 text-center bg-orange-800 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8">
        Power Your Enterprise Digitally
      </h2>
      <a
        href="/contact"
        className="px-10 py-4 bg-black rounded-full text-orange-400 font-semibold hover:scale-105 transition-transform"
      >
        Talk to Experts
      </a>
    </motion.section>
  );
}
