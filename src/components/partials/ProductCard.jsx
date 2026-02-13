import toast from "react-hot-toast";

export default function ProductCard({ product }) {
    const handleAddToCart = async() => {
        toast.custom("Will implement soon!", {className: "bg-[#1A2CA3] text-white px-4 py-2 rounded-lg shadow-lg"});
    }
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200">

      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-[#0D1A63] mb-2">
          {product.title}
        </h3>

        <p className="text-slate-600 text-sm mb-4">
          {product.description}
        </p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-[#2845D6] font-bold text-lg">
            KES {(product.price).toLocaleString()}
          </span>
          <span className="text-slate-500 text-sm">
            {product.period}
          </span>
        </div>

        <button onClick={handleAddToCart} className="w-full cursor-pointer bg-[#1A2CA3] hover:bg-[#2845D6] text-white py-2 rounded-xl font-semibold transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
