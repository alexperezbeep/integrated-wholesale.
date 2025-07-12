// components/sections/ContactSection.tsx
export function ContactSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
        <p className="text-gray-700 mb-8">
          Whether you're a seller or investor, we're here to help. Reach out and a team member will contact you shortly.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
