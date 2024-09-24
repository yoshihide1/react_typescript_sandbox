export const background: { [key: string]: string } = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
  gray: "bg-stone-500",
};

export const text: { [key: string]: string } = {
  white: "text-slate-100",
  black: "text-black",
};

/**
 * グラデーション
 */
export const backGradation: { [key: string]: string } = {
  blue: "from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
  purple:
    "from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
  pink: "from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
};
