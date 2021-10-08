import React, { useState, createContext, useContext } from "react";
import { connect } from "react-redux";
import EmpInput from "./EmpInputRedux";
import EmpDisplay from "./EmpDisplayRedux";
import EmpStats from "./EmpStatsredux";

const EmpContext = createContext();

function Emp() {
  const [empnames, setEmp] = useState([]);
  return (
    <EmpContext.Provider value={{ empnames, setEmp }}>
      <>
        <EmpInput />
        <hr />
        <EmpDisplay />
        <hr />
        <EmpStats />
      </>
    </EmpContext.Provider>
  );
}

export default Emp;
