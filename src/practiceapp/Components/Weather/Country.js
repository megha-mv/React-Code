import React, { useEffect, useState } from 'react';
import State from '../Weather/State'

const Country = () => {

  const [allCountriesData, setAllCountriesData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({});

  const getCountries = async ()=>{
    const allCountriesName ={};
    // const allCountries = await fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code");
    const allCountries = await fetch('https://restcountries.com/v3.1/all');
    const data = await allCountries.json();
    data.forEach((country) =>{
      allCountriesName[country.ccn3] = [country.name.common, country.flag];
    })
    setAllCountriesData(allCountriesName);
  }

  useEffect(()=>{
    getCountries();
  },[]);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  console.log(selectedCountry,'-----selectedCountry---',allCountriesData);

  return (
    <div>
      <h1> Choose country you are in ....</h1>
      <select value={selectedCountry} onChange={handleChange}>
      {allCountriesData &&
      Object.entries(allCountriesData).map(([countryCode, countryData]) => {
        const [ countryName, flag ] = countryData;
        return (
          <option key={countryCode} value={`${countryName}-${countryCode}`}>
            {flag} {countryName}
          </option>
        );
      })}
      </select> 
      <State selectedCountry={selectedCountry}/>
    </div>
  )
}

export default Country;