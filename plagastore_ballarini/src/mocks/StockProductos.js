import devil from '../assets/devil.jpg'
import humansareplaga from '../assets/humansareplaga.jpg'
import moonbullet from '../assets/moonbullet.jpg'
import plaga420 from '../assets/plaga420.jpg'
import plagatrash from '../assets/plagatrash.jpg'
import stayingalive from '../assets/stayingalive.jpg'

const StockProductos = [
    {
        id: "B01",
        category: "Buzo",
        name: "Buzo The Funny Devil", 
        description: "El diablo puede ser mas sensual de lo que crees", 
        stock: 12,
        img: devil,
        precio: 7500,
    },
    {
        id: "B02",
        category: "Buzo",
        name: "Buzo Humans are Plaga", 
        description: "No solo lo aceptamos sino que multiplicamos el estandarte", 
        stock: 8,
        img: humansareplaga,
        precio: 7500,
    },
    {
        
        id: "B03",
        category: "Buzo",
        name: "Buzo Moon", 
        description: "La luna plateada ha recibido una bala de plata en su tiro de gracia", 
        stock: 17,
        img: moonbullet,
        precio: 7500,
    },
    {
        id: "R01",
        category: "Remera",
        name: "Remera Weed", 
        description: "I need some weeeeed", 
        stock: 12,
        img: plaga420 ,
        precio: 3500,
    },
    {
        id: "R02",
        category: "Remera",
        name: "Remera Plaga Trash", 
        description: " Remera para ir a los recitales bien trasheros", 
        stock: 8,
        img: plagatrash,
        precio: 3500,
    },
    {
        
        id: "R03",
        category: "Remera",
        name: "Remera Staying Alive", 
        description: "El Cafe te mantiene vivo hasta la muerte", 
        stock: 17,
        img: stayingalive,
        precio: 3500,
    },

]; 

export default StockProductos; 

