import { useCart } from "../../../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">
              <div>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-semibold mt-4">
            Total: ${getTotal().toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
