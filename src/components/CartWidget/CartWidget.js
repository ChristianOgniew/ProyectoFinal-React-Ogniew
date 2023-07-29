import cart from "./assets/cart.svg";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img
        className="CartImg cart-icon white-cart-icon p-1"
        src={cart}
        alt="cart-widget"
      />
    </Link>
  );
};
export default CartWidget;
