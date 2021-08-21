import { useState} from "react";
import StyleSelector from "./components/StyleSelector";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./components/main/MainPage";
import Image from "./components/Image";

function App() {
  const [activeStyle,  setActiveStyle] = useState('turtle') // This is the active state, you need to pass it into any components you make 

  return (
    <Router>
      <StyleSelector setActiveStyle = {setActiveStyle} /> {/* The active state wont affect the style bar */}
      <Switch>
        <Route path='/tracker' exact render={(props)=> (<MainPage {...props} activeStyle={activeStyle}/>)}/>
        <Route path='/my-calendar' exact component={Image}/>
      </Switch>
    </Router>
  );
}

export default App;
