import buzo from '../assets/_DSC8096.jpg'
function Card () {
    return (
        <div>
            <article>
                <div className='card'>
                    <img className='card-img-top' src={buzo} alt="Card image"/>
                    <div className='card-body'>
                        <h4 className='card-title'>John Doe</h4>
                        <p className='card-text'>Some example text.</p>
                        <a href="" className='btn btn-primary'>See Profile</a>

                    </div>
                </div>
            </article>
        </div>
    );
}

export default Card;
