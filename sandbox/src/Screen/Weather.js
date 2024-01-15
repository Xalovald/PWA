import { useState } from "react";

const URL ='http://api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q=Annecy&dt=2024-01-15';

function Weather(props){
const [temperature, setTemperature] = useState(null);

function laodData(){
    fetch(URL).then(
        response => response.json().then(
            data => setTemperature(data)
        )
    );
}
if(temperature){
<div>
    Il fait un température de {temperature.current.temp_C}°c à Annecy
</div>
}
    
}
export default Weather;