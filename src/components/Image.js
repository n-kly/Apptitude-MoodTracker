import { useState } from 'react';
import './main/main.css';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import './reactStyles.css';
import { BiHappyAlt, BiSad } from 'react-icons/bi';
import { MdSentimentNeutral } from 'react-icons/md';

const Image = ({ totalMood }) => {
    let styles = ['none', 'happy', 'medium', 'sad'];
    let icons = ["", <BiHappyAlt />, <MdSentimentNeutral />, <BiSad />];

    const [value, onChange] = useState(new Date());

    return (
        <>
            <h1 className="calendarTitle">Mood Calendar</h1>
            <div className='flexboxtest'>
                <Calendar
                    onChange={onChange}
                    value={value}
                    next2Label=''
                    prev2Label=''
                    minDetail='day'
                    tileDisabled={({ date, view }) => {
                        return true;
                    }}
                    tileClassName={({ date, view }) => {
                        let calenDay = dayjs(date).format('DD MMM');
                        console.log('reached this code');
                        if (totalMood[calenDay] !== undefined) {
                            console.log(totalMood[calenDay]);
                            return styles[totalMood[calenDay]];
                        } else {
                            return styles[0];
                        }
                    }}
                    // tileContent={({ date, view }) => {
                    //     let calenDay = dayjs(date).format('DD MMM');
                    //     if (totalMood[calenDay] !== undefined) {
                    //         console.log(totalMood[calenDay]);
                    //         return icons[totalMood[calenDay]];
                    //     }
                    // }}
                    showNeighboringMonth={false}
                />
            </div>
        </>
    );
};

export default Image;
