import React, { useEffect } from "react";

export default function Stagiaire() {
  useEffect(() => {}, []);
  return (
    <div>
      <section className="items-center lg:flex bg-gray-50 lg:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="pt-4 bg-white rounded shadow dark:bg-gray-900">
            <div className="flex px-6 pb-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold dark:text-gray-400">
                Liste Stagiaire
              </h2>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                    <th className="px-6 pb-3 font-medium">ID</th>
                    <th className="px-6 pb-3 font-medium">Nom </th>
                    <th className="px-6 pb-3 font-medium">Prenom </th>
                    <th className="px-6 pb-3 font-medium">Age</th>
                    <th className="px-6 pb-3 font-medium">Telephone</th>
                    <th className="px-6 pb-3 font-medium">Formations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                    <td className="px-6 py-5 font-medium">018276td45</td>
                    <td className="px-6 py-5 font-medium ">08.4.2021</td>
                    <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                    <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                    <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                    <td>
                      <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-5 flex gap-4">
                      <a
                        href="#"
                        className=" font-medium text-blue-500  group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 hidden group-hover:block"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 group-hover:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </a>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="text-xs dark:text-gray-400">
                    <td className="px-6 py-5 font-medium">018276td45</td>
                    <td className="px-6 py-5 font-medium ">08.4.2021</td>
                    <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                    <td>
                      <span className="inline-block px-2 py-1 text-center text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-5 ">
                      <a
                        href="#"
                        className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="text-xs bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                    <td className="px-6 py-5 font-medium">018276td45</td>
                    <td className="px-6 py-5 font-medium ">08.4.2021</td>
                    <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                    <td>
                      <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-5 ">
                      <a
                        href="#"
                        className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="text-xs dark:text-gray-400">
                    <td className="px-6 py-5 font-medium">018276td45</td>
                    <td className="px-6 py-5 font-medium ">08.4.2021</td>
                    <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                    <td>
                      <span className="inline-block px-2 py-1 text-center text-red-600 bg-red-100 rounded-full dark:text-red-700 dark:bg-red-200">
                        Cancelled
                      </span>
                    </td>
                    <td className="px-6 py-5 ">
                      <a
                        href="#"
                        className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
