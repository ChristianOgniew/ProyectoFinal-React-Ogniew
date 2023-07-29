import React from "react";

const CartItem = ({ item }) => {
  const { name, img, price, quantity } = item;

  return (
    <div className="CartItem">
      <img src={img} alt={name} className="CartItemImg" />
      <div className="CartItemInfo">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
