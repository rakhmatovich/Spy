import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Settings() {
  const [isOn, setIsOn] = useState(true);
  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(true);
  const [isOn3, setIsOn3] = useState(true);
  const [isOn4, setIsOn4] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn)
    console.log(localStorage.getItem("settings"))
    // localStorage.setItem("categories", [...localStorage.getItem("settings"), {name: "country", status: !isOn}])
  }
  const toggleSwitch1 = () => setIsOn1(!isOn1);
  const toggleSwitch2 = () => setIsOn2(!isOn2);
  const toggleSwitch3 = () => setIsOn3(!isOn3);
  const toggleSwitch4 = () => setIsOn4(!isOn4);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%]  gap-5 h-screen">
        <BackButton />
        <div className="flex gap-6 items-center">
          <Link to={"/countries"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Страны
            </button>
          </Link>
          <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/sport"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Спорт
            </button>
          </Link>
          <div className="switch" data-ison={isOn1} onClick={toggleSwitch1}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/travel"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Путешествия
            </button>
          </Link>
          <div className="switch" data-ison={isOn2} onClick={toggleSwitch2}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/cultures"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Культура
            </button>
          </Link>
          <div className="switch" data-ison={isOn3} onClick={toggleSwitch3}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/children"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Дети
            </button>
          </Link>
          <div className="switch" data-ison={isOn4} onClick={toggleSwitch4}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
      </div>
    </>
  );
}
