import Item from "./Item";


function ItemList ({products}) {
    return (
        <ul>
            {products.map((product)=> (<Item product={product}/>) )}
            
        </ul>
    );
}

export default ItemList;