import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { placeOrder } from "../services/api";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart: cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      // Send order to the API and retrieve id and eta
      const { id, eta } = await placeOrder(cartItems);

      // Clear the cart after successful order placement
      clearCart();

      // Navigate to EtaPage, passing id and eta as state
      navigate("/eta", { state: { id, eta } });
    } catch {
      alert("Failed to place order.");
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="p-4 flex flex-col justify-between bg-ash min-h-[844px]">
      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Total and VAT */}
      <div>
        <p
          className="px-4 text-coal flex justify-between items-center bg-shade-24-dark rounded text-[22px] font-bold"
          style={{ width: "358px", height: "77px" }}
        >
          <div className="flex flex-col items-start justify-center">
            <span>TOTALT</span>
            <span className="text-sm font-medium">inkl 20% moms</span>
          </div>
          <span className="text-[32px]">{totalPrice} SEK</span>
        </p>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className=" bg-coal text-snow text-xl font-bold rounded  hover:bg-opacity-90 mt-4"
          style={{ width: "358px", height: "77px" }}
        >
          TAKE MY MONEY!
        </button>
      </div>
    </section>
  );
};

export default CartPage;
