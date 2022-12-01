

function Item ({products}) {
    return (
        <div>
            <img src={products.img}/>
            <li> {products.name}  </li>
        </div>
    );
}

export default Item;
