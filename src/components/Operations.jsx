import React from "react";
import { arrayOperations } from "../helpers";

const Operations = (props) => {
  const { isDisabled, setIsDisabled, setOperations, setNextN, functionResult } = props;

  const selectOperation = (v) => {
    setOperations(v)
    setNextN(false)
    setIsDisabled(true)
  }

  return (
    <div>
      {arrayOperations.map((signal) => (
        <div>
          <button
          type="button"
          value={ signal }
          disabled={ isDisabled }
          onClick={(e) => selectOperation(e.target.value)}
          >{ signal }</button>
        </div>
      ))}
      <button type="button" onClick={ functionResult }>=</button>
    </div>
  )
}

export default Operations;
