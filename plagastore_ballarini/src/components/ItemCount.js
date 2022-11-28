//Aqui hay que crear un boton y un contador con mas y menos para crecer y decrecer la cantidad de productos. 

import { useState } from "react";

function counter () {
    const [count, setCount] = useState (0); 

    return (
        <div>
            <h1> La cuenta es: {count} </h1>
            <button onClick={()=> setCount (count +1)} >Aumentar la cuenta</button>

            <button onClick={()=> setCount (count -1)}>Disminuir la cuenta</button>
        </div>
    );
}

export default counter;
