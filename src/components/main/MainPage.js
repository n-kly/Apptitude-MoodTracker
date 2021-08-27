import { useState, useEffect, useRef } from "react";
import Day from "./Day";
import Waves from './Waves.js'

const MainPage = ({ totalMood, setTotalMood, activeDate, setActiveDate }) => {
  const [store, setStore] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current !== false) {
      localStorage.setItem("moodCalendar", JSON.stringify(totalMood));
      localStorage.setItem("date", JSON.stringify(activeDate));
    } else {
      mounted.current = true;
    }
    // eslint-disable-next-line
  }, [store]);

  return (
      <div className="full" id="full">        
        <div className="dead-middle" id="dead-middle">
          <div>
            <h1 className="emoji"> Hi, how was your day? </h1>
          </div>
          <Day
            activeDate={activeDate}
            setActiveDate={setActiveDate}
            totalMood={totalMood}
            setTotalMood={setTotalMood}
            store={store}
            setStore={setStore}
          />
        </div>
        <div className="wave-background">
          <Waves />
        </div>
      </div>
  );
};

export default MainPage;
