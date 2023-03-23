import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <Link key={country.name.common} to={`/country/${country.cca3}`}>
      <li className="card">
        <img src={country.flags.png} alt={"drapeau " + country.name.common} />
        <h3>{country.name.common}</h3>
      </li>
    </Link>
  );
};

export default Card;
