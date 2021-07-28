import React, { useEffect, useRef, useState } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(Date.now())

  // This will be recreated on each render of the component thus losing our value
  // var intervalId;
  const intervalId = useRef()
  const elBtn = useRef()

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(Date.now())
    }, 900)

    return () => {
      clearInterval(intervalId.current)
    }
  }, [])
  const onStopClock = () => {
    console.log(elBtn);
    clearInterval(intervalId.current)
  }
  return (
    <div>
      {new Date(time).toTimeString()}
      <button ref={elBtn} onClick={onStopClock}>Stop Clock</button>
    </div>
  )
}

