import React from "react";
import {countryNames} from "../../utils/words.js";
import BackButton from "../../components/BackButton.jsx";

export default function Countries() {

    return (
        <div
            className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%] h-screen gap-5 ">
            <BackButton/>
            <h3 className="m-4 font-semibold text-white text-3xl mt-28">Страны</h3>
            <ul className="h-[70vh] w-[30%] min-w-[300px] overflow-y-scroll text-lg font-medium text-gray-900 border border-gray-200 rounded-lg bg-cyan-900 dark:border-gray-600 dark:text-white">
                {countryNames?.map(country => (
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                        key={country.name}>
                        <div className="flex items-center pl-3">
                           <label htmlFor={country.name}
                                   className="w-full py-3 ml-2 text-sm font-medium text-white">
                                {country.name}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
