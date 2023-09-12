import React, { useState, useEffect } from 'react'

export default function Timer() {
    const min = 0
    const sec = 10
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([min, sec]);

    const tick = () => {
        if (over) return;
        if (m === 0 && s === 0) {
            setOver(true);
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    })

    return (
        <div className='bg-cyan-500'>
          <p className='text-center text-white text-4xl m-80'>
            {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
          </p>
        </div>
    )

}
