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
    <div>
      <div>
      <div>
        <Waves />
      </div>
        <div>
          <h1 className="emoji"> Hi, how was your day? </h1>
        </div>
        <div className="dead-middle">
          <Day
            activeDate={activeDate}
            setActiveDate={setActiveDate}
            totalMood={totalMood}
            setTotalMood={setTotalMood}
            store={store}
            setStore={setStore}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
