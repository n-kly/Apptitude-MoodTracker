import { useState, useEffect, useRef } from "react";
import StyleSelector from "./components/StyleSelector";
import { BrowserRouter as Router } from 'react-router-dom';
import Title from "./components/main/Title";
import Day from "./components/main/Day";
import dayjs from 'dayjs'

function App() {
  const [activeStyle,  setActiveStyle] = useState('turtle') // This is the active state, you need to pass it into any components you make 
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

  return (
    <Router>
      <StyleSelector setActiveStyle = {setActiveStyle} /> {/* The active state wont affect the style bar */}
      <div>
        <Title activeStyle={activeStyle}/>
        <Day activeDate={activeDate} setActiveDate={setActiveDate} totalMood={totalMood} setTotalMood={setTotalMood} store={store} setStore={setStore}/>
      </div>      
    </Router>
  );
}

export default App;
