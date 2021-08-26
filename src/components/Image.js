import {useEffect, useState} from 'react'
import './main/main.css'
import dayjs from 'dayjs'
import Calendar from 'react-calendar'
import './reactStyles.css';
import {BiHappyAlt, BiSad} from 'react-icons/bi'
import {MdSentimentNeutral} from 'react-icons/md'

const Image = ({totalMood, activeStyle}) => {
    // const [data,setData] = useState()

    // showColors(data) {
    //     (data!==undefined? 
    //         data.map((day)=>{
    //             console.log(day);
    //             return(<h1 className={styles[day[1]]}>{day[0]}</h1>)
    //         })
    //     : 
    //    console.log("data is empty")
    // }     

    // useEffect(()=>{
    //     setData(Object.entries(JSON.parse(localStorage.getItem('moodCalendar'))))
    //     console.log(data)
    // },[])
    // console.log(data)

    let styles = ['none','happy', 'sad', 'medium'];
    let icons = [0, <BiHappyAlt />, <MdSentimentNeutral />, <BiSad />]

    let none = []
    let happy = []
    let sad = []
    let medium = []

    console.log(totalMood + "mid file")

    // data.forEach(day => {
    //     switch(day[1]) {
    //         case 1:
    //             happy.push(day[0])
    //             break
    //         case 2:
    //             medium.push(day[0])
    //             break
    //         case 3:
    //             sad.push(day[0])
    //             break
    //         default:
    //             none.push(day[0])
    //     }
    // });

    const [value, onChange] = useState(new Date());

    return (
        <>
        <div className="flexboxtest">
         <Calendar 
                onChange={onChange}
                value={value}
                next2Label = ""
                prev2Label = ""
                minDetail = "year"

                tileDisabled={({date, view})=>{
                    return true;
                }}

                tileClassName={({date, view})=> {
                    let calenDay = dayjs(date).format("DD MMM")
                    console.log("reached this code")
                    if(totalMood[calenDay] !== undefined) {
                        console.log(totalMood[calenDay])
                        return styles[totalMood[calenDay]]
                    }
                    else {
                        return(styles[0])
                    }

                }}

                tileContent={({date, view}) => {
                    let calenDay = dayjs(date).format("DD MMM")
                    if(totalMood[calenDay] !== undefined) {
                        console.log(totalMood[calenDay])
                        return icons[totalMood[calenDay]]
                    }
                }}
            />
        </div>
        </>
    )
}


export default Image
