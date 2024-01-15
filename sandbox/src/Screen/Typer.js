import { useState, useEffect } from 'react';

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit odio a nisi venenatis finibus.`;

function Typer(props){
    
    const [started, setStarted] = useState(false);
    const[text, setText] = useState("");
    const [timer, setTimer] = useState(0);
    const [finalTime, setFinalTime] = useState(0);

  function startTimer() {
    if(started) {
        setInterval(incrementTimer, 1000);
    }
  }

    function incrementTimer() {
        setTimer(currentTimer => currentTimer + 1);
    }

    function didWin(){
        if(text == LOREM_IPSUM){
          setFinalTime(timer);
        }
      }

    useEffect(startTimer, [started]);
    useEffect(didWin, [text])

    if(finalTime){
        return <h1>{finalTime} secondes !</h1>
    }

  return (
    <div className="m-5 d-flex">
        <div className="p-2 flex-grow-1 border">
        {LOREM_IPSUM}
        </div>
        <div className="p-2 flex-grow-1">
            {started ? (
                <textarea
                value={text}
                onChange={ev => setText(ev.target.value)}
                autofocus 
                />
            ) : (
                <button
                className="btn btn-primary"
                onClick={() => setStarted(true)}
                >
                Start !
                </button>
            )}
            <div>
                {started && <h2 className='text-center flex-grow-1'>{timer} secondes</h2>}
            </div>
        </div>
    </div>
  )
}
export default Typer;