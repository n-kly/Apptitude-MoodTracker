import { useState } from "react";
import StyleSelector from "./components/StyleSelector";
import { BrowserRouter as Router } from 'react-router-dom';
import Title from "./components/main/Title";
import WeekView from "./components/main/WeekView";

function App() {
  const [activeStyle,  setActiveStyle] = useState('turtle') // This is the active state, you need to pass it into any components you make 
  const [everything, setEverything] = useState([[[0,0,0,0,0,0,0]]])

  return (
    <Router>
      <StyleSelector setActiveStyle = {setActiveStyle} /> {/* The active state wont affect the style bar */}
      <div>
        <Title activeStyle={activeStyle}/>
        <WeekView activeStyle={activeStyle}/>
      </div>      
    </Router>
  );
}

export default App;
