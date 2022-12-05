import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import Plaganavbar from './components/Navbar.js';
import ItemDetailContainer from './components/ItemDetailContainer.js'; 
import { Layout } from './components/Layout';

function App() {

  return (
    <Layout>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </Layout>
  );
}

export default App;
