import logo from './logo.svg';
import './App.css';
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
