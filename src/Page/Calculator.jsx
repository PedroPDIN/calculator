import React, { useState } from "react";
import components from "../components";

const Calculator = () => {
  const [n1, getN1] = useState(0);
  const [n2, getN2] = useState(0);
  const [nextN, getNextN] = useState(false)
  const [operations, getOperations] = useState('');
  console.log(n1)

  const selectNumber = (v) => {
    getN1(v)
  }

  return (
    <div>
      <input type="number" />
      <components.Numbers select={selectNumber}/>
      <components.Operations/>
    </div>
  );
};

export default Calculator;
