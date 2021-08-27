import { useState, useEffect, useRef } from "react";
import Day from "./Day";
import Waves from '../Waves.js'

const MainPage = ({ totalMood, setTotalMood, activeDate, setActiveDate }) => {
  const [store, setStore] = useState(false);
  const mounted = useRef(false);

  const randex = Math.floor((Math.random() * (10)));

  const quoteList = ['Write it on your heart that every day is the best day in the year.' , 'I get up every morning and it’s going to be a great day. You never know when it’s going to be over, so I refuse to have a bad day.', 'Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.', 'An early-morning walk is a blessing for the whole day.', 'I wake up every morning at nine and grab for the morning paper. Then I look at the obituary page. If my name is not on it, I get up.', 'Every morning, I wake up saying, ‘I’m still alive, a miracle.’ And so I keep on pushing.', 'If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.', 'When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.', 'Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.', 'Some people dream of success, while other people get up every morning and make it happen.'];
  const authorList = ['Ralph Waldo Emerson', 'Paul Henderson', 'Nanea Hoffman', 'Henry David Thoreau', 'Benjamin Franklin', 'Jim Carrey', 'Larry Page', 'Marcus Aurelius', 'Yoko Ono', 'Wayne Huizenga']

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
        <p className="quotes">{quoteList[randex]}</p>
        <p className="quotes">{authorList[randex]}</p>
        {console.log(randex)}
      </div>
  );
};

export default MainPage;
