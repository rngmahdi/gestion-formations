import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex">
        <ul className="px-5 text-left mt-7 flex items-center">
          <li className="pb-3">
            <a
              href=""
              className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100"
            >
              Home
            </a>
          </li>
          <li className="pb-3">
            <a
              href=""
              className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
            >
              About us
            </a>
          </li>
          <li className="pb-3">
            <a
              href=""
              className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
            >
              Features
            </a>
          </li>
          <li className="pb-3">
            <a
              href=""
              className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
            >
              Blog{" "}
            </a>
          </li>
          <li className="pb-3">
            <a
              href=""
              className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
