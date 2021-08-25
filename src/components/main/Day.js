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
            <div class="wrapper">
                <div className='date'>
                    {activeDate.format('dddd, MMMM D')}
                </div>

                <div 
                className={'day '+statusList[status] + (saved?' saved':'') + (status === 0?' defaultDay':'')} 
                onClick={()=>
                    {
                        if(status===(statusList.length-1)){
                            setStatus(1)
                        } else{
                            setStatus(status+1)
                        }                  
                    }
                }
                >
                    <div className="clue">Press to Change</div>
                    <div className="smiley">{showFace(status)}</div>
                </div>
            </div>
            <section className="buttons">
                <button 
                    className='button-center'
                    onClick={()=>{
                        if(totalMood[activeDate.subtract(1, 'day').format("DD MMM")] !== undefined){
                            setStatus(totalMood[activeDate.subtract(1, 'day').format("DD MMM")])
                            setSaved(true)
                        } else{
                            setStatus(0)
                            setSaved(false)
                        }
                        setTotalMood({...totalMood, [activeDate.format("DD MMM")]:status})
                        setStore(!store)
                        setActiveDate(activeDate.subtract(1,'day'))
                    }}
                >Prev</button>

                    <button 
                        className='button-center'
                        onClick={()=>{
                            if(totalMood[activeDate.add(1, 'day').format("DD MMM")] !== undefined){
                                setStatus(totalMood[activeDate.add(1, 'day').format("DD MMM")])
                                setSaved(true)
                            } else{
                                setStatus(0)
                                setSaved(false)
                            }
                            setTotalMood({...totalMood, [activeDate.format("DD MMM")]:status})
                            setStore(!store)
                            setActiveDate(activeDate.add(1,'day'))
                        }}
                    >Next</button>
            </section>
            
        </>
    )
}

export default Day
