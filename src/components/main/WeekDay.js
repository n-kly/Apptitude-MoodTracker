import React, {useState} from 'react'

const WeekDay = ({status, setStatus, active, setActiveDay, position}) => {
    let day;
    switch (position)  {
        case 0: day="Mon"; break;
        case 1: day="Tue"; break;
        case 2: day="Wed"; break;
        case 3: day="Thu"; break;
        case 4: day="Fri"; break;
        case 5: day="Sat"; break;
        case 6: day="Sun"; break;
        default: day="WTF"; break;
    }

    let statusList = ['none','happy','medium','sad']

    let index = status[position]

    return (
        <div 
            className={active?'day active '+statusList[index] :'day '+statusList[index]} 
            onClick={
                ()=>{
                    if(active){
                        if(status[position]===(statusList.length-1)){
                            setStatus((status)=>{
                                status[position] = 0;  
                            })
                        } else{
                            setStatus((status)=>{
                                status[position]++;  
                            })
                        }
                        setActiveDay(position+1)
                    }
                }
            }
        >
            {day}
        </div>
    )
}

export default WeekDay
