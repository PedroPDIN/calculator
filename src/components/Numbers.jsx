import React from "react";
import { arrayNumber } from "../helpers";

const Numbers = () => {
  return (
    <div>
        {arrayNumber.map((number) => (
        <div>
          <button 
          type="button"
          value={ number }
          >{ number }</button>
        </div>
      ))}
    </div>
  )
}

export default Numbers;
