import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {items.map((value) => {
        return (
          <div
            key={value.id}
            className="w-64 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
          >
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}
              alt={value.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {value.name}
              </h2>

              <p className="mt-1 text-gray-600">
                ₹{(value.price || value.defaultPrice) / 100}
              </p>

              <p className="mt-1 text-sm text-green-700 font-bold">
                Qty: {value.quantity}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
