import React from "react";
import ".//Callback.css";
import { useState } from "react";
import DemoComp from "./DemoComp";
import { useCallback } from "react";

const Callback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseHandler = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);
  return (
    <div>
      <div>
        <h2>With using Memoization</h2>
        <h2>Main-component</h2>
        <p>{count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>
      <DemoComp count2={count2} increaseHandler={increaseHandler} />
    </div>
  );
};

export default Callback;
