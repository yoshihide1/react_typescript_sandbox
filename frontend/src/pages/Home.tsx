import { useEffect } from "react";
import LinkButton from "../components/button/NavigateButton";
import { getRequest } from "../components/common/ApiUtils";
import CountButtonSet from "../components/sample/CountButtonSet";
import postgresLogo from "/postgresql.svg";
import reactLogo from "/react.svg";
import springLogo from "/spring-icon.svg";
import tsLogo from "/ts.svg";
import viteLogo from "/vite.svg";

/**
 *
 * @returns ホーム画面
 */
const Home = () => {
  /**
   * sample(疎通確認)
   * @param res
   */
  const callback = (res: string) => {
    console.log(res);
  };
  useEffect(() => {
    getRequest("/api/sample", callback);
  });

  return (
    <>
      <div className="flex justify-evenly mt-40">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="size-28" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-28" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={tsLogo} className="size-28" alt="TS logo" />
        </a>
        <a href="https://spring.io/projects/spring-boot" target="_blank">
          <img src={springLogo} className="size-28" alt="SpringBoot logo" />
        </a>
        <a href="https://postgresql.org/" target="_blank">
          <img src={postgresLogo} className="size-28" alt="PostgreSQL logo" />
        </a>
      </div>
      <h1 className="text-center text-4xl mt-2">Vite + React + TypeScript + SpringBoot + PostgreSQL</h1>
      <CountButtonSet />
      <div className="flex justify-center mt-3">
        <LinkButton label="Sample" to="/sample" />
        <LinkButton label="Todo" to="/todo" />
      </div>
    </>
  );
};

export default Home;
