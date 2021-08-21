import {useEffect, useState} from 'react'

const Image = () => {
    const [data,setData] = useState()
    
    useEffect(()=>{
        setData(Object.entries(JSON.parse(localStorage.getItem('moodCalendar'))))
        console.log(data)
    },[])
  
    return (
        <div>
        d
            {
                (data!==undefined?
                    data.map((day)=>{
                        console.log(day);
                        return(
                            <h1>{day[0]}</h1>
                        
                        )
                    })

                    :
                        "Loading")
            }
        </div>
    )
}

export default Image
