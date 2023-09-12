import React from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <>
    
    <div className="flex  flex-col gap-7 w-full items-center justify-center">
      <Link to="/game">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
          Новая игра
        </button>
      </Link>
      <Link to={"/settings"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full  grid-cols-1">
          Настройки
        </button>
      </Link>
      <Link to={"/reference"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
          Справка
        </button>
      </Link>

      


    </div>
    </>
  );
}
