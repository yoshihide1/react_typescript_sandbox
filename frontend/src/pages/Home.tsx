import { useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import LinkButton from '../components/button/NavigateButton';
import { getRequest } from '../components/common/Request';
import CountButtonSet from '../components/sample/CountButtonSet';
import tsLogo from '/ts.svg';
import viteLogo from '/vite.svg';

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
    getRequest('/api/sample', callback);
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
        <a href="https://react.dev" target="_blank">
          <img src={tsLogo} className="size-28" alt="TS logo" />
        </a>
      </div>
      <h1 className="text-center text-4xl mt-2">Vite + React + TypeScript</h1>
      <CountButtonSet />
      <div className="flex justify-center mt-3">
        <LinkButton label="Sample" to="/sample" />
        <LinkButton label="Todo" to="/todo" />
      </div>
    </>
  );
};

export default Home;