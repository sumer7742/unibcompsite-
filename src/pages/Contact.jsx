import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await emailjs.sendForm(
      "service_s62q91v",
      "template_tii3278",
      e.target,
      "8hDAUzc3aFKG503iB"
    );

    setShowPopup(true); // show popup
    e.target.reset(); // reset form

    setTimeout(() => {
      setShowPopup(false); // hide after 3s
    }, 3000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const hoverGlow = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 20px 30px rgba(255,165,0,0.4)",
    },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 relative">

      {/* FORM SUBMIT POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-black font-semibold px-6 py-4 rounded-b-xl shadow-lg z-50"
          >
            🎉 Your message has been sent!
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          className="absolute -top-24 -left-24 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />

        <motion.div
          className="relative z-10 max-w-2xl px-6"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-orange-500">Uni</span>bComp
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg mb-6"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question or want to collaborate? We’re here to help.
          </motion.p>
          <motion.a
            href="#contact-form"
            className="inline-block px-6 py-3 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(255,165,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section
        id="contact-form"
        className="contact-form py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <div
          className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg"
        
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Send Us a Message
          </h2>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 text-black rounded-xl border border-gray-300 dark:border-gray-700 focus:border-orange-600 focus:ring focus:ring-orange-300 dark:focus:ring-orange-700 transition"
              variants={fadeUp}
              required
            />
            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 text-black rounded-xl border border-gray-300 dark:border-gray-700 focus:border-orange-600 focus:ring focus:ring-orange-300 dark:focus:ring-orange-700 transition"
              variants={fadeUp}
              required
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 text-black rounded-xl border border-gray-300 dark:border-gray-700 focus:border-orange-600 focus:ring focus:ring-orange-300 dark:focus:ring-orange-700 transition"
              variants={fadeUp}
              required
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-orange-600 text-black font-semibold py-4 rounded-full hover:bg-orange-500 transition"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(255,165,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Contact Info */}
      <motion.div
  className="space-y-8"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={stagger}
>
  {[
    {
      title: "Email",
      info: "info@unibcomp.com",
      link: "mailto:info@unibcomp.com",
    },
    {
      title: "Phone",
      info: "+91 8901011414",
      link: "tel:+918901011414",
    },
    {
      title: "Address",
      info:
        "7th floor, Office no 702, Vipul Business Park, Central Park II, Sector 48, Gurugram, Haryana 122018",
      link: "https://www.google.com/maps/search/?api=1&query=Vipul+Business+Park+Sector+48+Gurugram",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition"
      variants={fadeUp}
      whileHover={hoverGlow}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-semibold text-lg">{item.title}</h3>

      {/* Only P is clickable */}
      <a
        href={item.link}
        target={item.title === "Address" ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <p className="mt-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition cursor-pointer">
          {item.info}
        </p>
      </a>
    </motion.div>
  ))}
</motion.div>

      </section>

      {/* MAP */}
      <section className="py-24 bg-gray-100 dark:bg-gray-900">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Our <span className="text-orange-500">Office Location</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visit us at our corporate office or reach out for a meeting anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0px 20px 30px rgba(255,165,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                title="Unibcomp Networks Pvt Ltd Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4672640126235!2d77.02094111503406!3d28.440657681539664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a5a2b5e9b9%3A0x0!2zMjjCsDI2JzEyLjgiTiA3N8KwMDEnMzMuNyJF!5e0!3m2!1sen!2sin!4v1702728620000"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-800"
              variants={fadeUp}
              whileHover={hoverGlow}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                📍 UnibComp Networks Pvt. Ltd.
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                7th Floor, Office No. 702,<br />
                Vipul Business Park,<br />
                Central Park II, Sector 48,<br />
                Gurugram, Haryana – 122018
              </p>
              <div className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <p>🕘 Mon – Sat: 9:30 AM – 6:30 PM</p>
                <p>📞 +91 8901011414</p>
                <p>✉️ info@unibcomp.com</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Unibcomp+Networks+Private+Limited/"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 px-8 py-3 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
              >
                Get Directions →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
