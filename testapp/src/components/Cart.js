import React, { useEffect, useState, useContext }from 'react';
import axios from 'axios';
import DeleteItem from './DeleteItem';
import ApiContext from './contexts/ApiContext';


//function called first to set the store the values from db in the context for the application
function Cart() {
    const [nameOfCartItem, setNameOfCartItem] = useState("");
    const [priceOfCartItem, setPriceOfCartItem] = useState("");
    const [cartObject, setCartObject] = useState({cartName: "", cartOwner: ""});
    // const [inventoryObj, setInventory] = useState({inventoryName:"", inventoryImg:""});
    const [cart, setCart] = useState([]);
    const [inventory, setInventory] = useState(null);


    //! ─── Context ──────────────────────────────────────────────────────────────────
    const apiContextData = useContext(ApiContext);

    // async function grabAllCart() {
    //     try {
    //         const res = await axios.get('http://localhost:8281/cart');
    //         setCart(res.data);
    //         const res2 = await axios.get('http://localhost:8281/inventory');
    //         setInventory(res2.data);
    //     } catch(e) {
    //         console.error(e, e.message);
    //     }
    // }

    // useEffect(() => {
    //     grabAllCart();
    //     firstPhone();
    // }, [])

    // function handleChange(e) {
    //     const{ value, id } = e.target;
    //     setCartObject({...cartObject, [id]: value })
    // }

    // // console.log(nameOfPhone);
    // // console.log(priceOfPhone);
    // async function firstPhone() {
    //     // e.preventDefault();
    //     setNameOfCartItem("iPhone 11 128GB Red");
    //     setPriceOfCartItem("$749.00");
    //     console.log(nameOfCartItem);
    //     console.log(priceOfCartItem);
    // }

    // useEffect(() => {
    //     firstPhone();
    // }, [])

    async function postPhone(e) {
        e.preventDefault();
        try {
            // nameOfPhone ? firstPhone() : 'Loading...';
            cartObject.cartName = nameOfCartItem
            cartObject.cartOwner = priceOfCartItem
            
            const res = await axios.post('http://localhost:8281/cart', cartObject)
            console.log(res.data);

            const secondRes = await axios.get('http://localhost:8281/cart');
            setCart(secondRes.data);

        } catch(e) {
            console.error(e, e.message);
        }
    }

    
    console.log(apiContextData)


        return (
            <div>
                {/* <div className = "phoneOne">
                    <form onChange = { (e) => handleChange(e) }>
                        <img alt = "" width = "400px" src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763"/>
                        <h2>iPhone 11</h2>
                        <h2>128GB Red</h2>
                        <h3>$749.00</h3>
                        <button 
                        onClick= { (e) => {
                            firstPhone(e);
                            postPhone(e);
                        }} >Add to Cart</button>
                    </form>
                    {
                        cart ? cart.map(cartItem => <DeleteItem idParam={ cartItem.cartId } name={ cartItem.cartName} cartPrice={ cartItem.cartPrice } getCart = { grabAllCart } />) : 'Loading...' 

                        
                    } */}
                    {cart ? apiContextData[0].setCartData(cart):null}
                    {cart ? apiContextData[2].setInventoryData(inventory):null}
                    {/* {console.log(apiContextData[0].cartData)} */}
                {/* </div> */}
            </div>
        )
    }

export default Cart;