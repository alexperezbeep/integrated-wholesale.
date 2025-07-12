// app/how-it-works/page.tsx
export default function HowItWorksPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">How Our Wholesaling Process Works</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Submit Your Property</h2>
        <p className="text-gray-700">Use our <a href="/sell" className="text-blue-600 underline">Sell page</a> to send us basic details about your home. No repairs or cleaning needed.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Get a Fair Cash Offer</h2>
        <p className="text-gray-700">We evaluate your property and send you a no-obligation offer within 24 hours.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. We Handle Everything</h2>
        <p className="text-gray-700">Once you accept the offer, we line up an investor, handle paperwork, and close on your timeline — sometimes in as little as 7 days.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. You Get Paid</h2>
        <p className="text-gray-700">You walk away with cash in hand — no commissions, no hidden fees, and no stress.</p>
      </section>
    </main>
  );
}
