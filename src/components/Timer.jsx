// import React, { useState, useEffect } from 'react'

// export default function Timer() {
//     const min = 0
//     const sec = 10
//     const [over, setOver] = useState(false);
//     const [[m, s], setTime] = useState([min, sec]);

//     const tick = () => {
//         if (over) return;
//         if (m === 0 && s === 0) {
//             setOver(true);
//         } else if (s == 0) {
//             setTime([m - 1, 59]);
//         } else {
//             setTime([m, s - 1]);
//         }
//     }

//     useEffect(() => {
//         const timerID = setInterval(() => tick(), 1000);
//         return () => clearInterval(timerID);
//     })

//     return (
//         <div className='bg-cyan-500'>
//           <p className='text-center text-white text-4xl m-80'>
//             {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
//           </p>
//         </div>
//     )

// }


import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer({seconds=60}) {
  return (
    <div className='h-screen bg-gradient-to-br from-gray-900 to-cyan-700 flex items-center justify-center'>
    <div className='w-[100%] flex items-center justify-center h-[100vh] text-6xl text-cyan-500'>
    <CountdownCircleTimer
    isPlaying
    duration={seconds}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[seconds, seconds/2, seconds/100*20, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div>
  </div>
  )
}

export default Timer