// components/sections/WhyChooseUsSection.tsx
interface WhyChooseUsProps {
  reasons: string[];
}

export function WhyChooseUsSection({ reasons }: WhyChooseUsProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Sellers Choose Luna Haven</h2>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={index} className="bg-blue-100 text-blue-900 px-6 py-4 rounded shadow-sm text-lg">
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
