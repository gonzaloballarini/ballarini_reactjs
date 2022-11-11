import Card from './Card';

function ItemListContainer () {
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
        </div>
    );
}

export default ItemListContainer;
