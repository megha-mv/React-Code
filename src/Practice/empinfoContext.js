import React, { useState, createContext, useContext } from "react";

//Create context to share info among different functional modules
const EmpContext = createContext();

function EmpInput() {
  //Value and setValue will be required for input box as input variable
  const [value, setValue] = useState("");
  // const [empnames, setEmp] = useState([]);
  const { empnames = [], setEmp } = useContext(EmpContext);

  return (
    <>
      <label>
        Add You Info :
        <input
          type="text"
          value={value}
          onChange={(event) => {
            const {
              target: { value }
            } = event;
            setValue(value);
          }}
        />
      </label>
      <button
        onClick={() => {
          setEmp([...empnames, { empname: value, getSalary: false }]);
          setValue("");
        }}
      >
        Add info
      </button>
    </>
  );
}

function EmpDisplay() {
  //output variables
  const { empnames = [], setEmp } = useContext(EmpContext);
  return (
    <>
      <h1> All the emp Info </h1>
      {empnames.map((el) => {
        const { getSalary, empname } = el;
        return (
          <>
            <h3 style={{ color: getSalary ? "green" : "red" }}>{el.empname}</h3>
            <button
              onClick={() => {
                const newSalEmp = empnames.map((el) => {
                  if (el.empname === empname) {
                    return { ...el, getSalary: true };
                  }
                  return el;
                });
                setEmp(newSalEmp);
              }}
            >
              Got It
            </button>
          </>
        );
      })}
    </>
  );
}

function EmpStats() {
  const { empnames, setEmp } = useContext(EmpContext);
  return (
    <>
      <h2> Total number of Employees = {empnames.length} </h2>
      <h3>
        Total number of Employees got salary ={" "}
        {empnames.filter((el) => el.getSalary).length}{" "}
      </h3>
      <h3>
        Total number of Employees did not get salary ={" "}
        {empnames.filter((el) => !el.getSalary).length}
      </h3>
      <button
        onClick={() => {
          setEmp(
            empnames.map((el) => {
              return { ...el, getSalary: true };
            })
          );
        }}
      >
        {" "}
        If all employees salaried click here{" "}
      </button>
    </>
  );
}

function Emp() {
  // const [value, setValue] = useState("");
  //Now using context we dont need input variables
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
