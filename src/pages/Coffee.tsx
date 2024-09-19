import { useEffect, useState } from "react";
import { getRequest } from "../components/common/Request";
import BackButton from "../components/button/BackButton";

interface CoffeeRespons {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
}

/**
 * @returns サンプル一覧画面
 */
const Coffee = () => {
  const [coffee, setCoffee] = useState<CoffeeRespons[]>();

  const callback = (res: CoffeeRespons[]): void => {
    setCoffee(res);
  };

  useEffect(() => {
    getRequest("https://api.sampleapis.com/coffee/hot", callback);
  }, []);

  return (
    <>
      <h1 className="text-4xl m-2">Coffee List</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                image
              </th>
            </tr>
          </thead>
          <tbody>
            {coffee?.map((c) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {c.title}
                  </th>
                  <td className="px-6 py-4">{c.description}</td>
                  <td className="px-6 py-4">
                    <img
                      className="h-32 max-w-lg mx-auto"
                      src={c.image}
                      alt="image description"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <BackButton />
      </div>
    </>
  );
};

export default Coffee;
