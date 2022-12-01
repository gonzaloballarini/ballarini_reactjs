import Card from './Card';
import ItemList from './ItemList';
import Productos from './Productos';
import {useState} from 'react'; 


function ItemListContainer () {

    const [products, setProducts] = useState ([]);
    const [hasProducts, setHasProducts] = useState (false); 

    const productList = new Promise ((resolve) => setTimeout (() => {
    resolve(Productos);},3000) );

    productList
    .then ((data)=> setProducts(data))
    .then ((data)=> setHasProducts(!data));

    console.log (products);

    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Card/>
                </div>
                <div className='col-md-3'>
                    <Card/>
                </div>
                <div className='col-md-3'>
                    <Card/>
                </div>
                <div className='col-md-3'>
                    <Card/>
                </div>
            </div>
            Aqui deberían aparecer los distintos productos de la landing page
            <div>
                {!hasProducts? <p>Loading...</p> : <p>Hay productos </p>}
            </div>
            <ItemList products={products}/>

        </div>
    );
}

export default ItemListContainer;
