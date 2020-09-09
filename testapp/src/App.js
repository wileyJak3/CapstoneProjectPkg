import React, {useState} from "react";
import "./App.css";
import Cart from "./components/Cart";
import AppNavbar from "./components/AppNavbar";
import ItemCard from "./components/CartCard";
import ApiContext from './components/contexts/ApiContext'


function App() {

  //creates states to store inside context file
  const [cartData, setCartData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [CartTotalFunc, setCartTotalFunc] = useState([]);

  function fillContext() {
    return cartData ? <ItemCard/> : "Loading...";
    // {console.log("this is the current name",{name})}
  }




  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <ApiContext.Provider value={[{ cartData, setCartData },{ loginData, setLoginData},{ inventoryData, setInventoryData },{CartTotalFunc, setCartTotalFunc}]}>

        {/* //!Components go below: */}
        
       
      <Cart />
      {/* {fillContext()} */}
    
      
      
      <AppNavbar />
      {/* //!Components go above: */}

      </ApiContext.Provider>
    </div>
  );
}

export default App;
