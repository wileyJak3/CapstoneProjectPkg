import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import ApiContext from "./contexts/ApiContext";
import axios from "axios";
import { preInvObj } from "./objects/preInvItems";
import { Col, Row, Container, Button } from "react-bootstrap";

//function that creates the cards of items that can be added to purchase
function ItemCard({ getCart }) {
  //! ─── States ──────────────────────────────────────────────────────────────────
  // const [nameOfCartItem, setNameOfCartItem] = useState("");
  // const [priceOfCartItem, setPriceOfCartItem] = useState("");
  const [cartObject, setCartObject] = useState({
    cartName: "",
    cartPrice: "",
    cartImg: "",
  });
  const [inventoryObject, setInventory] = useState({
    inventoryName: "",
    inventoryImg: "",
    inventoryPrice: "",
  });
  const [cart, setCart] = useState(null);

  //! ─── Context ──────────────────────────────────────────────────────────────────
  const apiContextData = useContext(ApiContext);

  //! ─── Variables ──────────────────────────────────────────────────────────────────
  let preInventoryArray = preInvObj;

  let inventoryItems = apiContextData[2].inventoryData;
  // console.error(inventoryItems);

  useEffect(() => {
    getCart();
  }, []);


// function that is call after add cart is pressed to store items in cart db

  async function postPhone(e, nameOfCartItem, priceOfCartItem, imgOfCartItem) {
    e.preventDefault();
    try {
      // nameOfPhone ? firstPhone() : 'Loading...';
      cartObject.cartName = nameOfCartItem;
      cartObject.cartPrice = priceOfCartItem;
      cartObject.cartImg = imgOfCartItem;
      inventoryObject.inventoryName = nameOfCartItem;
      inventoryObject.inventoryImg = imgOfCartItem;
      inventoryObject.inventoryPrice = priceOfCartItem;

      const res = await axios.post("http://localhost:8281/cart", cartObject);
      console.log(res.data);

      const res2 = await axios.post(
        "http://localhost:8281/inventory",
        inventoryObject
      );
      console.log(res.data);

      const secondRes = await axios.get("http://localhost:8281/cart");
      setCart(secondRes.data);
      getCart(); //! Added this to see if refreshes
    } catch (e) {
      console.error(e, e.message);
    }
  }

  // function that is call after add cart is pressed to store items in cart db
  
  async function postPhone2(e, nameOfCartItem, priceOfCartItem, imgOfCartItem) {
    e.preventDefault();
    try {
      // nameOfPhone ? firstPhone() : 'Loading...';
      cartObject.cartName = nameOfCartItem;
      cartObject.cartPrice = priceOfCartItem;
      cartObject.cartImg = imgOfCartItem;
      inventoryObject.inventoryName = nameOfCartItem;
      inventoryObject.inventoryImg = imgOfCartItem;
      inventoryObject.inventoryPrice = priceOfCartItem;

      getCart();

      const res2 = await axios.post(
        "http://localhost:8281/cart",
        cartObject
      );

      const secondRes = await axios.get("http://localhost:8281/cart");
      setCart(secondRes.data);
      getCart(); //! Added this to see if refreshes
    } catch (e) {
      console.error(e, e.message);
    }
  }

// fucntion to print all values store in an object in the application to have items when site loads

  function printPreInventory(preInvObj) {
    return preInvObj.map((preInvItem) => (
      <div>
        <Col>
          <Card
            border="info"
            style={{  color: "#0069D9", width: "18rem" }}
          >
            <Card.Img src={preInvItem.preInvImg} />
            <Card.Header>{preInvItem.preInvName}</Card.Header>
            <Card.Body>
              <Card.Title>${preInvItem.preInvPrice}</Card.Title>
              <Button variant = 'outline-primary'
                style={{  }}
                onClick={(e) =>
                  postPhone2(
                    e,
                    preInvItem.preInvName,
                    preInvItem.preInvPrice,
                    preInvItem.preInvImg
                  )
                }
              >
                Add to Item
              </Button>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </div>
    ));
  }

// function to print all items available to purchase  that have been added to the inventory data base

  function printItems() {
    return inventoryItems.map((invItem) => (
      <div>
        <Col>
          <Card
            border="info"
            style={{  color: "#0069D9", width: "18rem" }}
          >
            <Card.Img src={invItem.inventoryImg} alt="Card image" />
            <Card.Header>{invItem.inventoryName}</Card.Header>
            <Card.Body>
              <Card.Title>${invItem.inventoryPrice}</Card.Title>
              <Button variant = 'outline-primary'
              onClick={(e) => postPhone2(
                    e,
                    invItem.inventoryName,
                    invItem.inventoryPrice,
                    invItem.inventoryImg
                    
                  )}>Add to Cart</Button>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </div>
    ));
  }

  // <button id={ idParam} onClick={ (e) => delElement(e.target.id) }>Remove Item</button>

  return (
    <div>
      {/* <Card
        border="info"
        style={{ background: "black", color: "red", width: "18rem" }}
      >
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.Header>{cartItems[0].cartName}</Card.Header>
        <Card.Body>
          <Card.Title>{cartItems[0].cartId}</Card.Title>
         
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
      {/* <button id={cartItem.cartId} onClick={(e) => delElement(e.target.id)}>
            Remove Item
          </button> */}
      {/* {cart ? apiContextData[0].setCartData(cart):null} */}
      {/* {printItems()} */}
      <Container>
        <Row>
          {printPreInventory(preInventoryArray)}
          {inventoryItems ? printItems() : "loading..."}
        </Row>
        {/* <Row></Row> */}
      </Container>
    </div>
  );
}

export default ItemCard;
