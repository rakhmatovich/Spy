import React from 'react'
import BackButton from "../components/BackButton.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText.jsx";

export default function Reference() {



    const container = {
        visible: {
          transition: {
            staggerChildren: 0.025
          }
        }
      };
    return (
        <div className='flex relative pb-20 flex-col items-center bg-gradient-to-br from-gray-900 to-cyan-700 w-[100%]'>
            <BackButton />

            <motion.div
                className="App"
                initial="hidden"
                animate="visible"
                // animate={replay ? "visible" : "hidden"}
                variants={container}
            >
            </motion.div>

            <h1 className='text-gray-300 my-8 text-center text-3xl md:text-5xl font-bold'>
                Об игре
            </h1>
            <p className='text-cyan-400  y-5 mg:text-2xl w-[90%] min-w-[300px] text-justify font-bold text-lg'>
                В настольной игре «Находка для шпиона» вы сможете побывать как в шкуре шпиона некоего правительства, так
                и идущего по его следу спецагента — контршпиона. Данная игра относится к жанру салонной игры, то есть
                напоминает известную «Мафию», но не требует отдельного игрока под роль ведущего, играть будут все!
                Ограничение по времени, множество локаций, которые нужно вычислить шпиону, и общий накал страстей по
                ходу игры — гарантируют вам невероятно увлекательное времяпровождение!
            </p>

            <h1 className='text-gray-300 my-8 text-center text-3xl md:text-5xl font-bold'>
                Как играть
            </h1>
            <p className='text-cyan-400  my-5 text-lg mg:text-2xl w-[90%] min-w-[300px] text-justify font-bold'>
                Как упоминалось выше, игра проходит в режиме разговора. Один из игроков тайно становится шпионом и его
                задача — узнать, где же он находится. Другие игроки знают локацию, но не знают, кто же шпион — это им
                предстоит вычислить. Как? Задавая друг другу вопросы, конечно! Танцуя таким образом вокруг да около,
                игроки нащупывают почву, стараются понять, кто из игроков шпион и начинают подозревать игроков. Здесь
                шпиону потребуется импровизировать, вдруг кто-то задаст вопрос ему? Или он сам решит повыспрашивать,
                чтобы отвести от себя подозрения? Шпиону необходимо во время всех разговоров понять, где он находится и
                сделать об этом заявление до того, как его раскусят!
            </p>
            <h1 className='text-gray-300 my-8 text-center text-3xl md:text-5xl font-bold'>
                Кто победил?
            </h1>
            <p className='text-cyan-400  my-5 text-lg mg:text-2xl w-[90%] min-w-[300px] text-justify font-bold '>
                По истечению таймера все игроки должны единогласно проголосовать за шпиона, тем самым вычислив его и
                победив в партии. Если игроки ошибаются, побеждает шпион.
                любой игрок (даже сам шпион) один раз за партию может начать голосование за любую кандидатуру и если все
                единогласное голосуют за одного игрока, то партия заканчивается в ту или иную пользу
                шпион может остановить игру и назвать текущую локацию — если угадал, то победа за ним.
            </p>
            <h1 className='text-gray-300 my-8 text-center text-3xl md:text-5xl font-bold'>
                Суть игры
            </h1>
            <p className='text-cyan-400 my-5 text-lg mg:text-2xl w-[90%] min-w-[300px] text-justify font-bold'>
                Найти шпиона. Как играть – каждому игроку, кроме шпиона, дается общая локация. Шпион должен догадаться,
                где он находится, игроки – кто шпион. Для этого все по очереди задают вопросы друг другу, на которые
                приложением отводится 5 минут (время, как и количество шпионов, можно менять).
            </p>
            <Footer />
        </div>
    )
}
