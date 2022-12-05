import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Productos from '../components/Productos';

const CategoryView = () => {
    const {category} = useParams (); 
    const categories = Productos.filter(product => product.category === "Remera")
    return (
        <Layout>
            {categories.map((product)=> <Item product ={product}/>)}
            <h1>Category View </h1>
        </Layout>
        
    )
};

export default CategoryView; 