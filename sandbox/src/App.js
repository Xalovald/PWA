import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
 
import './App.css';
import Footer from './Component/Footer';

function App() {
  const navigate = useNavigate();
 
  let renderedTab;
 
  return (
  <div className="App m-3">
    <ul className="nav">
      <li className="nav-item">
        <a 
                    className={"nav-link "}
                    href="#"
                    onClick={() => navigate("/Home")}
        >
                    Accueil
        </a>
      </li>
        <li className="nav-item">
          <a 
                      className={"nav-link "}
                      href="#"
                      onClick={() => navigate("/agenda")}
          >
                      Agenda
          </a>
        </li>
        <li className="nav-item">
          <a 
                      className={"nav-link "}
                      href="#"
                      onClick={() => navigate("/Counter")}
          >
                      Counter
          </a>
        </li>
        <li className="nav-item">
        <a 
                    className={"nav-link "}
                    href="#"
                    onClick={() => navigate("/Typer")}
        >
                    Typer
        </a>
        </li>
        <li className="nav-item">
          <a 
                      className={"nav-link "}
                      href="#"
                      onClick={() => navigate("/Weather")}
          >
                      Weather
          </a>
        </li>
      </ul>
  
        {renderedTab}
        <Footer />
  </div>
  );
}
 
export default App;