import React from 'react'
import { motion } from "framer-motion"
import { infinity } from 'check-types'

const Waves = () => {

  // export const Wave = () => (
  //   <motion.div 
  //     animate={{ rotate: 360 }}
  //   />
  // )

  const variants1 = {
    transition: {
      yoyo: infinity
    }
  }

  let quoteList = ['Write it on your heart that every day is the best day in the year.', 'I get up every morning and it’s going to be a great day. You never know when it’s going to be over, so I refuse to have a bad day.', 'Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.', 'An early-morning walk is a blessing for the whole day.', 'I wake up every morning at nine and grab for the morning paper. Then I look at the obituary page. If my name is not on it, I get up.', 'Every morning, I wake up saying, ‘I’m still alive, a miracle.’ And so I keep on pushing.', 'If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.', 'When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.', 'Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.', 'Some people dream of success, while other people get up every morning and make it happen.'];
  let authorList = ['Ralph Waldo Emerson', 'Paul Henderson', 'Nanea Hoffman', 'Henry David Thoreau', 'Benjamin Franklin', 'Jim Carrey', 'Larry Page', 'Marcus Aurelius', 'Yoko Ono', 'Wayne Huizenga']

  return (
      <div>
        <svg
          id="visual"
          viewBox="0 0 960 540"
          width="1960"
          height="1080"
          // xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          // version="1.1"
        >
          {/* <rect x="0" y="0" width="960" height="540" fill="#001221"></rect> */}

          <motion.path animate={{x: 100}} variants={{variants1}}
            d="M0 206L11.5 199.2C23 192.3 46 178.7 68.8 183.2C91.7 187.7 114.3 210.3 137.2 215.7C160 221 183 209 205.8 205.3C228.7 201.7 251.3 206.3 274.2 202C297 197.7 320 184.3 342.8 180.8C365.7 177.3 388.3 183.7 411.2 184.2C434 184.7 457 179.3 480 179.5C503 179.7 526 185.3 548.8 192.3C571.7 199.3 594.3 207.7 617.2 214.7C640 221.7 663 227.3 685.8 223.7C708.7 220 731.3 207 754.2 204.8C777 202.7 800 211.3 822.8 208.8C845.7 206.3 868.3 192.7 891.2 187.7C914 182.7 937 186.3 948.5 188.2L960 190L960 0L948.5 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
            fill="#3300cc"
          >
          </motion.path>
          <motion.path animate={{x: -100}} transition={{duration: 3}}
            d="M0 166L11.5 163.2C23 160.3 46 154.7 68.8 154.5C91.7 154.3 114.3 159.7 137.2 156.2C160 152.7 183 140.3 205.8 138.8C228.7 137.3 251.3 146.7 274.2 147.3C297 148 320 140 342.8 144.7C365.7 149.3 388.3 166.7 411.2 175.2C434 183.7 457 183.3 480 181.8C503 180.3 526 177.7 548.8 177.2C571.7 176.7 594.3 178.3 617.2 176.5C640 174.7 663 169.3 685.8 165C708.7 160.7 731.3 157.3 754.2 161.8C777 166.3 800 178.7 822.8 174.8C845.7 171 868.3 151 891.2 141.8C914 132.7 937 134.3 948.5 135.2L960 136L960 0L948.5 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
            fill="#0058ed"
          >
          </motion.path>
          <path
            d="M0 107L11.5 105.2C23 103.3 46 99.7 68.8 106.2C91.7 112.7 114.3 129.3 137.2 134.3C160 139.3 183 132.7 205.8 130.3C228.7 128 251.3 130 274.2 126.2C297 122.3 320 112.7 342.8 112.8C365.7 113 388.3 123 411.2 129C434 135 457 137 480 134.8C503 132.7 526 126.3 548.8 119.8C571.7 113.3 594.3 106.7 617.2 109.8C640 113 663 126 685.8 134.2C708.7 142.3 731.3 145.7 754.2 140.3C777 135 800 121 822.8 120.3C845.7 119.7 868.3 132.3 891.2 136C914 139.7 937 134.3 948.5 131.7L960 129L960 0L948.5 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
            fill="#008bff"
          ></path>
          <motion.path animate={{x: 100}}
            d="M0 75L11.5 74C23 73 46 71 68.8 76.5C91.7 82 114.3 95 137.2 93.8C160 92.7 183 77.3 205.8 69.2C228.7 61 251.3 60 274.2 61.5C297 63 320 67 342.8 70C365.7 73 388.3 75 411.2 76.7C434 78.3 457 79.7 480 78.7C503 77.7 526 74.3 548.8 73C571.7 71.7 594.3 72.3 617.2 75C640 77.7 663 82.3 685.8 85.7C708.7 89 731.3 91 754.2 91.2C777 91.3 800 89.7 822.8 92.2C845.7 94.7 868.3 101.3 891.2 97.5C914 93.7 937 79.3 948.5 72.2L960 65L960 0L948.5 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
            fill="#1eb6ff"
          ></motion.path>
          <motion.path
            d="M0 48L11.5 47.5C23 47 46 46 68.8 42.7C91.7 39.3 114.3 33.7 137.2 31.3C160 29 183 30 205.8 33.8C228.7 37.7 251.3 44.3 274.2 44.5C297 44.7 320 38.3 342.8 36.3C365.7 34.3 388.3 36.7 411.2 36.2C434 35.7 457 32.3 480 31.8C503 31.3 526 33.7 548.8 34C571.7 34.3 594.3 32.7 617.2 32.2C640 31.7 663 32.3 685.8 33C708.7 33.7 731.3 34.3 754.2 38.5C777 42.7 800 50.3 822.8 50.8C845.7 51.3 868.3 44.7 891.2 42.8C914 41 937 44 948.5 45.5L960 47L960 0L948.5 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
            fill="#7fdbff"
          ></motion.path>
        </svg>
      </div>
  )
}

export default Waves
