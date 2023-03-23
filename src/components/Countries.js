import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Flags = () => {
  const [data, setData] = useState([]);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);

  return (
    <div className="countries">
      <div className="continentSelector">
        <div className="continentName">
          {radios.map((continent) => (
            <li>
              <input
                type="radio"
                id={continent}
                name="continentRadio"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          ))}
        </div>
        <div>
          {selectedRadio && (
            <button onClick={() => setSelectedRadio("")}>Cancel</button>
          )}
        </div>
      </div>
      <div>
        <ul>
          {data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => b.population - a.population)
            .map((country, index) => (
              <Card key={index} country={country} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Flags;
