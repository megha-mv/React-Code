import { useState } from "react";
import { connect } from "react-redux";

function EmpInput(props) {
  //Value and setValue will be required for input box as input variable
  const [value, setValue] = useState("");
  const { dispatch } = props;

  function addInfo(task) {
    return {
      type: "ADD_INFO",
      empname: task
    };
  }

  return (
    <>
      <label>
        Add Your Info :
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
          setValue("");
        }}
      >
        Add info
      </button>
    </>
  );
}

export default connect(null, null)(EmpInput);
