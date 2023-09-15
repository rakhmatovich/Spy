import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useNavigate } from 'react-router-dom'

function Timer({ seconds = 60 }) {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/results')
  }, (seconds + 1) * 1000)

  return (
    <div className='h-screen bg-gradient-to-br from-gray-900 to-cyan-700 flex items-center justify-center'>
      <div className='w-[100%] flex items-center justify-center h-[100vh] text-4xl text-cyan-500 gradient-to- from-gray-900 to-cyan-700'>
        <CountdownCircleTimer
          isPlaying
          duration={seconds}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[seconds, seconds / 2, seconds / 100 * 25, 0]}
        >
          {({ remainingTime }) => "0" + Math.floor(remainingTime / 60) + ":" + ((remainingTime % 60 >= 1 && remainingTime % 60 <= 9)
            ? "0" + (remainingTime % 60) :
            (remainingTime % 60) === 0 ? "00" : (remainingTime % 60))}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default Timer