import logo from './logo.svg';
import './App.css';
//import header from "./components/header.js";
//import body from "./components/body.js";
//import footer from "./components/footer.js";
import plaganavbar from "./components/navbar.js"
import {useState} from "react"; 


function App() {
  const [] = useState (); 
  return (
    <div className="App">
      <plaganavbar>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
        Logo
        </a>

        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="#">
            Link 1
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
            Link 2
            </a>
        </li>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#"
            id="navbardrop"
            data-toggle="dropdown"
            >
            Dropdown link
            </a>
            <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
            Link 1
            </a>
            <a className="dropdown-item" href="#">
            Link 2
            </a>
            <a className="dropdown-item" href="#">
            Link 3
            </a>
            </div>
        </li>
        </ul>
        </nav>
      </plaganavbar>
    </div>
  );
}

export default App;
