import ProductCard from "../../components/partials/ProductCard.jsx";

const sampleProducts = [
  {
    id: 1,
    title: "Scientific Calculator (Casio fx-991ES)",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620",
    description: "Perfect for engineering, statistics, and math exams.",
    price: 50,
    period: "per day",
  },
  {
    id: 2,
    title: "HP Laptop (8GB RAM, SSD)",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Great for coding, assignments, and presentations.",
    price: 100,
    period: "per day",
  },
  {
    id: 3,
    title: "Projector (HD Portable)",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    description: "Ideal for group discussions and class presentations.",
    price: 150,
    period: "per day",
  },
  {
    id: 4,
    title: "DSLR Camera (Canon 80D)",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Capture events, campus shoots, and content creation.",
    price: 200,
    period: "per day",
  },
  {
    id: 5,
    title: "Electric Kettle",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description: "Quick boiling for hostel life convenience.",
    price: 80,
    period: "per day",
  },
  {
    id: 6,
    title: "Gaming Console (PS5)",
    image: "https://images.unsplash.com/photo-1606813909353-87f7e0ed6f5f",
    description: "Weekend chill sessions with friends.",
    price: 120,
    period: "per day",
  },
  {
    id: 7,
    title: "Power Bank (20,000mAh)",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
    description: "Stay powered during long campus days.",
    price: 40,
    period: "per day",
  },
  {
    id: 8,
    title: "Bluetooth Speaker (JBL)",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    description: "Small events, hangouts, or chill vibes.",
    price: 60,
    period: "per day",
  },
  {
    id: 9,
    title: "Study Desk Lamp",
    image: "https://images.unsplash.com/photo-1507477338202-487281e6c27e",
    description: "Bright LED lamp for late night studying.",
    price: 100,
    period: "per day",
  },
  {
    id: 10,
    title: "Mini Fridge",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    description: "Keep drinks and snacks cool in your hostel.",
    price: 180,
    period: "per day",
  },
];

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

