import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import glob from "../Accets/car3.mp4"


// Hero slides with background images
const heroSlides = [
  {
    title: "We Build Powerful Digital Solutions",
    subtitle: "Web, Mobile, and Custom Software for your business",
    bgImg:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Your Partner in Technology",
    subtitle: "Innovative and scalable solutions for startups & enterprises",
    bgImg:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Transform Ideas into Reality",
    subtitle: "High-performance software crafted with passion and precision",
    bgImg:
      "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};
export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // const nextSlide = () =>
  //   setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);
  // const prevSlide = () =>
  //   setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);

  return (
    <div className="w-full -mt-1">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          </div>
        ))}

        {/* Hero Content */}
       
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12 h-full">
     
     
          <motion.div     
           key={current}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
          
            className="md:w-1/2 text-center md:text-left text-white flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {heroSlides[current].title}
            </h1>
            <p className="mt-6 text-lg text-orange-100">{heroSlides[current].subtitle}</p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Link
                to="/contact"
                className="bg-black text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-orange-600 transition"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>

      
      
      </section>


 

      {/* ================= SERVICES PREVIEW ================= */}
    
  

<section className="py-24 bg-white text-gray-900
  dark:bg-gray-950 dark:text-gray-200  relative overflow-hidden">
  {/* background glow */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

         
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">

    {/* LEFT CONTENT */}
     <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
        Services that help your <br />
        <span className="text-orange-500">business grow faster</span>
      </h2>
      <p className="mt-6 text-gray-400 text-lg">
        At UnibComp, we design, develop and scale digital products that
        deliver real business value.
      </p>

      <div className="mt-10 space-y-4 text-gray-300">
        <p>✔ Scalable & secure architecture</p>
        <p>✔ Modern UI with smooth UX</p>
        <p>✔ Long-term technical support</p>
      </div>
    </div>
    </motion.div>

    {/* RIGHT SERVICES FLOW */}
 
    <motion.div 
     variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
    
    className="space-y-6">
 {[
              {
                no: "01",
                title: "Web Development",
                desc:
                  "High-performance, SEO-friendly and scalable websites built with modern frameworks.",
              },
              {
                no: "02",
                title: "Mobile App Development",
                desc:
                  "Android & iOS applications focused on speed, security and user experience.",
              },
              {
                no: "03",
                title: "UI / UX Design",
                desc:
                  "Clean, intuitive and conversion-focused designs for real users.",
              },
              {
                no: "04",
                title: "Custom Software",
                desc:
                  "Tailor-made enterprise solutions that fit your exact business workflow.",
              },
              {
                no: "05",
                title: "Cloud & DevOps",
                desc:
                  "Scalable cloud infrastructure with monitoring, CI/CD and security.",
              },
      ].map((item, i) => (
        <motion.div
        variants={fadeUp}
          key={i}
          className="group relative bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition duration-300"
        >
          {/* Number badge */}
          <span className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold shadow-lg">
            {item.no}
          </span>

          <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}

    
    </motion.div>
  </div>
  
</section>






      {/* ================= FEATURES ================= */}
 
<section className="py-24 bg-gray-950 relative overflow-hidden">
  {/* background glow */}
  <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

  <motion.div 
     
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay:  0.1 }}
  
  className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        Features that make <span className="text-orange-500">UnibComp</span> different
      </h2>
      <p className="mt-4 text-gray-400 text-lg">
        Built with performance, security and scalability at the core.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Scalable Systems",
          desc: "Our solutions grow with your business without compromising performance."
        },
        {
          title: "Enterprise Security",
          desc: "Security-first approach with encryption, monitoring and best practices."
        },
        {
          title: "High Performance",
          desc: "Optimized applications delivering fast load times and smooth experience."
        },
        {
          title: "Modern Tech Stack",
          desc: "Built using React, Node, Cloud and latest industry tools."
        },
        {
          title: "Client-Centric Approach",
          desc: "We listen, adapt and deliver solutions that meet real business needs."
        },
        {
          title: "Ongoing Support",
          desc: "Dedicated support & maintenance for long-term product success."
        },
      ].map((item, i) => (
        <motion.div
         
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
  
          key={i}
          className="group relative bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300"
        >
          {/* glow effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-orange-500/10 blur-xl transition"></div>

          {/* content */}
          <div className="relative z-10">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-600/20 text-orange-500 font-bold text-xl mb-6">
              {i + 1}
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  </motion.div>
</section>



{/* portfolio */}

<section className="relative py-24 bg-gray-950 overflow-hidden">
  {/* background glow – same as other sections */}
  <div className="absolute -top-40 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

  <motion.div 
     variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay:  0.1 }}
  
  className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
      Our <span className="text-orange-500">Portfolio</span>
    </h2>
    <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
      A showcase of some of our recent projects delivering
      scalable, secure and high-quality digital solutions.
    </p>

    <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        { title: "E-Commerce Website", category: "Web Development", img: "https://www.intellectoutsource.com/new-portfolio/best-n-top-home-page.jpg" },
        { title: "Mobile Banking App", category: "Mobile App", img: "https://savvycomsoftware.com/wp-content/uploads/2021/01/mobile-banking-application-development-3.jpg" },
        { title: "Startup Landing Page", category: "UI / UX Design", img: "https://img.freepik.com/premium-psd/modern-startup-landing-page-design-template-website_676553-23.jpg" },
        { title: "Custom CRM Software", category: "Custom Software", img: "https://cdn.dribbble.com/userupload/12501317/file/original-1b1d71429a9d3095ba81a867f4e0f10a.png?format=webp&resize=400x300&vertical=center" },
        { title: "Cloud Dashboard", category: "Cloud Solutions", img: "https://s3-alpha.figma.com/hub/file/2258751111437261526/19d912f5-f4d7-42f3-89d4-f318908b0609-cover.png" },
        { title: "E-Learning Platform", category: "Web Development", img: "https://cdn.dribbble.com/userupload/12346891/file/original-81c526a6b7852ac7c24af16126b8fba5.png?format=webp&resize=400x300&vertical=center" },
      ].map((project, i) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
          key={i}
          className="group relative overflow-hidden rounded-3xl bg-gray-900/70 backdrop-blur-xl
                     border border-gray-800 hover:border-orange-500
                     shadow-lg hover:shadow-2xl transition-all duration-300
                     transform hover:-translate-y-3"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-xl font-bold text-orange-500">
              {project.title}
            </h3>
            <p className="text-gray-200 mt-2 text-sm tracking-wide">
              {project.category}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      {/* ================= CTA ================= */}
 

<section className="relative py-28 overflow-hidden
  bg-gradient-to-br from-orange-500 via-blue-400 to-orange-600">
 <video
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          src={glob}
          autoPlay
          loop
          muted
          playsInline
        />
  {/* soft dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* subtle glow */}
  <div className="absolute -top-40 left-1/3 w-96 h-96 bg-black/40 rounded-full blur-3xl"></div>

  {/* Motion Wrapper */}
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 max-w-4xl mx-auto px-6 text-center"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
      Ready to build your
      <span className="block text-orange-300">next big project?</span>
    </h2>

    <p className="mt-6 text-orange-200/80 text-lg">
      Partner with UnibComp to build secure, scalable and
      high-performance digital solutions.
    </p>

    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center justify-center mt-10 px-12 py-4 rounded-full
                   bg-black/90 text-orange-400 font-semibold text-lg
                   hover:bg-black transition shadow-lg"
      >
        Contact Us Now
      </Link>
    </motion.div>
  </motion.div>
</section>



    </div>
  );
}
