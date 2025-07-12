// components/sections/HeroSection.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  callToActionText: string;
  callToActionLink: string;
}

export function HeroSection({ title, subtitle, callToActionText, callToActionLink }: HeroProps) {
  return (
    <section className="text-center py-20 bg-blue-50">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
      <a href={callToActionLink} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        {callToActionText}
      </a>
    </section>
  );
}
