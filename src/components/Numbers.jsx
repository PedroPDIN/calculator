import React from "react";
import Styles from '../styles'
import { arrayNumber } from "../helpers";

const Numbers = (props) => {
  const { setN1, setN2, nextN } = props;

  const selectNumber = (v) => {
    if (!nextN) {
      setN2((prevState) => [...prevState, v])
    } else {
      setN1((prevState) => [...prevState, v]);
    }
  }
  
  return (
    <Styles.Buttons>
        {arrayNumber.map((number) => (
          <button 
          type="button"
          value={ number }
          onClick={(e) => selectNumber(e.target.value)}
          >{ number }</button>
      ))}
    </Styles.Buttons>
  )
}

export default Numbers;
