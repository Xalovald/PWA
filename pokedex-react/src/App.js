import * as React from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from "react";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);

  function laodData(){
    fetch(URL).then(
        response => response.json().then(
            data => setPokemon(data)
        )
    );
  }

const navigate = useNavigate();
return (
    <div className="App">
      <div>
      <Link to={() => navigate("/Home")}>Pokedex avec React !</Link>
      </div>
      <a to={() => navigate("/Card")}></a>
      <Outlet />
    </div>
  );
}

export default App;
