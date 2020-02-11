import React from "react";
import "./style.css";

const RestoHeader = props => {
  return (
    <div className="white padding30">
      <div className="d-flex container">
        <div>
          <h1>{props.name}</h1>
          <p className="grey">{props.description}</p>
        </div>
        <img className="resto" alt={props.name} src={props.picture} />
      </div>
    </div>
  );
};

export default RestoHeader;
