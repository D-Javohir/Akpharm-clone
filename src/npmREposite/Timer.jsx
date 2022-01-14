import MomentComp from "./Moment";
import PhoneInput from "../Akpharm/PhoneInput";
import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import Colorvalues from "./color/Colorvalues";
import TimeDown from "../Akpharm/TimeDown";
import TinyEditorComponent from "./Mathresul/WordClone"

import WordSave from "./Mathresul/WordSave";
// import { useCountdownTimer } from 'use-countdown-timer';
function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });





  return (<>




    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  </>);
}

const Timer = () => {
  const [value, setValue] = useState('');
  // const [text, setText]=useState('')
  const [show, setShow] = useState(1);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  return (<>
    <div className="w-50 mx-auto bg-warning jumbotron text-center text-uppercase font-weight-bold">
      <div className="jumbotron">
        <MyStopwatch expiryTimestamp={time} />
      </div>
      <div className="jumbotron bg-secondary border-dark">
        <MomentComp></MomentComp>
      </div>
      <div className="jumbotron">
        <PhoneInput inputClass="myinputClass "></PhoneInput>

      </div>

      <div>
        <Colorvalues />

      </div>
      <TimeDown />


    </div>
    <div>
      <button onClick={() => setShow(1)}>och</button>
      <button onClick={() => setShow(0)}>yop</button>
      {show ?
        <TinyEditorComponent setText={v => setValue(v)} value={value} />
        : <div></div>}
    </div>

    <div>
      <WordSave text={value}/>
    </div>

  </>
  );
}
export default Timer;