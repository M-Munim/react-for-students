import React from 'react'
import { useEffect, useState } from 'react'

const UseE = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        alert("Component Loaded!");
    }, []);


    return (
        <div>
            <p>Timer: {time} sec</p>
        </div>
    )
}

export default UseE