import React from "react";
import {countryNames} from "../../utils/words.js";

export default function Countries() {

    return (
        <>
            <div
                className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%] h-screen gap-5">

                <h3 className="m-4 font-semibold text-gray-900 dark:text-white text-3xl">Countries</h3>
                <ul className="h-[70vh] w-[30%] min-w-[300px] overflow-y-scroll text-lg font-medium text-gray-900 border border-gray-200 rounded-lg bg-cyan-900 dark:border-gray-600 dark:text-white">
                    {countryNames?.map(country => (
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                            key={country.name}>
                            <div className="flex items-center pl-3">
                                <input id={country.name} type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label htmlFor={country.name}
                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {country.name}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">Выбрать
                </button>
            </div>
        </>
    );
}
