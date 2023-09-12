import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Settings({settings, setSettings}) {
  const [isOn, setIsOn] = useState(true);
  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(true);
  const [isOn3, setIsOn3] = useState(true);
  const [isOn4, setIsOn4] = useState(true);

  const switchSettings = index => {
    setSettings(settings.map((setting, i) => {
      if(i === index) {
        setting.status = !setting.status
      }
      return setting
    }))
  }
  const toggleCountries = () => switchSettings(0)
  const toggleSports = () => switchSettings(1)
  const toggleTravel = () => switchSettings(2)
  const toggleCulture = () => switchSettings(3)
  const toggleChildren = () => switchSettings(4)


  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%]  gap-5 h-screen">
        <BackButton />
        <h1 className='text-center text-white text-4xl font-semibold mb-10'>Все локации</h1>
        <div className="flex gap-6 items-center">
          <Link to={"/countries"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Страны
            </button>
          </Link>
          <div className="switch" data-ison={settings[0].status} onClick={toggleCountries}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/sport"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Спорт
            </button>
          </Link>
          <div className="switch" data-ison={settings[1].status} onClick={toggleSports}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/travel"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Путешествия
            </button>
          </Link>
          <div className="switch" data-ison={settings[2].status} onClick={toggleTravel}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/cultures"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Культура
            </button>
          </Link>
          <div className="switch" data-ison={settings[3].status} onClick={toggleCulture}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/children"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 h-14 rounded-full grid-cols-1">
              Дети
            </button>
          </Link>
          <div className="switch" data-ison={settings[4].status} onClick={toggleChildren}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
      </div>
    </>
  );
}
