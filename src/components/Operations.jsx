import React from "react";
import { arrayOperations } from "../helpers";

const Operations = () => {
  return (
    <div>
      {arrayOperations.map((signal) => (
        <div>
          <button>{ signal }</button>
        </div>
      ))}
    </div>
  )
}

export default Operations;
