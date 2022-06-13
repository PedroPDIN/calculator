import React from "react";
import Styles from '../styles'
import { arrayOperations } from "../helpers";

const Operations = (props) => {
  const { isDisabled, setIsDisabled, setOperations, setNextN, functionResult } = props;

  const selectOperation = (v) => {
    setOperations(v)
    setNextN(false)
    setIsDisabled(true)
  }

  return (
    <Styles.Operations>
      {arrayOperations.map((signal) => (
          <button
          type="button"
          value={ signal }
          disabled={ isDisabled }
          onClick={(e) => selectOperation(e.target.value)}
          >{ signal }</button>
      ))}
      <button type="button" onClick={ functionResult }>=</button>
    </Styles.Operations>
  )
}

export default Operations;
