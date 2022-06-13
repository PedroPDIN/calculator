import React, { useState } from "react";
import components from "../components";
import Styles from '../styles';

const Calculator = () => {
  const [n1, setN1] = useState([]);
  const [n2, setN2] = useState([]);
  const [nextN, setNextN] = useState(true)
  const [operations, setOperations] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [result, setResult] = useState(0);

  const sumResult = (n1, n2) => {
    const value1 = Number(n1.join(''));
    const value2 = Number(n2.join(''));
    return value1 + value2;
  }

  const subResult = (n1, n2) => {
    const value1 = Number(n1.join(''));
    const value2 = Number(n2.join(''));
    return value1 - value2;
  }

  const mulResult = (n1, n2) => {
    const value1 = Number(n1.join(''));
    const value2 = Number(n2.join(''));
    return value1 * value2;
  }

  const divResult = (n1, n2) => {
    const value1 = Number(n1.join(''));
    const value2 = Number(n2.join(''));
    const element = value1 / value2;
    if (String(element).includes('.')) return test.toFixed(2);
    return element;
  }

  const resultEquation = () => {
    if (operations === '+') setResult(sumResult(n1, n2));
    if (operations === '-') setResult(subResult(n1, n2));
    if (operations === '*') setResult(mulResult(n1, n2));
    if (operations === '/') setResult(divResult(n1, n2));
    setIsDisabled(false);
    setN1([]);
    setOperations('');
    setN2([]);
    setNextN(true);
  }

  return (
    <Styles.Main>

      <span>
        { `${ n1.join('') } ${ operations } ${ n2.join('') }` }
      </span>

      <Styles.Result>
        { `Resultado: ${ result }` }
      </Styles.Result>

      <section>
        <components.Numbers setN1={ setN1 } setN2={ setN2 } nextN={ nextN } />
        <components.Operations 
        isDisabled={ isDisabled } 
        setIsDisabled={ setIsDisabled }
        setOperations={ setOperations }
        setNextN={ setNextN }
        functionResult={ resultEquation }
        />
      </section>


    </Styles.Main>
  );
};

export default Calculator;
