import React, { useContext, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ApiContext from "./contexts/ApiContext";
// import  {Col} from "react-bootstrap/Row";
import { Container, Button } from "react-bootstrap";
import "./css/InventoryManagerPage.css";
import axios from "axios";
import InventoryManager from "./InventoryManager";

// manage inventory route componets 
function InventoryManagerPage({ getCart }) {
  const apiContextData = useContext(ApiContext);
  let inventoryItems = apiContextData[2].inventoryData;

  console.error(inventoryItems);



// function that allows users to remove items stored int the inventory  
  async function delElement(itemId) {
    try {
      const res = await axios.delete(
        "http://localhost:8281/inventory/" + itemId
      );
      // const res2 = await axios.delete("http://localhost:8281/inventory/" + itemId);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
    getCart();
  }


// function that prints the items that have been store in the inventory

  function printInv() {
    return inventoryItems.map((invItem) => (
      <div>
        {/* <div>{invItem.inventoryName}</div>
        <div> {invItem.inventoryImg}</div>
        <div>{invItem.inventoryPrice}</div> */}
        <Card>
          <Card.Header as="h5">{invItem.inventoryName}</Card.Header>
          <div>
            <Card.Body>
              <Card.Title>{invItem.inventoryImg}</Card.Title>
              <Card.Text>{invItem.inventoryPrice}</Card.Text>
              <Button variant = 'outline-primary'
                id={invItem.inventoryId}
                onClick={(e) => delElement(e.target.id)}
              >
                Remove Item
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    ));
    // getCart()
  }

  useEffect(() => {
    // firstPhone();
  }, []);

  return (
    <div>
      <InventoryManager getCart={getCart} />
      <div id="invManCard">
        <Container>{inventoryItems ? printInv() : "Loading..."}</Container>
      </div>
    </div>
  );
}

export default InventoryManagerPage;
