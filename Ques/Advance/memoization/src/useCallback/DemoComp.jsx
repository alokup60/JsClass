import React, { memo } from "react";

const DemoComp = ({ count2, increaseHandler }) => {
  console.log("Demo Component called");
  return (
    <div>
      <div>
        <h2>Sub-component</h2>
        <p>{count2}</p>
        <button onClick={increaseHandler}>+</button>
      </div>
    </div>
  );
};

export default memo(DemoComp);
