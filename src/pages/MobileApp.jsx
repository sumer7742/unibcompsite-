import { motion } from "framer-motion";

export default function MobileApp() {
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* HERO */}
      <motion.section
        className="relative py-28 text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80')",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mobile App <span className="text-orange-500">Development</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            High-performance Android & iOS applications built for scalability,
            security, and user engagement.
          </motion.p>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-6"
          variants={itemVariants}
        >
          What We Build
        </motion.h2>
        <motion.p className="text-gray-700 dark:text-gray-300 text-lg" variants={itemVariants}>
          We design and develop mobile apps that deliver seamless user
          experiences. From startups to enterprises, our apps are optimized for
          speed, performance, and future growth.
        </motion.p>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        className="py-20 bg-white dark:bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <Feature title="Cross Platform" desc="Flutter & React Native apps" variants={itemVariants} />
          <Feature title="Secure" desc="Enterprise-level security standards" variants={itemVariants} />
          <Feature title="Scalable" desc="Built for long-term growth" variants={itemVariants} />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-24 text-center bg-orange-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-4xl font-bold mb-8">
          Build Your Mobile App
        </motion.h2>
        <motion.a
          href="/contact"
          className="px-10 py-4 bg-black rounded-full text-orange-400 font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </motion.section>
    </div>
  );
}

function Feature({ title, desc, variants }) {
  return (
    <motion.div
      className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow"
      variants={variants}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
}
