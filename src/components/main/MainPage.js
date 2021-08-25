import { useState, useEffect, useRef } from "react";
import Title from "./Title";
import Day from "./Day";
import dayjs from 'dayjs'

const MainPage = ({activeStyle, totalMood, setTotalMood, activeDate, setActiveDate}) => {
    const [store, setStore] = useState(false)
    const mounted = useRef(false);

    
        
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
