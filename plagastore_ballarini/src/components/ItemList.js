import Item from "./Item";


function ItemList ({products}) {
    return (
        <ul>
            {products.map((products)=> (<Item products={products}/>) )}
            
        </ul>
    );
}

export default ItemList;