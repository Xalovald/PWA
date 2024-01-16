import Card from "../Component/Card";
import '../Card.css'
import { useEffect, useState } from "react";

function Home() {

    const [cardNumbers, setCardNumbers] = useState([117]);

    useEffect(() => {
        if (cardNumbers.length >= 4) {
          const newCards = Array.from({ length: 4 }, (_, index) => cardNumbers.length + index + 1);
          setCardNumbers(prevCardNumbers => [...prevCardNumbers, ...newCards]);
        }
      }, [cardNumbers]);

    return (
    <div className="pokemon-card-container">
        {cardNumbers.map(number => (
        <Card key={number} number={number} />
      ))}
    </div>
    )
}

export default Home;