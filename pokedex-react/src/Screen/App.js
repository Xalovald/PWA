import * as React from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from 'react-router-dom';
import '../App.css';

function App() {

const navigate = useNavigate();
return (
    <div className="App">
      <div>
      <Link to={() => navigate("/Home")}>Pokedex avec React !</Link>
      </div>
      
      <Outlet />
    </div>
  );
}

export default App;
