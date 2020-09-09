import React from 'react';
import axios from 'axios';


function DeleteItem({ name, idParam, getCart}) {
    // cart ? cart.map(cartItem => <deleteItem cartId={ cartItem.id } cartName={ cartItem.name } cartPrice={ cartItem.price } getCart = { grabAllCart } />) : 'Loading...' 
    
    async function delElement(itemId) {
        try {
            const res = await axios.delete('http://localhost:8281/cart/' + itemId);
            console.log(res.data);
        } catch(e) {
            console.error(e);
        }
        getCart();
    }

    return(
        <div>
            <p>{ JSON.stringify(name) } : { idParam }</p>
            <button id={ idParam} onClick={ (e) => delElement(e.target.id) }>Remove Item</button>
        </div>
    )
}

export default DeleteItem;