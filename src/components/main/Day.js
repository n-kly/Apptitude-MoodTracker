import React, {useState} from 'react'
import dayjs from 'dayjs'
import DayOfYear from 'dayjs/plugin/dayOfYear'
import {BiHappyAlt, BiSad} from 'react-icons/bi'
import {MdSentimentNeutral} from 'react-icons/md'

dayjs.extend(DayOfYear);

const Day = ({ activeDate, setActiveDate, totalMood, setTotalMood, store, setStore}) => {
    let statusList = ['none','happy','medium','sad']
    const [status, setStatus] = useState(0)
    const [saved, setSaved] = useState(false)
    let day = activeDate.dayOfYear()

    function showFace(status) {
        switch (status) {
            case 1:
                return(<BiHappyAlt className = "smiley"/>)
            case 2:
                return(<MdSentimentNeutral className = "smiley"/>)
            case 3:
                return(<BiSad className = "smiley"/>)
            default:
                break;
        }
    }
    
    return (
        <>
            <div className='date'>
                {activeDate.format('dddd, MMMM D')}
            </div>
            <div className="week-box">
                <div 
                className={'day '+statusList[status] + ' '+ (saved?'saved':'')} 
                onClick={()=>
                    {
                        if(status===(statusList.length-1)){
                            setStatus(1)
                        } else{
                            setStatus(status+1)
                        }                  
                    }
                }
                ><div className="smiley">{showFace(status)}</div>
                </div>
            </div>
            <section className="buttons">
                <button 
                    className='button-center' 
                    onClick={()=>{
                        setTotalMood({...totalMood, [activeDate.dayOfYear()]:status})
                        setActiveDate(activeDate.add(1,'day'))
                        setStatus(0)
                        setSaved(0)
                        setStore(!store)
                    }}
                >Submit mood</button> {/* ive had it with this project, ive spent too long fix this button yourself probably bootstrap it please*/}
                
                <button 
                    className='button-center'
                    onClick={()=>{
                        if(totalMood[day+1] !== undefined){
                            setStatus(totalMood[day+1])
                            setSaved(true)
                        } else{
                            setStatus(0)
                            setSaved(false)
                        }
                        setActiveDate(activeDate.add(1,'day'))
                    }}
                >Next</button>

                <button 
                    className='button-center'
                    onClick={()=>{
                        if(totalMood[day-1] !== undefined){
                            setStatus(totalMood[day-1])
                            setSaved(true)
                        } else{
                            setStatus(0)
                            setSaved(false)
                        }
                        setActiveDate(activeDate.subtract(1,'day'))
                    }}
                >Prev</button>
            </section>
            
        </>
    )
}

export default Day
