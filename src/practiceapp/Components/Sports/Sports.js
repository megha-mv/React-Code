import React,{ useState} from 'react'

const Sports = () => {

  const sportsArray=["cricket","badminton","football","volleyball"];
  const [sports, setSports] = useState(sportsArray);
  const [selectedSports, setSelectedSports] = useState({});


  const handleDeleteClick=(sport)=>{
   setSports(sports.find((s) => s !== sport))
  }

  const handleSelectSport =(sport) =>{
    setSelectedSports((prevSelectedSports) => {
      const newSelectedSports = { ...prevSelectedSports };
      Object.keys(newSelectedSports).forEach((key) => {
        if (key !== sport) {
          newSelectedSports[key] = false;
        }
      });
      newSelectedSports[sport] = !newSelectedSports[sport];
      return newSelectedSports;
    });
  }

  return (
    <div>
      {sports.map((sport,i) =>{
        return(
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} key={i+2}>
            <ul style={{display: "flex", justifyContent: "center", alignItems: "center"}} key={i+4}>
              <input type='checkbox' checked={selectedSports[sport] || false} onChange={() => handleSelectSport(sport)} key={sport+i}></input>
              <ol key={i}>{sport}</ol>
              {selectedSports[sport] && <button key={sport} onClick={()=>handleDeleteClick(sport)}>Delete</button>}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Sports