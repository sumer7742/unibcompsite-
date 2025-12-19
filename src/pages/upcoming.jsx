import { motion } from "framer-motion";

export default function Upcoming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex items-center justify-center px-6">
      <motion.div
        className="max-w-3xl w-full text-center p-10 rounded-3xl
        bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90
        border border-gray-800
        shadow-xl hover:shadow-orange-600/20 transition-all duration-500"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.span
          className="inline-block mb-6 px-5 py-2 text-sm font-semibold rounded-full
          bg-orange-600/10 text-orange-600 border border-orange-600/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          🚀 Coming Soon
        </motion.span>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Something <span className="text-orange-600">Amazing</span> is on the Way
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-lg max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We’re working hard to bring you a powerful new experience.
          Stay tuned — innovation is loading.
        </motion.p>

        {/* Features */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {["Modern UI", "Fast Performance", "Smart Features"].map(
            (item, i) => (
              <motion.div
                key={i}
                className="group p-6 rounded-2xl bg-gray-900/60
                border border-gray-800
                hover:border-orange-600
                hover:shadow-orange-600/20
                transition-all duration-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition">
                  {item}
                </h3>
                <p className="text-gray-500 text-sm">
                  Carefully crafted to deliver the best experience.
                </p>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Button */}
        <motion.a
          href="/contact"
          className="inline-block px-10 py-4 rounded-full font-semibold
          bg-orange-600/10 text-orange-600
          border border-orange-600/40
          hover:bg-orange-600 hover:text-black
          hover:shadow-orange-600/40
          transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Notify Me
        </motion.a>
      </motion.div>
    </div>
  );
}
