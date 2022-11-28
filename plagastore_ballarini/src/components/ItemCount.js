//Aqui hay que crear un boton y un contador con mas y menos para crecer y decrecer la cantidad de productos. 

import { useState } from "react";
import { useEffect } from "react";

function Counter () {
    const [count, setCount] = useState (0);
    useEffect(() => {
        debugger;
        console.log(`El conteo es: ${count}`);
    });

    //Por el momento el valor del stock está definido en este componente, pero ya quedó vinculado a los botones a los fines de que el usuario nunca pueda agregar mas productos que el stock disponible. 
    //Luego hay que vincularlo a otro componente, o bien json, o base de datos. 
    const stock = 14; 

    return (
        <div>
            <p> Cantidad : {count} </p>
            <button className='counter'  disabled={count < 1} onClick={()=> setCount (count -1)}>-          
            </button>
            <button className='counter' disabled={count > stock} onClick={()=> setCount (count +1)} >+</button>
            <button className='btn btn-primary' disabled={stock<1} >Agregar al carrito</button>
        </div>

    );    
}


export default Counter;
