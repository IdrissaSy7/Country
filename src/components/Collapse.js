import React, { useState } from "react";
import Up from "../styles/img/up.png";
import Down from "../styles/img/down.png";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <h3 onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        {isOpen ? (
          <span className="chevron">
            <img src={Up} alt="Fleche vers le haut" />
          </span>
        ) : (
          <span className="chevron">
            <img src={Down} alt="Fleche vers le bas" />
          </span>
        )}
      </h3>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
};

export default Collapse;
