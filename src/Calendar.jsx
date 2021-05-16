// import React and DatePicker
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './Calendar.css';
// import required css from library
import "react-datepicker/dist/react-datepicker.css";




function Calendar () {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };
  return (
  <div className="wrapper">
            <div className="calendar__trigger">
              <p className="title__trigger">Choose your delivery day <span className="span__trigger">Delivery is always free</span></p>
              <div className="button__trigger"></div>
              <div className="selected__date__display">
                <p>
                {date.toString().substr(0,10)}
                </p>
              </div> 
              <div className="datepicker">
              <DatePicker 
                selected={date}
                placeHolder="Enter Date"
                formatWeekDay={nameOfDay => nameOfDay.substr(0,1)}
                minDate= {new Date()}
                dateFormat='dd/MM/yyyy'
                onChange={onChange}
                //FILTER AVALIABLE DELIVERY DATES
                filterDate = {date => date.getDay() !== 2 && date.getDay() !==5 && date.getDay() !== 6}
              />
              </div>


                <p className="trigger_early">
                    <span className="van__svg">
                    <svg  width="26" height="19" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M6.678 10.344l-2.6-2.615a.404.404 0 010-.57l.566-.568a.398.398 0 01.566 0L6.96 8.352l3.752-3.773a.398.398 0 01.565 0l.566.57a.404.404 0 010 .568l-4.6 4.627a.398.398 0 01-.566 0z" fill="#50B83C"/><path d="M24.688 13.933h-.938V9.654c0-.665-.266-1.318-.734-1.789l-3.278-3.32a2.472 2.472 0 00-1.765-.745H16.25V1.845C16.25.827 15.383 0 14.32 0H1.93C.867 0 0 .827 0 1.845v11.51C0 14.373.867 15.2 1.93 15.2h.633a3.081 3.081 0 00-.063.633C2.5 17.583 3.898 19 5.625 19s3.125-1.417 3.125-3.167c0-.217-.023-.427-.063-.633h7.626a3.081 3.081 0 00-.063.633c0 1.75 1.398 3.167 3.125 3.167s3.125-1.417 3.125-3.167c0-.217-.023-.427-.063-.633h2.25a.316.316 0 00.313-.317v-.633a.316.316 0 00-.313-.317zm-6.715-8.866c.328 0 .652.134.882.372l3.278 3.32c.031.032.043.076.07.112H16.25v-3.8h1.723v-.004zM5.625 17.733c-1.035 0-1.875-.85-1.875-1.9 0-1.049.84-1.9 1.875-1.9 1.035 0 1.875.851 1.875 1.9 0 1.05-.84 1.9-1.875 1.9zm2.484-3.8a3.101 3.101 0 00-2.484-1.266 3.101 3.101 0 00-2.484 1.266H1.93c-.375 0-.68-.257-.68-.578V1.845c0-.321.305-.578.68-.578h12.39c.375 0 .68.257.68.578v12.088H8.11zm11.266 3.8c-1.035 0-1.875-.85-1.875-1.9 0-1.049.84-1.9 1.875-1.9 1.035 0 1.875.851 1.875 1.9 0 1.05-.84 1.9-1.875 1.9zm0-5.066c-1.02 0-1.914.502-2.484 1.266h-.641v-3.8h6.25v3.8h-.64c-.57-.764-1.465-1.266-2.485-1.266z" fill="#1D6C93"/></g></svg>
                    </span>
                    <span className="earliest">Earliest delivery</span>
                </p>

                <div className="trigger__right">
                  <div className="svg__right__svg">
                    <svg width="30" height="34" xmlns="http://www.w3.org/2000/svg"><path d="M26.786 4.25H23.57V.797A.8.8 0 0022.768 0h-.536a.8.8 0 00-.803.797V4.25H8.57V.797A.8.8 0 007.768 0h-.536a.8.8 0 00-.803.797V4.25H3.214C1.44 4.25 0 5.677 0 7.438v23.375C0 32.572 1.44 34 3.214 34h23.572C28.56 34 30 32.573 30 30.812V7.438c0-1.76-1.44-3.187-3.214-3.187zM3.214 6.375h23.572c.59 0 1.071.477 1.071 1.063v3.187H2.143V7.437c0-.585.48-1.062 1.071-1.062zm23.572 25.5H3.214c-.59 0-1.071-.477-1.071-1.063V12.75h25.714v18.063c0 .585-.48 1.062-1.071 1.062z" fill="#1D6C93" fill-rule="nonzero"/></svg>
                    <p className="svg__right__text"><a href="">Change ></a><span className="day__num">{date.toString().substr(8,2)}</span></p>
                  </div>
                </div>
              </div>

              <div className="button__container">
                <button type="submit">Continue</button>
              </div>
    </div>
  );
}
export default Calendar
