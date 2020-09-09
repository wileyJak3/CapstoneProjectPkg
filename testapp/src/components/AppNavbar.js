import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import DeleteItem from "./DeleteItem";
import ApiContext from "./contexts/ApiContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InventoryPage from "./InventoryPage";
import CartPage from "./CartCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Navbar.css";
import InventoryManger from "react-bootstrap/Card"
import InventoryManagerPage from "./InventoryManagerPage";
import Home from "./Home";

function AppNavbar() {
  //! ─── States ──────────────────────────────────────────────────────────────────
  const [nameOfCartItem, setNameOfCartItem] = useState("");
  const [priceOfCartItem, setPriceOfCartItem] = useState("");
  const [cartObject, setCartObject] = useState({ cartName: "", cartOwner: "" });
  const [cart, setCart] = useState(null);
//   const [inventoryObj, setInventoryObj] = useState({inventoryName:"", inventoryImg:""});
  const [inventory, setInventory] = useState(null);

  //! ─── Context ──────────────────────────────────────────────────────────────────
  const apiContextData = useContext(ApiContext);

  //Function to send off axios calls to cart and inventory to update the objects

  async function grabAllCart() {
    try {
      const res = await axios.get("http://localhost:8281/cart");
      setCart(res.data);
      const res2 = await axios.get('http://localhost:8281/inventory');
      setInventory(res2.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }

  useEffect(() => {
    grabAllCart();
    // firstPhone();
  }, []);

  function handleChange(e) {
    const { value, id } = e.target;
    setCartObject({ ...cartObject, [id]: value });
  }

  // console.log(nameOfPhone);
  // console.log(priceOfPhone);
//   async function firstPhone() {
//     // e.preventDefault();
//     setNameOfCartItem("iPhone 11 128GB Red");
//     setPriceOfCartItem("$749.00");
//     console.log(nameOfCartItem);
//     console.log(priceOfCartItem);
//   }

//   // useEffect(() => {
  //     firstPhone();
  // }, [])

//   async function postPhone(e) {
//     e.preventDefault();
//     try {
//       // nameOfPhone ? firstPhone() : 'Loading...';
//       cartObject.cartName = nameOfCartItem;
//       cartObject.cartOwner = priceOfCartItem;
      

//       const res = await axios.post("http://localhost:8281/cart", cartObject);
//       console.log(res.data);

//       const secondRes = await axios.get("http://localhost:8281/cart");
//       setCart(secondRes.data);
//     } catch (e) {
//       console.error(e, e.message);
//     }
//   }

//   console.log(apiContextData);


//nav bar which uses react router to rout the components

  return (
    <Router>
      <div id="navBar">
        {cart ? apiContextData[0].setCartData(cart) : null}
        {cart ? apiContextData[2].setInventoryData(inventory):null}
        <Navbar bg="light" >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {/* <Nav className="mr-auto"> */}
          <Nav>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link to="/Store">Store</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/Cart">Cart</Link>
            </Nav.Link>
            {/* <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/Store">Store</Nav.Link>
          <Nav.Link to="/Cart">Cart</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/InventoryManager">Manage Inventory</Link>
            </Nav.Link>
            {/* <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/Store">Store</Nav.Link>
          <Nav.Link to="/Cart">Cart</Nav.Link> */}
          </Nav>

          <Nav.Item>
            
              <Button variant = 'outline-primary'>Sign In</Button>
           
          </Nav.Item>
        </Navbar>
        {/* {cart ? <InventoryPage getCart = {grabAllCart}/>: "loading..."} */}
        {/* <InventoryPage getCart = {grabAllCart} />
      {cart ? <CartPage getCart = {grabAllCart}/>: "loading..."} */}

        <Switch>
          <Route path="/Store">
            <InventoryPage getCart={grabAllCart} />
          </Route>
          <Route path="/InventoryManager">
          <InventoryManagerPage getCart={grabAllCart}/>
          </Route>
          <Route path="/Cart">
            {cart ? <CartPage getCart={grabAllCart} /> : "loading..."}
          </Route>
          <Route path="/">
            {/* <InventoryManagerPage/> */}
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppNavbar;
