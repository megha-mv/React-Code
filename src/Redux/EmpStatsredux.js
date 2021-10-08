import { connect } from "react-redux";

function EmpStats(props) {
  // const { empnames, setEmp } = useContext(EmpContext);
  const { empnames = [], dispatch } = props;

  function markAll(task) {
    return {
      type: "MARK_ALL",
      empname: task
    };
  }

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
          dispatch(markAll());
          // setEmp(
          //   empnames.map((el) => {
          //     return { ...el, getSalary: true };
          //   })
          // );
        }}
      >
        If all employees salaried click here
      </button>
    </>
  );
}

export default connect((state) => {
  return {
    empnames: state
  };
})(EmpStats);
