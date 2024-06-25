import React, { useEffect, useState } from 'react'

const State = ({selectedCountry}) => {

  const [allStates, setAllStates] = useState([]);

  async function getAllStates(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dff6a7f10dmsh7f929d5a40f0490p14ec51jsne0f827410d02',
        'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
      }
    }
    const states = await fetch(`https://andruxnet-world-cities-v1.p.rapidapi.com/?query=${selectedCountry}&searchby=city`,options);
    const data = await states.json();
    setAllStates(data);
  }

  useEffect(()=>{
    getAllStates();
  },[]);

  console.log(selectedCountry,'selectedCountry',allStates);

  // console.log(allStates);

  return (
    <div>
      <h1>Choose your state....</h1>
    </div>
  )
}

export default State