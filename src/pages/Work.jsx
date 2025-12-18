import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import first from "../Accets/1img.jpeg";
 import sec from "../Accets/2img.jpeg";
  import third from "../Accets/3img.jpeg";
   import four from "../Accets/4img.jpeg";
    import ecom from "../Accets/ecom.jpeg"
     import saas from "../Accets/saas.jpeg"
      import fin from "../Accets/fin.jpeg"
      import work from "../Accets/work.jpeg"
export default function Work() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 text-center bg-gray-100 dark:bg-gray-950 overflow-hidden">
        <motion.img
          src={work}
          alt="work hero"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
        >
          <motion.h1
            className="text-5xl font-extrabold"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-orange-500">Work</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We design, build and scale digital products that solve real business problems.
          </motion.p>
        </motion.div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How We <span className="text-orange-500">Work</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                img: first,
                desc: "Understanding your business goals and users."
              },
              {
                step: "02",
                title: "Design",
                img: sec,
                desc: "Crafting intuitive UI and seamless UX."
              },
              {
                step: "03",
                title: "Development",
                img: third,
                desc: "Building fast, scalable and secure products."
              },
              {
                step: "04",
                title: "Launch & Scale",
                img: four,
                desc: "Deploying, monitoring and improving continuously."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group rounded-3xl overflow-hidden border
                  bg-gray-50 dark:bg-gray-950
                  border-gray-200 dark:border-gray-800
                  hover:border-orange-500 transition"
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured <span className="text-orange-500">Projects</span>
          </motion.h2>

          <motion.div
            className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { title: "Fintech App", img:fin },
              { title: "E-Commerce Platform", img:ecom },
              { title: "SaaS Dashboard", img:saas },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500 transition"
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-gradient-to-br from-orange-800 via-orange-700 to-orange-900">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-white">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-orange-200">
            Let’s build something great together.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-block mt-8 px-10 py-4 rounded-full
                bg-black text-orange-400 font-semibold
                hover:bg-gray-900 transition"
            >
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
