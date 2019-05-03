import React from "react";

export function Count({
  count,
  squared,
  increase,
  decrease,
  setToRandom,
  reset
}) {
  console.log("Render Count: ", count);
  return (
    <>
      <p>
        Count is: <code>{count}</code>
      </p>
      <p>
        Squared count is: <code>{squared}</code>
      </p>
      <div>
        <button onClick={increase}>INC</button>
        <button onClick={decrease}>DEC</button>
        <button onClick={setToRandom}>Random</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default React.memo(Count);
