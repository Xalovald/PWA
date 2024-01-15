import { useState, useEffect } from 'react';

import Button from "../Component/Button";

function Counter(props){

    const [number, setNumber] = useState(0);
    
    // let number = 0;
    // function increment(){
    //     number++;
    // }

    function increment(){
        setNumber(number + 1);
    }

    return(
        <div>
            <h3 className="text-center">compteur</h3>
            
            <div className="d-flex justify-content-center justify-content-around">
                <h4>{number}</h4>
                <Button 
                className="btn-secondary"
                onClick={increment}
                name="incrémenter"/>

                <Button
                className="btn-secondary "
                onClick={() => setNumber(number - 1)}
                name="décrémenter" />
            </div>
        </div>
    )
}
export default Counter;