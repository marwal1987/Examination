import React from "react";
import { CartItemProps } from "../types";
import { useCart } from "../context/CartContext";

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity } = useCart();

  return (
    <div className="flex flex-col w-full border-b border-shade-24-light border-dotted pb-2">
      <div className="flex items-end w-full">
        <h2 className="font-bold text-[22px] flex items-end w-full">
          {item.name.toUpperCase()}
          <span className="flex-grow border-b-2 border-dotted border-coal mx-2"></span>
          <span>{item.price} SEK</span>
        </h2>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-[10px] mt-2">
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="bg-shade-24-dark rounded-full w-6 h-6 place-items-center"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00004 0.199097C5.7239 0.199097 5.50004 0.422955 5.50004 0.699097V5.69911H0.5C0.223858 5.69911 0 5.92296 0 6.19911C0 6.47525 0.223858 6.69911 0.5 6.69911H5.50004V11.6991C5.50004 11.9752 5.7239 12.1991 6.00004 12.1991C6.27618 12.1991 6.50004 11.9752 6.50004 11.6991V6.69911H11.5C11.7761 6.69911 12 6.47525 12 6.19911C12 5.92296 11.7761 5.69911 11.5 5.69911H6.50004V0.699097C6.50004 0.422954 6.27618 0.199097 6.00004 0.199097Z"
              fill="#353131"
            />
          </svg>
        </button>
        <span className="font-medium text-sm">{item.quantity} stycken</span>
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="bg-shade-24-dark rounded-full w-6 h-6 place-items-center"
        >
          <svg
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12"
              y="0.699097"
              width="1"
              height="12"
              rx="0.5"
              transform="rotate(90 12 0.699097)"
              fill="#353131"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
