import ProductCard from "../../components/partials/ProductCard";
import { sampleProducts } from "../../data/sampleProducts";
export default function Products() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="px-6 py-16 text-center bg-linear-to-br from-[#0D1A63] via-[#1A2CA3] to-[#2845D6] text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Borrow Smart. Live Smart.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
          Short-term access to the things you need — without long-term commitment.
          Student-friendly. Budget-friendly. Stress-free.
        </p>

        <button className="mt-8 bg-white text-[#1A2CA3] font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section className="px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1A63] mb-8">
          Available Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sampleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 text-center bg-slate-900 text-white">
        <h3 className="text-3xl font-bold mb-4">
          Don’t Buy It. Time It.
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Why spend big when you can access what you need, when you need it?
        </p>

        <button className="mt-6 bg-[#2845D6] hover:bg-[#1A2CA3] px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
          Start Renting
        </button>
      </section>

    </div>
  );
}

