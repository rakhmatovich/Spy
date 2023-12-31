import React from "react";
import {travelNames} from "../../utils/words.js";
import BackButton from "../../components/BackButton.jsx";

export default function Travel() {

    return (
        <div
            className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%] h-screen gap-5 ">
            <BackButton/>
            <h3 className="m-4 font-semibold  text-white text-3xl mt-28">Путешествие</h3>
            <ul className="h-[70vh] w-[30%] min-w-[300px] overflow-y-scroll text-lg font-medium text-white border border-gray-200 rounded-lg bg-cyan-900 dark:border-gray-600 ">
                {travelNames?.map(travel => (
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                        key={travel.name}>
                        <div className="flex items-center pl-3">
                           <label htmlFor={travel.name}
                                   className="w-full py-3 ml-2 text-sm font-medium text-white">
                                {travel.name}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
