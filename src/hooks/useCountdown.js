import { useCountdown } from 'react-countdown-circle-timer'

const {
  path,
  pathLength,
  stroke,
  strokeDashoffset,
  remainingTime,
  elapsedTime,
  size,
  strokeWidth,
} = useCountdown({ isPlaying: true, duration: 20, colors: '#abc' })