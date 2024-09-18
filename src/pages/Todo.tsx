import { useEffect, useState } from "react";
import { getRequest } from "../components/Request";

interface SampleRespons {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
}

/**
 * @returns サンプル一覧画面
 */
const SampleList = () => {
  const [coffee, setCoffee] = useState<SampleRespons[]>();

  const callback = (res: SampleRespons[]): void => {
    setCoffee(res);
  };

  useEffect(() => {
    getRequest("https://api.sampleapis.com/coffee/hot", callback);
  }, []);

  return (
    <>
      <h1 className="text-4xl m-2">Coffee List</h1>
      {/* <form className="max-w-4xl mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            タスクを追加してください
          </label>
        </div>
        <div className="flex justify-end">
          <SubmitButton label="Add" requestUrl="/" />
        </div>
      </form> */}
      {coffee?.map((c) => {
        return <p>{c.title} </p>;
      })}
    </>
  );
};

export default SampleList;
