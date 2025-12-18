import { motion } from "framer-motion";

export default function UI() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* HERO */}
      <motion.section
        className="relative py-28 text-center text-white bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80')",
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            UI / UX <span className="text-orange-500">Design</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting intuitive, beautiful, and user-centered digital experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* APPROACH */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Our Design Approach
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          We focus on user research, wireframing, and visual design to ensure
          every product is intuitive, accessible, and conversion-focused.
        </p>
      </motion.section>

      {/* CARDS */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <Card title="User Research" />
          <Card title="Wireframes & Prototypes" />
          <Card title="High-Fidelity UI" />
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}

function Card({ title }) {
  return (
    <motion.div
      className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow text-center"
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
}

function CTA() {
  return (
    <motion.section
      className="py-24 text-center bg-orange-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8">Design That Users Love</h2>
      <motion.a
        href="/contact"
        className="inline-block px-10 py-4 bg-black rounded-full text-orange-400 font-semibold"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s Design
      </motion.a>
    </motion.section>
  );
}
