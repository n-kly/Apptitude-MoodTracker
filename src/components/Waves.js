import React, {useState} from 'react'
import { animate, motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Waves = () => {
  const randex = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  const quoteList = ['Write it on your heart that every day is the best day in the year.' , 'I get up every morning and it’s going to be a great day. You never know when it’s going to be over, so I refuse to have a bad day.', 'Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.', 'An early-morning walk is a blessing for the whole day.', 'I wake up every morning at nine and grab for the morning paper. Then I look at the obituary page. If my name is not on it, I get up.', 'Every morning, I wake up saying, ‘I’m still alive, a miracle.’ And so I keep on pushing.', 'If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.', 'When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.', 'Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.', 'Some people dream of success, while other people get up every morning and make it happen.'];

  const authorList = ['Ralph Waldo Emerson', 'Paul Henderson', 'Nanea Hoffman', 'Henry David Thoreau', 'Benjamin Franklin', 'Jim Carrey', 'Larry Page', 'Marcus Aurelius', 'Yoko Ono', 'Wayne Huizenga']

  const [yThing, setYThing] = useState()

  function scroll(){
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }


  return (
    <div className="wave-background">
      <div className="waves">
        <svg
          id="visual"
          viewBox="0 0 960 540"
          width="1960"
          height="1080"
        >

          <motion.path animate={{x: -100}} transition={{duration: 8, yoyo: Infinity}}
            d='M0 306L20 293.2C40 280.3 80 254.7 120 245C160 235.3 200 241.7 240 256.2C280 270.7 320 293.3 360 299.5C400 305.7 440 295.3 480 280.8C520 266.3 560 247.7 600 247C640 246.3 680 263.7 720 278.8C760 294 800 307 840 304.5C880 302 920 284 940 275L960 266L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z'
            fill="#2783cd"
          >
          </motion.path>
          
          <motion.path animate={{x: 100}} transition={{duration: 10, yoyo: Infinity}}
            d='M0 243L20 232.5C40 222 80 201 120 194.2C160 187.3 200 194.7 240 189.3C280 184 320 166 360 173.2C400 180.3 440 212.7 480 228.2C520 243.7 560 242.3 600 239.8C640 237.3 680 233.7 720 225.3C760 217 800 204 840 206.5C880 209 920 227 940 236L960 245L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z'
              fill="#2d99d9"
          >
          </motion.path>

          <motion.path animate={{x: -100}} transition={{duration: 11, yoyo: Infinity}}
            d='M0 162L20 157.8C40 153.7 80 145.3 120 139.5C160 133.7 200 130.3 240 138.5C280 146.7 320 166.3 360 181C400 195.7 440 205.3 480 202.7C520 200 560 185 600 181.7C640 178.3 680 186.7 720 187C760 187.3 800 179.7 840 182.2C880 184.7 920 197.3 940 203.7L960 210L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z'
            fill="#40aee4"
          ></motion.path>

          <motion.path animate={{x: 100}} transition={{duration: 9, yoyo: Infinity}}
            d='M0 126L20 130.5C40 135 80 144 120 137.2C160 130.3 200 107.7 240 109C280 110.3 320 135.7 360 139.3C400 143 440 125 480 116.5C520 108 560 109 600 101.8C640 94.7 680 79.3 720 74.8C760 70.3 800 76.7 840 86.8C880 97 920 111 940 118L960 125L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z'
           fill="#59c3ed"
          ></motion.path>

          <motion.path animate={{x: -100}} transition={{duration: 7, yoyo: Infinity}}
            d='M0 61L20 57C40 53 80 45 120 42.2C160 39.3 200 41.7 240 49.8C280 58 320 72 360 70.3C400 68.7 440 51.3 480 48.5C520 45.7 560 57.3 600 69C640 80.7 680 92.3 720 90.8C760 89.3 800 74.7 840 69.5C880 64.3 920 68.7 940 70.8L960 73L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z'
            fill="#76d8f5"
          ></motion.path>
        </svg>
        <p className="quotes">{quoteList[randex]}</p>
        <p className="quotes-1">{authorList[randex]}</p>
        <Link to="/tracker" className="initial-button">CLICK ME</Link>
      </div>
    </div>
      
  )
}

export default Waves
