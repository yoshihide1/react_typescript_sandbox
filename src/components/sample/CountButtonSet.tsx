import { useState } from "react";
import Button from "../button/Button";

/**
 * @returns カウントボタンのセット
 */
const CountButtonSet = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const countReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="flex justify-center mt-8">
        <Button label="CountUp" onClick={countUp} />
        <Button label="CountDown" onClick={countDown} />
        <Button label="Reset" onClick={countReset} buttonColor="red" />
      </div>
      <div>
        <p className="text-center text-5xl font-bold">{count}</p>
      </div>
    </>
  );
};

export default CountButtonSet;
