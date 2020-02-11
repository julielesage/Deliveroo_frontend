import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const Meal = props => {
  const { key, title, description, price, picture, popular } = props;

  return (
    <>
      <li className="meal d-flex">
        <div>
          <h3>{title}</h3>
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
      </li>
    </>
  );
};

export default Meal;
