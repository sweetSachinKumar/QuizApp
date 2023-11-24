import React, { useEffect, useRef, useState } from 'react'


const formatTime = (time)=> {
    let minutes = Math.floor(time/60)
    let seconds = Math.floor(time - minutes * 60)
    if(minutes < 10) minutes = "0" + minutes
    if(seconds < 10) seconds = "0" + seconds

    return minutes + ":" + seconds
}


const QuizTimer = ({seconds, onSubmit}) => {

    const [countdown, setCountdown] = useState(seconds)
const timerId = useRef()
const cntD = useRef()





useEffect(()=>{

    timerId.current = setInterval(()=> {
        setCountdown(prev => prev - 1)
    },1000)
    return ()=> clearInterval(timerId.current)
},[])

useEffect(()=> {
    if(countdown <=0 ) {
        onSubmit()
        clearInterval(timerId.current)}
    if(countdown <= 300 && countdown >0){
        cntD.current.style.color = "#dc2626"
        cntD.current.style.border = "3px solid #dc2626"

    }
    if(countdown < 600 && countdown >300){
        cntD.current.style.color = "rgb(161 98 7 / 0.9)"
        cntD.current.style.border = "2px solid rgb(161 98 7 / 0.9)"
    }
},[countdown])


  return (
    <div ref={cntD} className='text-[#7b1fa2] font-2xl border-2 rounded-lg border-[#7b1fa2] transition-all duration-300 px-6 py-0.5 '>
      {formatTime(countdown)}
    </div>
  )
}

export default QuizTimer
