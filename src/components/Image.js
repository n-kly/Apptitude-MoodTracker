import {useEffect, useState} from 'react'
import './main/main.css'

const Image = () => {
    const [data,setData] = useState()
    
    useEffect(()=>{
        setData(Object.entries(JSON.parse(localStorage.getItem('moodCalendar'))))
        console.log(data)
    },[])
    console.log(data)

    let styles = ['none','happy', 'sad', 'medium'];

    return (
        <div>
        d
            {
                (data!==undefined?
                    data.map((day)=>{
                        console.log(day);
                        return(
                            <h1 className={styles[day[1]]}>{day[0]}</h1>
                        )
                    })

                    :
                        "Loading")
            }
        </div>
    )
}

export default Image
