import { useState } from "react";
import BaseButton from "../button/BaseButton";

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
        <BaseButton
          label="↑ CountUp"
          onClick={countUp}
          buttonColor="blue"
          textColor="white"
        />
        <BaseButton
          label="↓ CountDown"
          onClick={countDown}
          buttonColor="blue"
          textColor="white"
        />
        <BaseButton
          label="× Reset"
          onClick={countReset}
          buttonColor="red"
          textColor="white"
        />
      </div>
      <div>
        <p className="text-center text-5xl font-bold">{count}</p>
      </div>
    </>
  );
};

export default CountButtonSet;
