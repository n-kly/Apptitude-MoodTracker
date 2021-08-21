import { useState, useEffect, useRef } from "react";
import Title from "./Title";
import Day from "./Day";
import dayjs from 'dayjs'

const MainPage = ({activeStyle}) => {
    const [activeDate, setActiveDate] = useState(dayjs(new Date()))
    const [totalMood, setTotalMood] = useState({})
    const [store, setStore] = useState(false)
    const mounted = useRef(false);

    useEffect(()=>{
        if(localStorage.getItem('moodCalendar') !== null){
        console.log("Load")
        setTotalMood(JSON.parse(localStorage.getItem('moodCalendar')))
        }
        if(localStorage.getItem('date') !== null){
        console.log("Load")
        setActiveDate(dayjs(JSON.parse(localStorage.getItem('date'))))
        }
    }, []) 
        
    useEffect(()=>{
        if(mounted.current !== false){
        localStorage.setItem('moodCalendar', JSON.stringify(totalMood))
        localStorage.setItem('date', JSON.stringify(activeDate))
        } else{
        mounted.current = true;
        }
    },[store])
    console.log(activeStyle)

    return (
        <div>
            <div>
                <Title activeStyle={activeStyle}/>
                <Day activeDate={activeDate} setActiveDate={setActiveDate} totalMood={totalMood} setTotalMood={setTotalMood} store={store} setStore={setStore}/>
            </div>
        </div>
    )
}

export default MainPage
