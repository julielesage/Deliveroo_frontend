import React from "react";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

const OrderCard = ({ cart, setCart, quantity, title, price, id, i }) => {
  const multipliedPrice = Number(quantity * price)
    .toFixed(2)
    .replace(".", ",");

  const cartCounter = (id, calc) => {
    let tab = [...cart];
    console.log("tab begin==>", tab);
    if (calc === "minus") {
      if (tab[i].quantity === 1) tab.splice(i, 1);
      else tab[i].quantity -= 1;
    } else if (calc === "plus") tab[i].quantity += 1;
    console.log("tab after ==>", tab);
    setCart(tab);
  };

  return (
    <>
      <div className="d-flex bottom-line aligned-start">
        <div className="d-flex">
          <div
            onClick={(e) => {
              e.preventDefault();
              console.log("minus");
              cartCounter(id, "minus");
            }}
          >
            <MinusIcon
              size={20}
              style={{ cursor: "pointer", color: "#00CEBD" }}
            />
          </div>

          <span className="quantity">{quantity}</span>
          <div
            onClick={(e) => {
              e.preventDefault();
              cartCounter(id, "plus");
            }}
          >
            <PlusIcon
              size={20}
              style={{ cursor: "pointer", color: "#00CEBD" }}
            />
          </div>
        </div>
        <span className="dark flex-one">{title}</span>
        <span className="dark price">{multipliedPrice} €</span>
      </div>
    </>
  );
};

export default OrderCard;
