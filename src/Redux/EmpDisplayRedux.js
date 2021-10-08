import { connect } from "react-redux";
import { useState } from "react";

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

export default connect((state) => {
  return {
    empnames: state
  };
})(EmpDisplay);
