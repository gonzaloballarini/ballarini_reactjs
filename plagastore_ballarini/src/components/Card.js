import buzo from '../assets/stayingalive.jpg'
import Counter from './ItemCount.js';

function Card () {
    return (
        <div>
            <article>
                <div className='card'>
                    <img className='card-img-top' src={buzo} alt="Card image"/>
                    <div className='card-body'>
                        <h4 className='card-title'>John Doe</h4>
                        <p className='card-text'>Some example text.</p>
                        <Counter/>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Card;
