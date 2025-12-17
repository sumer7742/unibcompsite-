export default function UI() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      <section className="py-28 text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          UI / UX <span className="text-orange-500">Design</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Crafting intuitive, beautiful, and user-centered digital experiences.
        </p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Our Design Approach
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          We focus on user research, wireframing, and visual design to ensure
          every product is intuitive, accessible, and conversion-focused.
        </p>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <Card title="User Research" />
          <Card title="Wireframes & Prototypes" />
          <Card title="High-Fidelity UI" />
        </div>
      </section>

      <CTA />
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-24 text-center bg-orange-800 text-white">
      <h2 className="text-4xl font-bold mb-8">Design That Users Love</h2>
      <a href="/contact" className="px-10 py-4 bg-black rounded-full text-orange-400 font-semibold">
        Let’s Design
      </a>
    </section>
  );
}
