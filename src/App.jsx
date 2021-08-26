import { useState, useEffect } from 'react';
import StyleSelector from './components/StyleSelector';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './components/main/MainPage';
import Image from './components/Image';
import dayjs from 'dayjs';

function App() {
    const [activeDate, setActiveDate] = useState(dayjs(new Date()));
    const [totalMood, setTotalMood] = useState({});

    useEffect(() => {
        if (localStorage.getItem('moodCalendar') !== null) {
            console.log('Load');
            setTotalMood(JSON.parse(localStorage.getItem('moodCalendar')));
        }
        if (localStorage.getItem('date') !== null) {
            console.log('Load');
            setActiveDate(dayjs(JSON.parse(localStorage.getItem('date'))));
        }
    }, []);

    return (
        <Router>
            <StyleSelector/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/tracker" />
                </Route>

                <Route
                    path='/tracker'
                    exact
                    render={(props) => (
                        <MainPage
                            {...props}
                            totalMood={totalMood}
                            setTotalMood={setTotalMood}
                            activeDate={activeDate}
                            setActiveDate={setActiveDate}
                        />
                    )}
                />
                
                <Route
                    path='/my-calendar'
                    exact
                    render={(props) => (
                        <Image
                            {...props}
                            totalMood={totalMood}
                            activeDate={activeDate}
                            setActiveDate={setActiveDate}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
