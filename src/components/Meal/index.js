import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const Meal = ({
  cart,
  setCart,
  id,
  title,
  description,
  price,
  picture,
  popular,
}) => {
  const addOrder = (a, b, c) => {
    const tab = [...cart];
    let doublonIndex = -1;
    if (cart[0]) doublonIndex = cart.findIndex((order) => order.id === c);
    if (doublonIndex !== -1) tab[doublonIndex].quantity += 1;
    else {
      const newOrder = {};
      newOrder.title = a;
      newOrder.quantity = 1;
      newOrder.price = b;
      newOrder.id = c;
      tab.push(newOrder);
    }
    setCart(tab);
  };

  return (
    <>
      <div
        className="meal d-flex"
        onClick={(e) => {
          e.preventDefault();
          addOrder(title, price, id);
        }}
      >
        <div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <p className="recette">{description}</p>
          <div className="d-flex">
            <span>{price} &nbsp; € &nbsp;</span>
            {popular === true && (
              <>
                <FontAwesomeIcon className="popular" icon="star" />
                <span className="popular">&nbsp; Populaire</span>
              </>
            )}
          </div>
        </div>
        {picture && <img alt={title} src={picture} />}
      </div>
    </>
  );
};

export default Meal;
