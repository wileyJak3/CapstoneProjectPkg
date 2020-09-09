import React,{useContext} from 'react'
import ItemCard from './ItemCard';
import ApiContext from "./contexts/ApiContext";

// componet for the cart route 
function CartPage({getCart}) {
    const apiContextData = useContext(ApiContext);
    // console.log(apiContextData)

    // function fillContext() {
    //     return apiContextData[0].cartData[0] ? <ItemCard getCart={getCart}/> : "Loading...";
    //     // {console.log("this is the current name",{name})}
    //   }
    
    return (
        <div>
      {/* {fillContext()} */}
      
      <CartCard getCart={getCart}/>
        </div>
    )
}

export default CartPage
