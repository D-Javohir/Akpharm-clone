import { useCountdownTimer } from 'use-countdown-timer';




const TimeDown = () => {

  
    const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
        timer: 1000 * 130,
    });
    return (<>
        <div>{parseInt( countdown/(1000*60) )}:{parseInt( countdown%(1000*60) )/1000}</div>
        <button onClick={reset}>Reset</button>
        {isRunning ? (
            <button onClick={pause}>Pause</button>
        ) : (
            <button onClick={start}>Start</button>
        )}
    </>);
}
export default TimeDown;