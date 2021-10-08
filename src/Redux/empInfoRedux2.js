import React, { useState, createContext, useContext } from "react";
import { connect } from "react-redux";

//Create context to share info among different functional modules
const EmpContext = createContext();

function EmpInput(props) {
  //Value and setValue will be required for input box as input variable
  const [value, setValue] = useState("");
  // const [empnames, setEmp] = useState([]);
  const { dispatch } = props;
  // const { empnames = [], setEmp } = useContext(EmpContext);

  function addInfo(task) {
    return {
      type: "ADD_INFO",
      empname: task
    };
  }

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
          dispatch(addInfo(value));
          // setEmp([...empnames, { empname: value, getSalary: false }]);
          setValue("");
        }}
      >
        Add info
      </button>
    </>
  );
}

// function mapStateToPropsEmpInput(state) {
//   return { empnames: state };
// }

const ConnectedToEmpInput = connect(null, null)(EmpInput);

function EmpDisplay(props) {
  //output variables
  // const { empnames = [], setEmp } = useContext(EmpContext);
  const { empnames = [], dispatch } = props;

  function gotIT(task) {
    return {
      type: "GOT_IT",
      empname: task
    };
  }

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
                dispatch(gotIT(el.empname));
                //   const newSalEmp = empnames.map((el) => {
                //     if (el.empname === empname) {
                //       return { ...el, getSalary: true };
                //     }
                //     return el;
                //   });
                //   setEmp(newSalEmp);
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

const ConnectedToEmpDisplay = connect((state) => {
  return {
    empnames: state
  };
})(EmpDisplay);

function EmpStats(props) {
  // const { empnames, setEmp } = useContext(EmpContext);
  const { empnames = [], dispatch } = props;
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

const ConnectedToEmpstats = connect((state) => {
  return {
    empnames: state
  };
})(EmpStats);

function Emp() {
  // const [value, setValue] = useState("");
  //Now using context we dont need input variables
  const [empnames, setEmp] = useState([]);
  return (
    <EmpContext.Provider value={{ empnames, setEmp }}>
      <>
        {/* <EmpInput /> */}
        <ConnectedToEmpInput />
        <hr />
        {/* <EmpDisplay /> */}
        <ConnectedToEmpDisplay />
        <hr />
        <ConnectedToEmpstats />
        {/* <EmpStats /> */}
      </>
    </EmpContext.Provider>
  );
}

export default Emp;
