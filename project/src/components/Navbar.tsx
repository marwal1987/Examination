import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const cartContext = useContext(CartContext);
  const location = useLocation();

  if (!cartContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }
  const { cart } = cartContext;

  const totalAmount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Determine the background and icon color based on the current path
  const bgNavColorClass =
    location.pathname === "/cart"
      ? "bg-ash"
      : location.pathname === "/eta"
      ? "bg-clay"
      : "bg-dark-mint";

  const iconColorClass =
    location.pathname === "/cart"
      ? "bg-ash"
      : location.pathname === "/eta"
      ? "bg-clay"
      : "bg-snow";

  return (
    <nav
      className={`${bgNavColorClass} relative flex items-center justify-end bg-ash max-w-[390px] m-auto`}
    >
      <NavLink
        to={"/cart"}
        aria-label="Cart"
        className={`${iconColorClass} flex items-center rounded-[4px] p-4 mx-4 my-4 relative `}
      >
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5046 0C8.53403 0 4.50459 4.02943 4.50459 9V10.6166H4.00076C1.56528 10.6166 -0.304931 12.7747 0.0414116 15.1854L1.78084 27.2927C2.06375 29.2619 3.75079 30.7239 5.74019 30.7239H26.2507C28.2401 30.7239 29.9271 29.2619 30.21 27.2927L31.9495 15.1854C32.2958 12.7747 30.4256 10.6166 27.9901 10.6166H27.4862V9C27.4862 4.02944 23.4567 0 18.4862 0H13.5046ZM25.4862 10.6166V9C25.4862 5.13401 22.3522 2 18.4862 2H13.5046C9.6386 2 6.50459 5.13401 6.50459 9V10.6166H25.4862ZM4.00076 12.6166H27.9901C29.2078 12.6166 30.143 13.6956 29.9698 14.901L28.2304 27.0083C28.0889 27.9929 27.2454 28.7239 26.2507 28.7239H5.74019C4.74549 28.7239 3.90197 27.9929 3.76051 27.0083L2.02109 14.901C1.84791 13.6956 2.78302 12.6166 4.00076 12.6166Z"
            fill="#605858"
          />
        </svg>

        {location.pathname === "/" && (
          <span className="absolute top-0 right-0 transform translate-x-[50%] translate-y-[-50%] text-[10px] flex items-center justify-center rounded-full text-snow bg-red font-bold size-6">
            {totalAmount}
          </span>
        )}
      </NavLink>
    </nav>
  );
};

export default Navbar;
