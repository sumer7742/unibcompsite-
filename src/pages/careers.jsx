
import { Link } from "react-router-dom";

export default function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "On-Site / Gurugram",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      location: "On-Site / Gurugram",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      location: "On-Site / Gurugram",
      type: "Full-time",
    },
    {
      title: "Mobile App Developer",
      location: "On-Site / Gurugram",
      type: "Full-time",
    },
  ];

  const benefits = [
    "Flexible working hours",
    "Health insurance & wellness",
    "Professional growth & training",
    "Team outings & events",
    "Remote work opportunities",
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* HERO */}
  <section className="relative h-[600px] flex items-center justify-center text-center bg-gray-950 overflow-hidden">
  {/* Glowing Abstract Shapes */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
      Build Your Career at <span className="text-orange-500">Uni</span>bComp
    </h1>
    <p className="text-gray-300 text-lg md:text-xl mb-6">
      Explore exciting opportunities, grow your skills, and be part of a dynamic team.
    </p>

    {/* Smooth Scroll Button */}
    <a
      href="#open-positions"
      className="inline-block px-8 py-4 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
    >
      View Open Positions
    </a>
  </div>
</section>


      {/* OPEN POSITIONS */}
     <section id="open-positions" className="py-24 max-w-7xl mx-auto px-6">
  <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {jobs.map((job, i) => (
    <div
  key={i}
  className="bg-gradient-to-r from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
             p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
>
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-2xl font-bold text-orange-600">{job.title}</h3>
    <span className="text-sm px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-semibold">
      {job.type}
    </span>
  </div>

  <p className="text-gray-600 dark:text-gray-300 mb-1 flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
      />
    </svg>
    {job.location}
  </p>

  <Link
    to="/apply"
    className="inline-block mt-6 w-full text-center px-6 py-3 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 transition"
  >
    Apply Now
  </Link>
</div>

    ))}
  </div>
</section>


      {/* WHY JOIN US */}
      <section className="py-24 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Join Uni<b>Comp</b>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-orange-600">✓ {benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
     <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-white">
  {/* Background Glow Circles */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white">
      Our Hiring Process
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        { title: "Application", icon: "M12 4v16m8-8H4" },
        { title: "Screening", icon: "M5 13l4 4L19 7" },
        { title: "Interview", icon: "M16 12H8m8 0l-4-4m4 4l-4 4" },
        { title: "Offer", icon: "M12 8v8m4-4H8" },
      ].map((step, i) => (
        <div
          key={i}
          className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
        >
          {/* Number Badge */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-yellow-400 text-black font-bold text-lg mb-4 shadow-lg">
            {i + 1}
          </div>

          {/* SVG Icon */}
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
            </svg>
          </div>

          {/* Step Title */}
          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* CTA */}
     <section
  className="relative py-28 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661310027237-8f4ed9ebc6ee?auto=compress&cs=tinysrgb&w=1600')"
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Subtle glowing shapes */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
      Ready to <span className="text-orange-500">grow with us?</span>
    </h2>
    <p className="text-gray-200 text-lg mb-8">
      Join our dynamic team and work on exciting projects that make an impact.
    </p>
    <Link
      to="/contact"
      className="inline-block px-10 py-4 rounded-full bg-orange-600 text-black font-semibold hover:bg-orange-500 hover:scale-105 transition transform"
    >
      Join Our Team
    </Link>
  </div>
</section>


    </div>
  );
}
