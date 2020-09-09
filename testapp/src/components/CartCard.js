import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "react-bootstrap";

function CartCard({ getCart }) {
  const [CartTotal, setCartTotal] = useState(null);

  const apiContextData = useContext(ApiContext);

  let cartItems = apiContextData[0].cartData;
  
  console.log(cartItems);

  // function called upon press of remove item to remove items from the cart table

  async function delElement(itemId) {
    try {
      const res = await axios.delete("http://localhost:8281/cart/" + itemId);
      // const res2 = await axios.delete("http://localhost:8281/inventory/" + itemId);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
    getCart();
  }


  // function that is passed in from prop to update databases

  async function getCartTotal() {
    // e.preventDefault();
    try {
        // nameOfPhone ? firstPhone() : 'Loading...';
        // cartObject.cartName = nameOfCartItem
        // cartObject.cartOwner = priceOfCartItem
        
        

        const secondRes = await axios.get('http://localhost:8281/cart/cartTotal');
        setCartTotal(secondRes.data);

    } catch(e) {
        console.error(e, e.message);
    }
}

// apiContextData[3].setCartTotalFunc(getCartTotal())

//function prints the items that have been added to the cart

  function printCart() {
    return cartItems.map((cartItem) => (
      <div>
        <Col>
          <Card border="info" style={{ color: "#0069D9", width: "18rem" }}>
            <Card.Img src={cartItem.cartImg} alt="Card image" />
            <Card.Header>{cartItem.cartName}</Card.Header>
            <Card.Body>
              <Card.Title>${cartItem.cartPrice}</Card.Title>
              <Button
                variant="outline-primary"
                id={cartItem.cartId}
                onClick={(e) => delElement(e.target.id)}
              >
                Remove Item
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

  getCartTotal()
  console.log(CartTotal)

  // <button id={ idParam} onClick={ (e) => delElement(e.target.id) }>Remove Item</button>

  return (
    <div>
      {/* <Card
        border="info"
        style={{ background: "black", color: "red", width: "18rem" }}
      >
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.Header>{cartItem.cartName}</Card.Header>
        <Card.Body>
          <Card.Title>{cartItem.cartId}</Card.Title>
          <button id={ cartItem.cartId} onClick={ (e) => delElement(e.target.id) }>Remove Item</button>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
    {/* {apiContextData[3].setCartTotalFunc(getCartTotal())} */}
      <Container>
        {CartTotal ? <h2> Cart Total: ${CartTotal} </h2> : <h2>Cart Empty</h2>}
      </Container>
      <Container>
        <Row>{printCart()}</Row>
      </Container>
    </div>
  );
}

export default CartCard;
