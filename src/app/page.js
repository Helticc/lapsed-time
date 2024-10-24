"use client"

import { useEffect, useState } from "react";

export default function Page() {

  const [time, setTime] = useState(0);

  // const time = new Date(second * 1000).toLocaleTimeString([], {minute: '2-digit', second: '2-digit'});

  const sec = time % 60;
  const minute = Math.floor(time / 60);
  const formatTime = (time) => {
    if (time < 9) return `0${time}`;
    return time;
  }
  
  const addMinute = () => {
    setTime((prev) => prev + 60);
  }

  useEffect(() => {
    const addedSecond = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(addedSecond);
  },[]);

  return (
    <div>
      Time lapsed: {formatTime(minute)}:{formatTime(sec)}
      <button onClick={(addMinute)}>add a minute</button>
    </div>
  )
}


