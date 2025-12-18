import { motion } from "framer-motion";

export default function WebDevelopment() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100">

      {/* HERO SECTION */}
      <motion.section
        className="relative py-28 text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80')",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Web <span className="text-orange-500">Development</span> Services
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We build fast, secure, and scalable websites that help businesses grow
            and stand out in the digital world.
          </motion.p>
        </div>
      </motion.section>

      {/* ABOUT SERVICE */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl font-bold text-orange-600 mb-6" variants={itemVariants}>
          What We Do
        </motion.h2>
        <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
          Our web development services are focused on delivering high-performance,
          user-friendly, and SEO-optimized websites. From simple business sites to
          complex web applications, we ensure clean code, modern design, and
          scalable architecture.
        </motion.p>
      </motion.section>

      {/* KEY FEATURES */}
      <motion.section
        className="py-20 bg-white dark:bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-orange-600 mb-10 text-center" variants={itemVariants}>
            Why Choose Our Web Development
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature title="Modern Technologies" desc="React, Next.js, Node.js, and modern tools for scalable development." variants={itemVariants} />
            <Feature title="Responsive Design" desc="Optimized for mobile, tablet, and desktop devices." variants={itemVariants} />
            <Feature title="SEO Friendly" desc="Clean code and best practices to rank higher on search engines." variants={itemVariants} />
          </div>
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl font-bold text-orange-600 mb-10 text-center" variants={itemVariants}>
          Our Development Process
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Planning", "Design", "Development", "Launch"].map((step, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-lg mb-2">{step}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step === "Planning" && "Understanding requirements & goals"}
                {step === "Design" && "UI/UX and wireframes"}
                {step === "Development" && "Clean and scalable coding"}
                {step === "Launch" && "Testing and deployment"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-24 text-center bg-gradient-to-r from-orange-700 to-orange-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-4xl font-extrabold mb-4">Ready to Build Your Website?</motion.h2>
        <motion.p className="text-orange-100 mb-8">Let’s discuss your project and create something amazing together.</motion.p>
        <motion.a
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-black text-orange-400 font-semibold hover:bg-gray-900 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.section>

    </div>
  );
}

function Feature({ title, desc, variants }) {
  return (
    <motion.div className="p-8 rounded-3xl shadow bg-gray-100 dark:bg-gray-800" variants={variants}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
}
