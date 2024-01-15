const weekdays = [
    "lundi", "mardi", "mercredi", "jeudi",
    "vendredi", "sameid", "dimanche"
]

function Agenda(props) {
    // weekdays.forEach((day) => {
    //     console.log(day);
    // });

    // const capitalizedWeekdays = weekdays.map((day) => {
    //     return day.toUpperCase();
    // })

    return(
        <div
        className="m-3 d-flex justify-content-start">
            <ul>
                {weekdays.map((day) => (
                    <li
                    className={day === props.day && "fw-bold"} 
                    key={day}
                    >
                        {day.toUpperCase()}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default Agenda;