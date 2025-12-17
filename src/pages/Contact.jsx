import emailjs from "emailjs-com";

export default function Contact() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    await emailjs.sendForm(
        "service_s62q91v",   // 🔹 Replace with your actual Service ID
        "template_tii3278",  // 🔹 Replace with your actual Template ID
        e.target,            // 🔹 Form reference
        "8hDAUzc3aFKG503iB"    // 🔹 Replace with your actual Public Key
      
    )
    alert("Form submitted!");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100">

      {/* HERO */}
 <section
  className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')"
  }}
>
  {/* Dark overlay so text stays readable */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Subtle Glowing Shapes */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-2xl px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
      Contact <span className="text-orange-500">Uni</span>bComp
    </h1>
    <p className="text-gray-300 text-lg mb-6">
      Have a question or want to collaborate? We’re here to help.
    </p>
    <a
      href="#contact-form"
      className="inline-block px-6 py-3 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
    >
      Get in Touch
    </a>
  </div>
</section>




      {/* CONTACT FORM + INFO */}
      <section id="contact-form" className=" contact-form py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className=" bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
            
      
              className="w-full p-4  text-black rounded-xl border border-gray-300 dark:border-gray-700 focus:border-orange-600 focus:ring focus:ring-orange-300 dark:focus:ring-orange-700 transition"
              required
            />

            <input
              type="email"
               name="user_email"
              placeholder="Your Email"
              
              className="w-full text-black p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-orange-600 focus:ring focus:ring-orange-300 dark:focus:ring-orange-700 transition"
              required
            />

            <textarea
                name="message"
              placeholder="Your Message"
             
             
              rows="6"
              className="w-full text-black  p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-orange-600 focus:ring focus:ring-orange-300 dark:focus:ring-orange-700 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-600 text-black font-semibold py-4 rounded-full hover:bg-orange-500 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Get in Touch</h2>

          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">Email</h3>
            <a href="info@unibcomp.com" className="mt-2 text-gray-700 dark:text-gray-300">info@unibcomp.com</a>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">+91 9876543210</p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
             7th floor, Office no 702, Vipul Business Park, Central Park II, Sector 48, Gurugram, Haryana 122018
            </p>
          </div>

        </div>

      </section>

      {/* MAP / Placeholder */}
 <section className="py-24 bg-gray-100 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
        Our <span className="text-orange-500">Office Location</span>
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Visit us at our corporate office or reach out for a meeting anytime.
      </p>
    </div>

    {/* Map + Address Card */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Map */}
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
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
      </div>

      {/* Address Info */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-800">
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
          <p>🕘 Mon – Fri: 10:00 AM – 7:00 PM</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@unibcomp.com</p>
        </div>

        <a
          href="https://www.google.com/maps/place/Unibcomp+Networks+Private+Limited/@28.4347356,77.0140322,13z/data=!4m10!1m2!2m1!1sunibcomp+vipul+business+park!3m6!1s0x390d1931ff4767b3:0xfd126e9d78da2406!8m2!3d28.4325564!4d77.0620731!15sChx1bmliY29tcCB2aXB1bCBidXNpbmVzcyBwYXJrkgERZ292ZXJubWVudF9vZmZpY2XgAQA!16s%2Fg%2F11vbtvvp_s?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
        >
          Get Directions →
        </a>
      </div>

    </div>
  </div>
</section>



    

    </div>
  );
}
