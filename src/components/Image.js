import {useEffect, useState} from 'react'
import { BiTable } from 'react-icons/bi'
import './main/main.css'
import dayjs from 'dayjs'

const Image = () => {
    const [data,setData] = useState()

    // showColors(data) {
    //     (data!==undefined? 
    //         data.map((day)=>{
    //             console.log(day);
    //             return(<h1 className={styles[day[1]]}>{day[0]}</h1>)
    //         })
    //     : 
    //    console.log("data is empty")
    // }     

    useEffect(()=>{
        setData(Object.entries(JSON.parse(localStorage.getItem('moodCalendar'))))
        console.log(data)
    },[])
    console.log(data)

    let styles = ['none','happy', 'sad', 'medium'];

    return (
        <div className="flexboxtest">
        {
            (data!==undefined?
                data.map((day)=>{
                    console.log(day);
                    return(
                        <div className={'flex-day '+styles[day[1]]}>{date}</div>
                    )
                })

                :
                    "Loading")
            }
        </div>
    )
}


export default Image
