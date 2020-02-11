import React from "react";
import "./style.css";

const Panier = props => {
  let command = props.command;
  return (
    <div className="pan">
      <button className={command === true ? "green" : "btn-grey"} onSubmit>
        {" "}
        Valider mon panier{" "}
      </button>
      <ul className="basket">
        <li>
          <p>Votre panier est vide</p>
        </li>
      </ul>
    </div>
  );
};

export default Panier;
