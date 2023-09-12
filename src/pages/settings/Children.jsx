import React from "react";
import {childrenNames} from "../../utils/words.js";
import BackButton from "../../components/BackButton.jsx";

export default function Children() {

    return (
        <div
            className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%] h-screen gap-5">
            <BackButton/>
            <h3 className="m-4 font-semibold text-gray-900 dark:text-white text-3xl">Дети</h3>
            <ul className="h-[70vh] w-[30%] min-w-[300px] overflow-y-scroll text-lg font-medium text-gray-900 border border-gray-200 rounded-lg bg-cyan-900 dark:border-gray-600 dark:text-white">
                {childrenNames?.map(children => (
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                        key={children.name}>
                        <div className="flex items-center pl-3">
                             <label htmlFor={children.name}
                                   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {children.name}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">Выбрать
            </button>
        </div>
    );
}
