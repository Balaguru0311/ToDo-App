import { Product, useCart } from "../../../context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow-md text-center">
      <img src={product.image} alt={product.title} className="mx-auto mb-2 w-32 h-32" />
      <h3 className="font-semibold">{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
