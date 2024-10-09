import HeaderIcon from "../../assets/header_icon.svg";

const Header = () => {
  return (
    <nav className=" border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={HeaderIcon} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React + TypeScript SandBox</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/sample" className="ml-3 hover:underline">
                Sample
              </a>
            </li>
            <li>
              <a href="#" className="ml-3 hover:underline">
                ??????
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
