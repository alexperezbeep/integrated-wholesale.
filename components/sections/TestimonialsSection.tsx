// components/sections/TestimonialsSection.tsx
interface Testimonial {
  name: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Are Saying</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <p className="text-gray-800 italic mb-4">“{t.quote}”</p>
              <p className="text-blue-600 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
