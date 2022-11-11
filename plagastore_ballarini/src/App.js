import logo from './logo.svg';
import './App.css';
//import header from "./components/header.js";
//import body from "./components/body.js";
//import footer from "./components/footer.js";
//import plaganavbar from "./components/navbar.js"
import ItemListContainer from './components/ItemListContainer.js';
import Plaganavbar from './components/Navbar.js';
import {useState} from "react"; 


function App() {
  const [] = useState (); 
  return (
    <div className="App">
      <Plaganavbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
