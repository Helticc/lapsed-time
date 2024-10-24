'use client'
import { useEffect, useState } from "react"

export default function Page() {

    const [time, setTime] = useState(0)

    const addMinute = () => {
        setTime((prev) => prev + 60);
    }

    const sec = time % 60;
    const minute = Math.floor(time / 60);
    const formatTime = (time) => {
        if (time < 9) return `0${time}`;
        return time;
    }

    useEffect(() => {
        const second = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)
    
        return () => clearInterval(second)

    }, [])

    return (
        <div>
            <div>Time left: {formatTime(minute)}:{formatTime(sec)}</div>
            <button onClick={(addMinute)}>add a minute</button>
        </div>
    )
}