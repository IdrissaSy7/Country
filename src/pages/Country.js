import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";

const Country = ({}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  const { id } = useParams();

  const country = data.find((c) => c.cca3 === id);

  console.log(country);

  return (
    <div>
      <p className="imageCountry">
        <img src={country && country.flags.svg} alt="" />
      </p>
      <NavLink to="/country">
        <i className="fa-solid fa-arrow-left"></i>
      </NavLink>
      <div className="countryContent">
        <h1 className="title">
          {country && country.name.common} {country && country.flag}
        </h1>
        <div className="countryInfos">
          <p> Official name : {country && country.name.official}</p>
          <p>Capital : {country && country.capital}</p>
          <p>
            Population : {country && country.population.toLocaleString()}{" "}
            residents
          </p>
          <p>Continent : {country && country.region}</p>
          <p>
            Language(s) :
            {country &&
              Object.keys(country.languages).map((key, index) => (
                <li key={index}>{country.languages[key]}</li>
              ))}
          </p>
          <p>
            Currency(ies) :
            {country &&
              Object.keys(country.currencies).map((key, index) => (
                <li key={index}>
                  {country.currencies[key].name}{" "}
                  {country.currencies[key].symbol}
                </li>
              ))}
          </p>
          <Collapse label="More informations">
            <p>
              Alternative Spellings:
              {country &&
                country.altSpellings.map((spelling, index) => (
                  <li key={index}>{spelling}</li>
                ))}
            </p>
            <p>Area : {country && country.area.toLocaleString()} km2</p>
            <p>Demonyms : {country && country.demonyms.eng.m}</p>
            <p>
              International direct dialing : {country && country.idd.root}
              {country && country.idd.suffixes[0]}
            </p>
            <p>
              Website domains :
              {country &&
                country.tld.map((tld, index) => <li key={index}>{tld}</li>)}
            </p>
            <p>Start of week : {country && country.startOfWeek}</p>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Country;
