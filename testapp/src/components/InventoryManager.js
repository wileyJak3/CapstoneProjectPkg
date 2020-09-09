import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form,Button, Container } from "react-bootstrap";
import './css/Navbar.css'


// component for the form that adds items to the inventory table
function InventoryManager({ getCart }) {
  const [input, setInput] = useState({
    inventoryName: "",
    inventoryImg: "",
    inventoryPrice: "",
  });

  function handleChange(e) {
    const { value, id } = e.target;
    setInput({ ...input, [id]: value });
  }


  // function to send the info entered into the form to the inventory table
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8281/inventory", input);
      console.log(res.data);

      //   const secondRes = await axios.get("http://localhost:8281/inventory");
      //   setUsers(secondRes.data);
    } catch (e) {
      console.error(e, e.message);
    }
    getCart();
  }
  return (
    <div>
      {/* <header>
        <Form
          onChange={(e) => handleChange(e)}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>
            Item Name:
            <input type="text" id="inventoryName" />
          </label>
          <label>
            Item Image:
            <input type="text" id="inventoryImg" />
          </label>
          <label>
            Item Price:
            <input type="number" id="inventoryPrice" />
          </label>
          <input type="submit" />
        </Form> */}
        {/* {users
          ? users.map((user) => (
              <User
                username={user.username}
                userId={user.id}
                getUsers={grabAllUsers}
              />
            ))
          : "Loading..."} */}
      {/* </header> */}
      <Container variant = 'outline-primary'>
          <div className = "h3">
          <h3>Add Inventory Item</h3>
          </div>
      <Form
          onChange={(e) => handleChange(e)}
          onSubmit={(e) => handleSubmit(e)}
        >
        <Form.Group >
          <Form.Control type="text" id="inventoryName" placeholder="Inventory Item Name" />
           </Form.Group>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          <Form.Group >
          <Form.Control type="text" id="inventoryImg" placeholder="Inventory Item Image" />
           </Form.Group>
           <Form.Group >
          <Form.Control type="number" id="inventoryPrice" placeholder="Inventory Item Price" />
        </Form.Group>

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>  Item Image:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */} 
        <Button variant='outline-primary' type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  );
}

export default InventoryManager;
