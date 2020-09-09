import React,{useContext} from 'react'
import ItemCard from './ItemCard';
import ApiContext from "./contexts/ApiContext";
import InventoryManager from "./InventoryManager"

//Store page component 
function InventoryPage({getCart}) {
    const apiContextData = useContext(ApiContext);


    // console.log(apiContextData)

    // function fillContext() {
    //     return apiContextData[0].cartData[0] ? <ItemCard getCart={getCart}/> : "Loading...";
    //     // {console.log("this is the current name",{name})}
    //   }
    
    return (
        <div>
      {/* {fillContext()} */}
      {/* <InventoryManager getCart = {getCart}/> */}
      <ItemCard getCart={getCart}/>


      
        </div>
    )
}

export default InventoryPage
