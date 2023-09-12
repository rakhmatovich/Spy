import React from "react";
import {Link} from "react-router-dom";
import BackButton from "../components/BackButton.jsx";

export default function Settings() {
    return (
        <div
            className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%]  gap-5 h-screen">
            <BackButton/>
            <Link to={"/countries"}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                    Страны
                </button>
            </Link>

            <Link to={"/sport"}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                    Спорт
                </button>
            </Link>

            <Link to={"/travel"}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                    Путешествия
                </button>
            </Link>

            <Link to={"/cultures"}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                    Культура
                </button>
            </Link>

            <Link to={"/children"}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
                    Дети
                </button>
            </Link>

            
        </div>
    );
}
