import { useState, useEffect } from "react";
import { fetchMenuItems } from "../services/api";
import { MenuItem } from "../types";
import { useCart } from "../context/CartContext";

const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (err) {
        setError("Error fetching menu items");
      } finally {
        setLoading(false);
      }
    };
    loadMenuItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Filter items by type
  const wontonItems = menuItems.filter((item) => item.type === "wonton");
  const dipsItems = menuItems.filter((item) => item.type === "dip");
  const drinkItems = menuItems.filter((item) => item.type === "drink");

  return (
    <div className="flex flex-col gap-4 p-4 bg-dark-mint ">
      <h1 className="text-snow text-[32px] font-bold text-shadow-sm">MENY</h1>
      {/* WonTon Section */}
      <section className="bg-clay  text-snow rounded-xl">
        {wontonItems.map((item) => (
          <button
            key={item.id}
            onClick={() => addToCart(item)}
            className=" hover:bg-coal rounded-t-xl border-b border-dotted border-shade-24-light p-4 text-left w-full"
          >
            <h2 className=" text-shadow-sm font-bold text-[22px] flex items-end">
              {item.name.toUpperCase()}
              <span className="flex-grow border-b-2 border-dotted border-snow mx-2"></span>
              <span>{item.price} SEK</span>
            </h2>

            {item.ingredients && (
              <p className="text-sm mt-2  text-shadow-sm">
                {item.ingredients.join(", ")}
              </p>
            )}
          </button>
        ))}
      </section>

      {/* Dipsås Section */}
      <section className="text-snow p-4 bg-clay rounded-xl drop-shadow">
        <h2 className="text-[22px] font-bold mb-6 flex items-end text-shadow-sm">
          DIPSÅS{" "}
          <span className="flex-grow border-b-2 border-dotted border-snow mx-2 text-shadow-sm"></span>
          <span className="font-bold text-[22px] text-shadow-sm">19 SEK</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {dipsItems.map((item) => (
            <button
              key={item.id}
              onClick={() => addToCart(item)}
              className="bg-shade-24-light hover:bg-coal text-snow text-shadow-sm text-sm text-center font-medium py-2 px-2.5 rounded hover:bg-opacity-90"
            >
              {item.name.toLowerCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Dricka Section */}
      <section className="text-snow p-4 bg-clay rounded-xl drop-shadow">
        <h2 className="text-[22px] font-bold mb-6 flex items-end text-shadow-sm">
          DRICKA
          <span className="flex-grow border-b-2 border-dotted border-snow mx-2 text-shadow-sm"></span>
          <span className="font-bold text-[22px] text-shadow-sm">19 SEK</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {drinkItems.map((item) => (
            <button
              key={item.id}
              onClick={() => addToCart(item)}
              className="bg-shade-24-light hover:bg-coal text-snow text-shadow-sm text-sm text-center font-medium py-2 px-2.5 rounded hover:bg-opacity-90"
            >
              {item.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
