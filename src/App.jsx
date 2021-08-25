import { useState, useEffect} from "react";
import StyleSelector from "./components/StyleSelector";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./components/main/MainPage";
import Image from "./components/Image";
import dayjs from "dayjs";

function App() {
  const [activeStyle,  setActiveStyle] = useState('turtle') // This is the active state, you need to pass it into any components you make 
  const [activeDate, setActiveDate] = useState(dayjs(new Date()))
  const [totalMood, setTotalMood] = useState({})

  console.log(totalMood + "in app.jsx")

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


  return (
    <Router>
      <StyleSelector setActiveStyle = {setActiveStyle} /> {/* The active state wont affect the style bar */}
      <Switch>
        <Route path='/tracker' exact render={(props)=> (<MainPage {...props} 
          activeStyle={activeStyle} 
          totalMood={totalMood} 
          setTotalMood={setTotalMood}
          activeDate={activeDate}
          setActiveDate={setActiveDate}/>)}/>
        <Route path='/my-calendar' exact render={(props)=> (<Image {...props} 
          activeStyle={activeStyle} 
          totalMood={totalMood}
          activeDate={activeDate}
          setActiveDate={setActiveDate} />)}/>
      </Switch>
    </Router>
  );
}

export default App;
