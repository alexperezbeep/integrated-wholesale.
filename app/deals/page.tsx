// app/deals/page.tsx
export default function DealsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Available Wholesale Deals</h1>
      <p className="mb-8 text-gray-700">Browse our current investment opportunities. Join our buyer list to get early access.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Property 1 */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">123 Maple St, Richmond, VA</h2>
          <p className="text-gray-600 mb-1">3 Bed / 2 Bath • 1,400 sq ft</p>
          <p className="text-gray-600 mb-1">ARV: $280,000 | Asking: $175,000</p>
          <p className="text-sm text-green-600 font-medium">Assignment Deal</p>
        </div>

        {/* Property 2 */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">44 Chestnut Ave, Norfolk, VA</h2>
          <p className="text-gray-600 mb-1">2 Bed / 1 Bath • 1,000 sq ft</p>
          <p className="text-gray-600 mb-1">ARV: $200,000 | Asking: $120,000</p>
          <p className="text-sm text-green-600 font-medium">Vacant - Ready to Close</p>
        </div>

        {/* Property 3 */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">78 Oak Dr, Roanoke, VA</h2>
          <p className="text-gray-600 mb-1">4 Bed / 2 Bath • 2,000 sq ft</p>
          <p className="text-gray-600 mb-1">ARV: $350,000 | Asking: $210,000</p>
          <p className="text-sm text-yellow-600 font-medium">Occupied - Do Not Disturb</p>
        </div>
      </div>
    </main>
  );
}
