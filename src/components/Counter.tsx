import React, { useState } from "react";
import "./Counter.css";

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p className="fontSize margin">{count}</p>
      <div className="margin">
        <button
          onClick={() => setCount(count + 1)}
          className="btnBtn--RedBtn--cubic right"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="btnBtn--BlueBtn--cubic left"
        >
          -
        </button>
      </div>
      <button onClick={() => setCount(0)} className="btnBtn--GreenBtn--cubic">
        リセット
      </button>
    </>
  );
};

export default Counter;





