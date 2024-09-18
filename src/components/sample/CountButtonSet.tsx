import { useState } from "react";
import ButtonBase from "../button/ButtonBase";

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
        <ButtonBase
          label="CountUp"
          onClick={countUp}
          buttonColor="blue"
          textColor="white"
        />
        <ButtonBase
          label="CountDown"
          onClick={countDown}
          buttonColor="gray"
          textColor="white"
        />
        <ButtonBase
          label="Reset"
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
