import React, {useState} from 'react'
import WeekDay from './WeekDay'

const WeekView = () => {
    const [activeDay, setActiveDay] = useState(0);
    const [status, setStatus] = useState({'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0})

    return (
        <div className='week-box'> 
            <WeekDay 
                position={0} 
                active={(activeDay === 0 || activeDay === 1) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

            <WeekDay 
                position={1} 
                active={(activeDay === 1 || activeDay === 2) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

            <WeekDay 
                position={2} 
                active={(activeDay === 2 || activeDay === 3) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

            <WeekDay 
                position={3} 
                active={(activeDay === 3 || activeDay === 4) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

            <WeekDay 
                position={4} 
                active={(activeDay === 4 || activeDay === 5) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

            <WeekDay 
                position={5} 
                active={(activeDay === 5 || activeDay === 6) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

            <WeekDay 
                position={6} 
                active={(activeDay === 6 || activeDay === 7) ? true : false} 
                setActiveDay={setActiveDay} 
                status={status} 
                setStatus={setStatus}/>

        </div>
    )
}

export default WeekView
