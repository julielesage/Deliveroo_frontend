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
          <LinesEllipsis
            text={description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="recette"
          />
          <span>{price} &nbsp; € &nbsp;</span>
          {popular === true && (
            <div>
              <FontAwesomeIcon icon="star" />
              <i class="fas fa-star"></i>
              <span className="popular">populaire</span>
            </div>
          )}
        </div>
        {picture && <img alt={title} src={picture} />}
      </li>
    </>
  );
};

export default Meal;
