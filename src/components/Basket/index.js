import React from "react";
import OrderCard from "../OrderCard.js";
import "./style.css";

const Basket = ({ cart, setCart }) => {
  let subTotal = 0;
  cart.forEach((order) => {
    subTotal += order.quantity * order.price;
  });

  return (
    <div className="pan">
      <button
        className={cart[0] ? "btn-green" : "btn-grey"}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {" "}
        Valider mon panier{" "}
      </button>

      {cart[0] ? (
        <>
          <ul className="basket">
            {cart.map((order, i) => {
              return (
                <li key={order.id}>
                  <OrderCard {...order} setCart={setCart} cart={cart} i={i} />
                </li>
              );
            })}
          </ul>
          <div className="bottom-line">
            <div className="d-flex aligned space-between mb-10">
              <span>Sous-total</span>
              <span>{subTotal.toFixed(2).replace(".", ",")} €</span>
            </div>
            <div className="d-flex aligned space-between mb-10">
              <span>Frais de livraison</span>
              <span>2,50 €</span>
            </div>
          </div>
          <div className="d-flex aligned space-between mt-20">
            <span className="dark">Total</span>
            <span className="dark">
              {(subTotal + 2.5).toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </>
      ) : (
        <p className="basket">Votre panier est vide</p>
      )}
    </div>
  );
};

export default Basket;
